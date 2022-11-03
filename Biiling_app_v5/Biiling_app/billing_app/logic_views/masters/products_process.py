from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from billing_app.models import *
from billing_app.commonuse import common

# Function to insert the subadmin data into the database
@csrf_exempt
def product_type_insert(request):
    if request.method == "POST":
        try:
            if request.method == "POST":
                product_check = Product_type.objects.filter(status=1,product_type_name=request.POST['product_name']).exists()
                if product_check:
                    return HttpResponse("Product name already existes try with another product name")
                else:
                    product_type_name = request.POST['product_name']

                    product_type_object = Product_type()
                    product_type_object.product_type_name = product_type_name
                    product_type_object.status = 1
                    product_type_object.created_by = request.session['user_type']
                    product_type_object.created_at = common.getCurrentDateTIme()

                    product_type_object.save()

                    return HttpResponse('1')
        except Exception as e:
            return HttpResponse(e)

