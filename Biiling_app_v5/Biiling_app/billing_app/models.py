from datetime import datetime
from email.policy import default
from django.db import models
from datetime import datetime
# Create your models here

class Shop_details(models.Model):
    id = models.AutoField(primary_key=True)
    shop_id  = models.IntegerField(db_index=True, null=True)
    shop_name = models.CharField(max_length=250,null=True)
    shop_address  = models.TextField(null=True)
    landmark = models.CharField(max_length=250,null=True)
    status = models.IntegerField(db_index=True, null=True)
    created_by  = models.IntegerField(db_index=True, null=True)
    created_at = models.CharField(max_length=100,null=True,default = datetime.now)
    updated_by  = models.IntegerField(db_index=True, null=True)
    updated_at = models.CharField(max_length=100,null=True)
    
    class Meta:
        db_table = 'shop_details'
    
    def __str__(self):
        return self.id

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    full_name = models.CharField(max_length=250,null=True)
    username = models.CharField(max_length=250,null=True)
    password = models.CharField(max_length=250,null=True)
    mobile_number = models.CharField(max_length=15,null=True)
    email = models.CharField(max_length=250,null=True)
    user_type = models.IntegerField(db_index=True, null=True)
    created_at = models.CharField(max_length=100,null=True,default = datetime.now)
    updated_by = models.IntegerField(db_index=True, null=True)
    updated_at = models.CharField(max_length=100,null=True)
    created_by = models.IntegerField(db_index=True, null=True)
    status = models.IntegerField(db_index=True, null=True)
    shop_id_fk = models.ForeignKey(Shop_details, on_delete=models.CASCADE,null=True)
    
    class Meta:
        db_table = 'users'
    
    def __str__(self):
        return self.id
    
class Product_type(models.Model):
    id = models.AutoField(primary_key=True)
    product_type_name = models.CharField(max_length=250,null=True)
    status = models.IntegerField(db_index=True, null=True)
    created_by  = models.IntegerField(db_index=True, null=True)
    created_at = models.CharField(max_length=100,null=True,default = datetime.now)
    updated_by  = models.IntegerField(db_index=True, null=True)
    updated_at = models.CharField(max_length=100,null=True)
    
    class Meta:
        db_table = 'product_type'
    
    def __str__(self):
        return self.id

class Brand_details(models.Model):
    id = models.AutoField(primary_key=True)
    product_type_id_fk  = models.ForeignKey(Product_type, on_delete=models.CASCADE,null=True)
    brand_name = models.CharField(max_length=250,null=True)
    status = models.IntegerField(db_index=True, null=True)
    created_by  = models.IntegerField(db_index=True, null=True)
    created_at = models.CharField(max_length=100,null=True,default = datetime.now)
    updated_by  = models.IntegerField(db_index=True, null=True)
    updated_at = models.CharField(max_length=100,null=True)
    brand_price  = models.IntegerField(db_index=True, null=True)
    
    class Meta:
        db_table = 'brand_details'
    
    def __str__(self):
        return self.id

class User_type(models.Model):
    id = models.AutoField(primary_key=True)
    user_type_name = models.CharField(max_length=250,null=True)
    status = models.IntegerField(db_index=True, null=True)
    created_at = models.CharField(max_length=100,null=True,default = datetime.now)
    
    class Meta:
        db_table = 'user_type'
    
    def __str__(self):
        return self.id
  
class Stock_details(models.Model):
    id = models.AutoField(primary_key=True)
    product_type_id_fk  = models.ForeignKey(Product_type, on_delete=models.CASCADE,null=True)
    brand_type_id_fk  = models.IntegerField(db_index=True, null=True)
    shop_id_fk  = models.ForeignKey(Shop_details, on_delete=models.CASCADE,null=True)
    total_quantity  = models.IntegerField(db_index=True, null=True)
    remaining_quantity  = models.IntegerField(db_index=True, null=True)
    status = models.IntegerField(db_index=True, null=True)
    created_by  = models.IntegerField(db_index=True, null=True)
    created_at = models.CharField(max_length=100,null=True,default = datetime.now)
    updated_by  = models.IntegerField(db_index=True, null=True)
    updated_at = models.CharField(max_length=100,null=True)
    
    class Meta:
        db_table = 'stock_details'
    
    def __str__(self):
        return self.id
        
class Stock_recived_details(models.Model):
    id = models.AutoField(primary_key=True)
    shop_id_fk  = models.ForeignKey(Shop_details, on_delete=models.CASCADE,null=True)
    product_type_id_fk  = models.ForeignKey(Product_type, on_delete=models.CASCADE,null=True)
    brand_id_fk  = models.ForeignKey(Brand_details, on_delete=models.CASCADE,null=True)
    recived_datetime = models.CharField(max_length=100,null=True)
    stock_recived_quantity  = models.IntegerField(db_index=True, null=True)
    status = models.IntegerField(db_index=True, null=True)
    created_at  = models.IntegerField(db_index=True, null=True,default = datetime.now)
    created_by = models.CharField(max_length=250,null=True)
    updated_at  = models.IntegerField(db_index=True, null=True)
    updated_by = models.CharField(max_length=250,null=True)
    
    class Meta:
        db_table = 'stock_recived_details'
    

class Sale_transactions(models.Model):
    id = models.AutoField(primary_key=True)
    shop_id_fk  = models.ForeignKey(Shop_details, on_delete=models.CASCADE,null=True)
    product_type_id_fk  = models.ForeignKey(Product_type, on_delete=models.CASCADE,null=True)
    brand_id_fk  = models.ForeignKey(Brand_details, on_delete=models.CASCADE,null=True)
    unit  = models.IntegerField(db_index=True, null=True)
    price_per_unit = models.FloatField(max_length=100),
    total_amount = models.FloatField(max_length=100),
    status = models.IntegerField(db_index=True, null=True)
    created_by  = models.IntegerField(db_index=True, null=True)
    created_at = models.CharField(max_length=100,null=True,default = datetime.now)
    
    class Meta:
        db_table = 'sale_transactions'


class User_log_table(models.Model):
    id = models.AutoField(primary_key=True)
    user_id  = models.IntegerField(db_index=True, null=True)
    login_at = models.CharField(max_length=100,null=True)
    logout_at = models.CharField(max_length=100,null=True)
    login_duration= models.CharField(max_length=100,null=True)
    status =  models.IntegerField(db_index=True, null=True)
    
    class Meta:
        db_table = 'user_log_table'
    

class Error_log(models.Model):
    id = models.AutoField(primary_key=True)
    error_code  = models.IntegerField(db_index=True, null=True)
    error = models.TextField(null=True)
    created_at = models.CharField(max_length=100,null=True,default = datetime.now)
    created_by  = models.IntegerField(db_index=True, null=True)
    
    class Meta:
        db_table = 'error_log'
 

