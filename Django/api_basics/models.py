from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length = 150)
    category = models.CharField(max_length = 150)
    description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    latitude = models.FloatField()
    longitude = models.FloatField()
    collector = models.ForeignKey(User, on_delete = models.CASCADE, related_name ='collector')
    student = models.ForeignKey(User, on_delete = models.CASCADE, related_name='student')
    city = models.CharField(max_length = 100)
    state = models.CharField(max_length = 100)
    cover_img = models.ImageField()

    def __str__(self):
        return self.title
