from django.db import models

# Create your models here.
class Record(models.Model):
    text = models.CharField(max_length = 20)

    def __str__(self):
        return self.text
