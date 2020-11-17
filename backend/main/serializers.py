from .models import *
from rest_framework import serializers


class RecordSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    text = serializers.CharField(required=True, max_length=20)

    def create(self, validated_data):
        return Record.objects.create(**validated_data)

    