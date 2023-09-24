from django.shortcuts import render
from rest_framework.response import Response

from .serializer import  crimingalserializer
from .models import Criminal

from rest_framework import viewsets, status
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404



class criminalcreateAPi(viewsets.ModelViewSet):
    queryset = Criminal.objects.all()
    serializer_class = crimingalserializer
    


    
