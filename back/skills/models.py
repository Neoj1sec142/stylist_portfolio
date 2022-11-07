from django.db import models
from django.utils import timezone

class Skill(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    skill_lvl = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return self.title
    
class Post(models.Model):
    of_skill = models.ForeignKey(Skill, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=100, null=True, blank=True)
    img = models.ImageField(default='default.jpeg', upload_to='port_photos/%Y/%m/%d/')
    description = models.TextField(null=True, blank=True)
    date_added = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.title