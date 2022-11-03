from logging import exception
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from billing_app.models import Users,User_log_table
import datetime


#login 
@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            Username = request.POST['username']
            Password = request.POST['password']
            request.session.flush()
            data = Users.objects.get(username = Username, password = Password, status=1)
            if data.password == Password:
                log_data = User_log_table(user_id = data.id, login_at = datetime.datetime.now(), status = 1)
                log_data.save() 
                log_id = User_log_table.objects.filter(user_id = data.id).order_by('-id')[0]
                request.session['id'] = data.id
                request.session['full_name'] = data.full_name
                request.session['email'] = data.email
                request.session['mobile_number'] = data.mobile_number
                request.session['user_type'] = data.user_type
                request.session['username'] = data.username
                request.session['shop_id_fk_id'] = data.shop_id_fk_id
                request.session['log_id'] = log_id.id
                return HttpResponse('dashboard')
        except Exception as e:
            return HttpResponse(e)
        
@csrf_exempt
def logout(request):
    try:
        if 'log_id' in request.session:
            log_id = request.session['log_id']
            log_data = User_log_table.objects.get(id = log_id)
            current_datetime = datetime.datetime.now()
            User_log_table.objects.filter(id = log_id).update(logout_at = current_datetime, status = 2)
            request.session.flush()
            return redirect('/')
    except Exception as e:
        return HttpResponse(e)