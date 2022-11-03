from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('forgot_password', views.forgot_password, name='forgot_password'),
    path('dashboard', views.dashboard, name='dashboard'),
    path('shop_details', views.shop_details, name='shop_details'),
    path('add_shop_details_page', views.add_shop_details_page, name='add_shop_details_page'),
    path('add_shop_details', views.add_shop_details, name='add_shop_details'),
    path('sub_admin', views.sub_admin, name='sub_admin'),
    path('add_sub_admin_page', views.add_sub_admin_page, name='add_sub_admin_page'),
    path('add_sub_admin', views.add_sub_admin, name='add_sub_admin'),
    path('shop_keeper', views.shop_keeper, name='shop_keeper'),
    path('add_shop_keeper_page', views.add_shop_keeper_page, name='add_shop_keeper_page'),
    path('add_shop_keeper', views.add_shop_keeper, name='add_shop_keeper'),
    path('products', views.products, name='products'),
    path('add_products_page', views.add_products_page, name='add_products_page'),
    path('add_products', views.add_products, name='add_products'),
    path('brands', views.brands, name='brands'),
    path('add_brands', views.add_brands, name='add_brands'),
    path('add_brands_page', views.add_brands_page, name='add_brands_page'),
    path('products_report', views.products_report, name='products_report'),
    path('sales_report', views.sales_report, name='sales_report'),
    path('generate_bill', views.generate_bill, name='generate_bill'),
    path('billing_report', views.billing_report, name='billing_report'),
]