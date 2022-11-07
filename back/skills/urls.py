from .serializers import *
from django.urls import path
from .views import *


urlpatterns = [
    path('skills/', SkillList.as_view(), name='skill_list'),
    path('skills/<int:pk>/', SkillDetail.as_view(), name='skill_detail'),
    path('posts/', PostList.as_view(), name='post_list'),
    path('posts/<int:pk>/', PostDetail.as_view(), name='post_detail'),
]