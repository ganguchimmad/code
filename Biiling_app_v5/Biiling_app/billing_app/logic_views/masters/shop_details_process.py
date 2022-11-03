from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from billing_app.models import *
from billing_app.commonuse import common

# function to insert the shopkeepeker details data into the databse
@csrf_exempt
def shop_details_insert(request):
    try:
        if request.method == "POST":
            shop_id_check = Shop_details.objects.filter(shop_id = request.POST['shop_id'],status=1).exists()
            if shop_id_check:
                return HttpResponse("Shop id is already exists try with new shop id")
            else:

                shop_id = request.POST['shop_id']
                shop_name = request.POST['shop_name']
                address = request.POST['address']
                landmark = request.POST['landmark']

                shop_details_object = Shop_details()
                shop_details_object.shop_id = shop_id
                shop_details_object.shop_name = shop_name
                shop_details_object.shop_address = address
                shop_details_object.landmark = landmark
                shop_details_object.status = 1
                shop_details_object.created_by = request.session['user_type']
                shop_details_object.created_at = common.getCurrentDateTIme()

                shop_details_object.save()
                return HttpResponse('1')
                
    except Exception as e:
        return HttpResponse(e)