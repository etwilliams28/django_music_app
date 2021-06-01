from django.db import models
import string
import random
# Create your models here.

def generate_unique_code():
    length = 7

    while True:
        code = ''.join(random.choises(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code




class Room(models.Model):
    code = models.CharField(max_length=9, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=15, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)