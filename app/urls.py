from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', index, name="index"),    # Utiliza path en lugar de url
    path('index/', index, name="index"),
    path('registro/', registro, name="registro"),
    path('cursos/', cursos, name="cursos"),
    path('mostrarcursos/', mostrarcursos, name="mostrarcursos"),
    path('mostrar_registros/', mostrar_registros, name='mostrar_registros'),
    path('procesar_formulario/', procesar_formulario, name='procesar_formulario'),
]
