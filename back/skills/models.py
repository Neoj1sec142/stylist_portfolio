from django.db import models
from django.utils import timezone
    
class Post(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)
    img = models.ImageField(default='default.jpeg', upload_to='port_photos/%Y/%m/%d/')
    description = models.TextField(null=True, blank=True)
    techniques = models.TextField(null=True, blank=True, default='')
    date_added = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.title