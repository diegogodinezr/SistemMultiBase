from django.shortcuts import render
import pyodbc

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

    return render(request, 'cursos.html', {'instructor': rows})
