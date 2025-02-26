
from django.conf import settings
from django.http import JsonResponse
from rest_framework.response import Response


# @decorator_stats
def stats(request):

    data = {
        'active': True,
    }
    return Response(data, status=200)


# @decorator_health
def health(request):

    data = {
        'active': True,
    }

    return Response(data, status=200)
