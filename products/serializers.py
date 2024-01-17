from rest_framework import serializers
from . models import Product, Reviews


class ReviewSerializer(serializers.ModelSerializer):
    avatar = serializers.SerializerMethodField(source='')
    user = serializers.ReadOnlyField(source='user.email')
    
    class Meta:
        model = Reviews
        fields = "__all__"
    
    def get_avatar(self, obj):
        return obj.user.avatar.url

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
    
    
    def get_reviews(self, obj):
        reviews = obj.reviews_set.all()
        serializers =  ReviewSerializer(reviews, many=True)
        return serializers.data