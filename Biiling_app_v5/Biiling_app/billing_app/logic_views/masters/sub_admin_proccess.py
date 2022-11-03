from logging import exception
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from billing_app.models import Users,User_log_table
import random, string


# Function to insert the subadmin data into the database
@csrf_exempt
def sub_admin_insert(request):
    if request.method == "POST":
        try:
            userName_check = Users.objects.filter(username = request.POST['txtUsername'],status =1,user_type=2).exists()
            if userName_check != True:
                email_check = Users.objects.filter(email = request.POST['txtEmail'],status =1).exists()
                if email_check !=True:
                    mobileNumberCheck = Users.objects.filter(mobile_number = request.POST['txtMobile'],status =1).exists()
                    if mobileNumberCheck != True:
                        sa_username = request.POST['txtUsername']
                        sa_fullname = request.POST['txtFullname']
                        sa_email = request.POST['txtEmail']
                        sa_mobile = request.POST['txtMobile']
                        sa_password = generatePassword()

                        user_obj = Users()
                        user_obj.full_name = sa_fullname
                        user_obj.username = sa_username
                        user_obj.password = sa_password
                        user_obj.mobile_number = sa_mobile
                        user_obj.email = sa_email
                        user_obj.user_type = 2
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