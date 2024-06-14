from django.urls import path, include
from django.contrib import admin
from validation_user import views
urlpatterns = [
    path('Angola_Hub/',views.Angola_Hub,name='Angola_Hub'),
    path('admin/', admin.site.urls),
    path('auth/',include('validation_user.urls'))
    
]
