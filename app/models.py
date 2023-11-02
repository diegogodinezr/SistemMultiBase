from django.db import models

# Create your models here.
class Instructor(models.Model):
    id_instructor = models.IntegerField()
    nombre = models.CharField(max_length=255)
    primer_apellido = models.CharField(max_length=255)
    segundo_apellido = models.CharField(max_length=255)
    telefono = models.CharField(max_length=255)
    correo = models.CharField(max_length=255)
