from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from .views import *

urlpatterns = [
    url(r'^$',index, name="index"),
    path('index/',index, name="index"),
]