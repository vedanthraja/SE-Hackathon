from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.project_list, name="project"),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('register/', views.register, name='register'),
    #path('details/<int:pk>/', views.article_detail, name="details")
]