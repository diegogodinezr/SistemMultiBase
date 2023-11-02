from multiprocessing.sharedctypes import Value
from django import forms
from .models import *

class instructorform(forms.ModelForm):
    class Meta:
        model = Instructor
        fields = '_all_'