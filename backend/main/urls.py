from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path('record', views.create_record, name="create")
]
