from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('', index, name="index"),    # Utiliza path en lugar de url
    path('index/', index, name="index"),
    path('registro/', registro, name="registro"),
    path('cursos/', cursos, name="cursos"),
]
