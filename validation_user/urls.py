from django.urls import path
from django.contrib import admin
from validation_user import views

urlpatterns = [
    path('register/',views.register,name='register'),
    path('login/',views.login,name='login'),
    
]
