# views.py
from django.http import JsonResponse
from pymongo import MongoClient
from django.views.decorators.csrf import csrf_exempt
import json

client = MongoClient("mongodb://localhost:27017/")
db = client.smart_attendance_system  # Replace with your MongoDB database name
companies_collection = db.companies  # Replace with your collection name

@csrf_exempt
def register_company(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        
        company_name = data.get('companyName')
        admin_email = data.get('adminEmail')
        address = data.get('address')
        phone_number = data.get('phoneNumber')

        company_data = {
            'companyName': company_name,
            'adminEmail': admin_email,
            'address': address,
            'phoneNumber': phone_number
        }
        
        try:
            companies_collection.insert_one(company_data)
            return JsonResponse({'message': 'Company registered successfully'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return JsonResponse({'error': 'Invalid request method'}, status=400)
