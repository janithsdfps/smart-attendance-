# urls.py
from django.urls import path
from .views import register_company

urlpatterns = [
    path('api/register-company', register_company),
]
