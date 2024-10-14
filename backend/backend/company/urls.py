from django.urls import path
from . import views
from .views import register_company

urlpatterns = [
    path('check-mongo-connection/', views.check_mongo_connection, name='check_mongo_connection'),
    path('register-company/', register_company, name='register_company'),
]