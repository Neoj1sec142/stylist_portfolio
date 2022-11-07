from rest_framework import generics, permissions
from .models import Post, Skill
from .serializers import PostSerializer, SkillSerializer


class SkillList(generics.ListCreateAPIView):
    queryset = Skill.objects.all() #.order_by('-date_created')
    serializer_class = SkillSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Skill
        fields = ('__all__')
        


class SkillDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = (permissions.AllowAny,)


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all() #.order_by('-date_created')
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny,)
    
    class Meta:
        model = Post
        fields = ('__all__')
        ordering = ('-date_created')
        


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny,)