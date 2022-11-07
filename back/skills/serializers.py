from rest_framework import serializers
from .models import Post, Skill

class SkillSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Skill
        fields = '__all__'
        extra_fields = ('_all__')
        
class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Post
        fields = '__all__'
        ordering = ('-date_added')
        
        