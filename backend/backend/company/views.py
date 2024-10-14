from django.http import JsonResponse
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from django.views.decorators.csrf import csrf_exempt
import json

# MongoDB connection URI (replace with your own details)
MONGO_URI = "mongodb+srv://janithcsv:smrtAttednc_ousl_2024@cluster0.jkb4g.mongodb.net/"

# Create MongoDB client
client = MongoClient(MONGO_URI, server_api=ServerApi('1'))

db = client['smart_attedence_sys']  # Database name
companies_collection = db['company_register']  # Collection name

# MongoDB connection check (GET)
def check_mongo_connection(request):
    try:
        # Ping the MongoDB server to check the connection
        client.admin.command('ping')
        return JsonResponse({'message': 'MongoDB connection successful!'}, status=200)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@csrf_exempt
def register_company(request):
    if request.method == 'POST':
        try:
            # Parse incoming JSON data
            data = json.loads(request.body.decode('utf-8'))

            # Extract necessary fields from the request data
            required_fields = ['companyName', 'companyId', 'email', 'adminEmail', 'address', 'phoneNumber']
            for field in required_fields:
                if field not in data or not data[field]:
                    return JsonResponse({'error': f'Missing field: {field}'}, status=400)

            # Create company data object
            company_data = {
                'companyName': data['companyName'],
                'companyId': data['companyId'],
                'email': data['email'],
                'adminEmail': data['adminEmail'],
                'address': data['address'],
                'phoneNumber': data['phoneNumber']
            }

            # Insert company details into MongoDB
            companies_collection.insert_one(company_data)

            return JsonResponse({'message': 'Company registered successfully'}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
