from django.shortcuts import render
import pyodbc
import pymongo
from django.http import HttpResponse
from django.core.paginator import Paginator, EmptyPage
import psycopg2
from psycopg2 import Error

# Create your views here.
def index(request):
    return render(request, 'index.html')

def registro(request):
    # Código para obtener temas de MongoDB
    mongo_client = pymongo.MongoClient('mongodb://daniel:belicon@25.10.16.136:27017/cursos')
    db_mongo = mongo_client['cursos']
    collection_mongo = db_mongo['curso']
    infocurso = [{'id_curso': curso['ID_Curso'], 'tema': curso['Tema']} for curso in collection_mongo.find()]

    # Código para obtener instructores de SQL Server
    server = '25.59.146.27'
    database = 'instructores'
    username = 'baseinstructor'
    password = '123'
    connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}'
    conn = pyodbc.connect(connection_string)
    cursor = conn.cursor()
    cursor.execute("SELECT ID_instructor, CONCAT(Nombre, ' ', Primer_Apellido, ' ', Segundo_Apellido) AS NombreCompleto FROM Catalogo_instructores")
    rows = cursor.fetchall()

    # Crear una lista de diccionarios para almacenar los resultados
    instructores = [{'ID_instructor': row.ID_instructor, 'NombreCompleto': row.NombreCompleto} for row in rows]

    return render(request, 'registro.html', {'temas': infocurso, 'instructores': instructores})


def obtener_registros():
    # Parámetros de conexión a la base de datos PostgreSQL
    connection_postgres = psycopg2.connect(
        user="basecurso",
        password="123456",
        host="25.56.243.144",
        port="5432",
        database="registro",
        client_encoding='UTF8'
    )

    registros = []

    try:
        # Crear un cursor para ejecutar operaciones con la base de datos PostgreSQL
        cursor_postgres = connection_postgres.cursor()

        # Conectar a la base de datos SQL Server para obtener los nombres de los instructores
        server_sql_server = '25.59.146.27'
        database_sql_server = 'instructores'
        username_sql_server = 'baseinstructor'
        password_sql_server = '123'
        connection_string_sql_server = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server_sql_server};DATABASE={database_sql_server};UID={username_sql_server};PWD={password_sql_server}'
        conn_sql_server = pyodbc.connect(connection_string_sql_server)
        cursor_sql_server = conn_sql_server.cursor()

        # Ejecutar consulta SQL en SQL Server para obtener los nombres de los instructores
        cursor_sql_server.execute("SELECT ID_instructor, CONCAT(Nombre, ' ', Primer_Apellido, ' ', Segundo_Apellido) AS NombreCompleto FROM Catalogo_instructores")
        instructores_dict = {row[0]: row[1] for row in cursor_sql_server.fetchall()}

        # Conectar a la base de datos MongoDB para obtener los temas de los cursos
        mongo_client = pymongo.MongoClient('mongodb://daniel:belicon@25.10.16.136:27017/cursos')
        db_mongo = mongo_client['cursos']
        collection_mongo = db_mongo['curso']

        # Crear un diccionario con los temas de los cursos
        temas_dict = {curso['ID_Curso']: curso['Tema'] for curso in collection_mongo.find()}

        # Ejecutar consulta SQL en PostgreSQL sin filtro
        cursor_postgres.execute("SELECT * FROM registro_curso ORDER BY ID_Curso")

        # Verificar si hay resultados
        if cursor_postgres.rowcount > 0:
            # Obtener todos los registros
            records = cursor_postgres.fetchall()

            # Crear una lista de diccionarios para almacenar los registros
            for row in records:
                # Obtener el nombre del instructor de la dict creada anteriormente
                id_instructor = row[2]
                nombre_instructor = instructores_dict.get(id_instructor, "")

                # Obtener el tema del curso de la dict creada para MongoDB
                ID_Curso = row[3]
                tema_curso = temas_dict.get(ID_Curso, "")

                registro = {
                    "id_registro": row[0],
                    "fecha_registro": row[1],
                    "nombre_instructor": nombre_instructor,
                    "tema_curso": tema_curso,
                    "fecha_inicio": row[4],
                    "fecha_fin": row[5]
                }
                registros.append(registro)
        else:
            print("No se encontraron resultados.")

    except Error as e:
        mensaje = f"Error al conectar a la base de datos: {e}"
        print(mensaje)

    finally:
        # Cerrar los cursores y las conexiones si están definidos
        if cursor_postgres:
            cursor_postgres.close()
        if cursor_sql_server:
            cursor_sql_server.close()
        if connection_postgres:
            connection_postgres.close()
        if conn_sql_server:
            conn_sql_server.close()
        if mongo_client:
            mongo_client.close()

    return registros


def mostrar_registros(request):
    registros = obtener_registros()
    # Configurar la paginación
    paginator = Paginator(registros, 10)  # Muestra 15 registros por página
    page = request.GET.get('page', 1)  # Obtener el número de página de la solicitud GET

    try:
        registros_pagina = paginator.page(page)
    except EmptyPage:
        # Si la página solicitada está fuera de rango, mostrar la última página
        registros_pagina = paginator.page(paginator.num_pages)

    return render(request, 'mostrar_registros.html', {'registros_pagina': registros_pagina})


def procesar_formulario(request):
    if request.method == 'POST':
        nombre_curso = request.POST.get('curso_id')
        nombre_instructor = request.POST.get('instructor_id')
        fecha_inicio = request.POST.get('fechaInicio')
        fecha_fin = request.POST.get('fechaFin')

        # Conectar a la base de datos remota a través de la VPN
        connection = psycopg2.connect(
            user="basecurso",
            password="123456",
            host="25.56.243.144",
            port="5432",
            database="registro"
        )

        try:
            # Crear un cursor para ejecutar operaciones con la base de datos remota
            cursor = connection.cursor()

            # Llamar al procedimiento almacenado en lugar de ejecutar una consulta SQL directa
            print(f"Curso ID: {int(nombre_curso)}, Instructor ID: {int(nombre_instructor)}, Fecha Inicio: {fecha_inicio}, Fecha Fin: {fecha_fin}")
            # Llamar al procedimiento almacenado utilizando CALL
            cursor.execute("CALL insertar_registro_curso(%s, %s, %s, %s)", (int(nombre_curso), int(nombre_instructor), fecha_inicio, fecha_fin))

            # Confirmar la transacción
            connection.commit()
            
            registro_exitoso = True
        except Error as e:
            mensaje = f"Error al insertar en la base de datos remota: {e}"
            print(mensaje)
            registro_exitoso = False
        finally:
            # Cerrar el cursor y la conexión
            if cursor:
                cursor.close()
            if connection:
                connection.close()
# Actualizar el contexto con la variable registro_exitoso
        return render(request, 'registro.html', {'registro_exitoso': registro_exitoso})
    else:
        # Lógica para manejar otras solicitudes (GET)
        return render(request, 'registro.html')