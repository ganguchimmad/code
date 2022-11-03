from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from billing_app.models import *
from billing_app.commonuse import common

def brands_insert(request):
        if request.method == "POST":
            try:
                if request.method == "POST":
                    product_check = Brand_details.objects.filter(status=1,brand_name=request.POST['brand_name']).exists()
                    if product_check:
                        return HttpResponse("Brand name already existes try with another brnad name")
                    else:
                        product_id = int(request.POST['product'])
                        product_id = Product_type.objects.get(id=product_id)


                        brand_object = Brand_details()
                        brand_object.product_type_id_fk = product_id
                        brand_object.brand_name = request.POST['brand_name']
                        brand_object.brand_price = request.POST['price']
                        brand_object.status = 1
                        brand_object.created_by = request.session['user_type']
                        brand_object.created_at = common.getCurrentDateTIme()

                        brand_object.save()

                        return HttpResponse('1')
            except Exception as e:
                return HttpResponse(e)