from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from billing_app.models import *
from billing_app.commonuse import common
import random, string

# function to insert the shopkeepeker details data into the databse
@csrf_exempt
def shop_keeper_insert(request):
    if request.method == "POST":
        try:
            userName_check = Users.objects.filter(username = request.POST['txtUsername'],status =1,user_type=3).exists()
            if userName_check != True:
                email_check = Users.objects.filter(email = request.POST['txtEmail'],status =1).exists()
                if email_check !=True:
                    mobileNumberCheck = Users.objects.filter(mobile_number = request.POST['txtMobile'],status =1).exists()
                    if mobileNumberCheck != True:
                        sk_shop_id = int(request.POST['shop_id'])
                        sk_username = request.POST['txtUsername']
                        sk_fullname = request.POST['txtFullname']
                        sk_email = request.POST['txtEmail']
                        sk_mobile = request.POST['txtMobile']
                        sk_password = generatePassword()
                        sk_shop_id = Shop_details.objects.get(id=sk_shop_id)
                        user_obj = Users()
                        user_obj.shop_id_fk = sk_shop_id
                        user_obj.full_name = sk_fullname
                        user_obj.username = sk_username
                        user_obj.password = sk_password
                        user_obj.mobile_number = sk_mobile
                        user_obj.email = sk_email
                        user_obj.user_type = 3
                        user_obj.created_by = 1
                        user_obj.status = 1
                        user_obj.save()
                        return HttpResponse('1')
                    else:
                        return HttpResponse("Mobile already existed try with another mobile number")
                else:
                    return HttpResponse("Email already existed try with another email")
            else:
                return HttpResponse("Username already existed try with another username")
        except Exception as e:
            return HttpResponse(e)

#random password generate
def generatePassword():
    s1 = string.ascii_lowercase
    s2 = string.ascii_uppercase
    s3 = string.digits

    plen = 8 #Todo1: Handle Gibberish
    s = []
    s.extend(list(s1))
    s.extend(list(s2))
    s.extend(list(s3))

    return ("".join(random.sample(s, 8)))