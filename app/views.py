from django.shortcuts import render
import pyodbc
import pymongo

# Create your views here.
def index(request):
    return render(request, 'index.html')

def registro(request):
    return render(request, 'registro.html')

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

