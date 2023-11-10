from django.shortcuts import render
import pyodbc
import pymongo

# Create your views here.
def index(request):
    return render(request, 'index.html')

def registro(request):
    # Código para obtener temas de MongoDB
    mongo_client = pymongo.MongoClient('mongodb://daniel:belicon@25.10.16.136:27017/cursos')
    db_mongo = mongo_client['cursos']
    collection_mongo = db_mongo['curso']
    infocurso = [{'id': curso['ID_Curso'], 'tema': curso['Tema']} for curso in collection_mongo.find()]

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



def cursos(request):
    return render(request, 'cursos.html')

def mostrarcursos(request):
    server = '25.59.146.27'
    database = 'instructores'
    username = 'baseinstructor'
    password = '123'

    connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}'
    conn = pyodbc.connect(connection_string)

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM Catalogo_instructores")
    rows = cursor.fetchall()
    for row in rows:
        print(row)

    # Conexión a la base de datos MongoDB
    mongo_client = pymongo.MongoClient('mongodb://daniel:belicon@25.10.16.136:27017/cursos')
    db_mongo = mongo_client['cursos']
    collection_mongo = db_mongo['curso']

    cursos_mongo = list(collection_mongo.find())  # Recupera todos los documentos de la colección "curso"
    print(cursos_mongo)

    return render(request, 'cursos.html', {'instructor': rows, 'cursos': cursos_mongo})

from django.shortcuts import render
import psycopg2
from psycopg2 import Error

def mostrar_registros(request):
    # Parámetros de conexión a la base de datos PostgreSQL
    connection = psycopg2.connect(
        user="basecurso",
        password="123456",
        host="25.56.243.144",
        port="5432",
        database="Registro"
    )

    registros = []

    try:
        # Crear un cursor para ejecutar operaciones con la base de datos
        cursor = connection.cursor()

        # Ejecutar consulta SQL para seleccionar cada atributo de la tabla registro_curso 
        cursor.execute("SELECT id_registro, fecha_registro, id_instructor, id_curso, fecha_inicio, fecha_fin FROM registro_curso")
        
        # Verificar si hay resultados
        if cursor.rowcount > 0:
            # Obtener todos los registros
            records = cursor.fetchall()

            # Crear una lista de diccionarios para almacenar los registros
            for row in records:
                registro = {
                    "id_registro": row[0],
                    "fecha_registro": row[1],
                    "id_instructor": row[2],
                    "id_curso": row[3],
                    "fecha_inicio": row[4],
                    "fecha_fin": row[5]
                }
                registros.append(registro)
        else:
            print("No se encontraron resultados.")

    except Error as e:
        mensaje = f"Error al conectar a la base de datos PostgreSQL: {e}"
        print(mensaje)

    finally:
        # Cerrar el cursor y la conexión si están definidos
        if cursor:
            cursor.close()
        if connection:
            connection.close()

    return render(request, 'mostrar_registros.html', {'registros': registros})


 