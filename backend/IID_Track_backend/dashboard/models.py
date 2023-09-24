from django.db import models
from user.models import User

# Create your models here.
    
    
class Criminal(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    identification_number = models.CharField(max_length=20, unique=True)
    photo = models.ImageField(upload_to='criminal_photos/')
    biometric = models.ImageField(upload_to='criminal_biometric/')
    
    # Biometrics
    height = models.FloatField(null=True, blank=True)
    weight = models.FloatField(null=True, blank=True)
    eye_color = models.CharField(max_length=50, null=True, blank=True)
    hair_color = models.CharField(max_length=50, null=True, blank=True)
    
    # Other necessary fields
    date_of_arrest = models.DateField(null=True, blank=True)
    arrest_location = models.CharField(max_length=200, null=True, blank=True)
    charges = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.identification_number})"       
