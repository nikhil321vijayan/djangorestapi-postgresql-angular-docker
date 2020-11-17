from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .serializers import RecordSerializer
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
# Create your views here.
def create_record(request):
    if request.method == 'GET':
        records = Record.objects.all()
        serializer = RecordSerializer(records, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = RecordSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            text_stored = serializer.data['text']
            index = serializer.data['id']
            response_dict = {
                "response":"success:["+text_stored+"]",
                "index":index
            }
            return JsonResponse(response_dict, status=201)
        return JsonResponse(serializer.errors, status=400)    
        
