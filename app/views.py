from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'index.html')

def registro(request):
    return render(request, 'registro.html')

def cursos(request):
    return render(request, 'cursos.html')