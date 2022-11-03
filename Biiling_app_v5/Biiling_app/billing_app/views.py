from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .logic_views import account
from .logic_views.masters import sub_admin_proccess,shop_details_process,shop_keeper_process,products_process,brands_process
from billing_app.models import Brand_details, Product_type, Shop_details, Users
from .commonuse import common
# Create your views here.
def index(request):
    if request.session.is_empty():
        return render(request,'index.html')
    else:
        return render(request, 'dashboard.html')

#Login process
@csrf_exempt
def login(request):
    return account.login(request)

def logout(request):
    return account.logout(request)

def forgot_password(request):
    return render(request, 'forgot_password.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def shop_details(request):
    shop_detils_data = Shop_details.objects.all().filter(status=1)
    front_end_data ={
        "shopDetails":shop_detils_data
    }
    return render(request, 'masters/shop_details.html',front_end_data)

def add_shop_details_page(request):
    return render(request, 'masters/add_shop_details.html')

def add_shop_details(request):
    return shop_details_process.shop_details_insert(request)

def sub_admin(request):
    subadmin_data = Users.objects.all().filter(status=1, user_type = 2)
    front_end_data ={
        "subadmin":subadmin_data
    }
    return render(request, 'masters/sub_admin.html',front_end_data)

def add_sub_admin_page(request):
    return render(request, 'masters/add_sub_admin.html')

def add_sub_admin(request):
    return sub_admin_proccess.sub_admin_insert(request)

def shop_keeper(request):
    shopKeeper_data = Users.objects.all().filter(status=1, user_type = 3)
    front_end_data ={
        "shopKeeper":shopKeeper_data,
    }
    return render(request, 'masters/shop_keeper.html',front_end_data)

def add_shop_keeper_page(request):
    shop_id_ddl = common.fillddl("SELECT id,shop_name from shop_details where status=1","")
    shopKeeper_data = Users.objects.all().filter(status=1, user_type = 3)
    front_end_data ={
        "shopKeeper":shopKeeper_data,
        "shop_id_ddl":shop_id_ddl
    }
    return render(request, 'masters/add_shop_keeper.html',front_end_data)

def add_shop_keeper(request):
    return shop_keeper_process.shop_keeper_insert(request)

def products(request):
    product_type_data = Product_type.objects.all().filter(status=1)
    front_end_data ={
        "product_type":product_type_data
    }
    return render(request, 'masters/products.html',front_end_data)

def add_products_page(request):
    return render(request, 'masters/add_products.html')

def add_products(request):
    return products_process.product_type_insert(request)

def brands(request):
    product_ddl = common.fillddl("SELECT id,product_type_name from product_type where status=1","")
    # right join the brands with the product based on id

    brands_data = Brand_details.objects.raw("SELECT * FROM brand_details JOIN product_type ON brand_details.product_type_id_fk_id = product_type.id")
    front_end_data ={
        "brands_data":brands_data,
        "product_ddl":product_ddl
    }
    return render(request, 'masters/brands.html',front_end_data)

def add_brands(request):
    return brands_process.brands_insert(request)

def add_brands_page(request):
    product_ddl = common.fillddl("SELECT id,product_type_name from product_type where status=1","")
    # right join the brands with the product based on id

    front_end_data ={
        "product_ddl":product_ddl
    }
    return render(request, 'masters/add_brands.html',front_end_data)

def sales_report(request):
    return render(request, 'reports/sales_report.html')

def products_report(request):
    return render(request, 'reports/products_report.html')

def generate_bill(request):
    return render(request, 'shop_keeper/generate_bill.html')

def billing_report(request):
    return render(request, 'shop_keeper/billing_report.html')