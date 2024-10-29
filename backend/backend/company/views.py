from django.http import JsonResponse
import random
import uuid
from django.core.mail import send_mail, EmailMessage
import string
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json

# MongoDB connection URI (replace with your own details)
MONGO_URI = "mongodb+srv://janithcsv:smrtAttednc_ousl_2024@cluster0.jkb4g.mongodb.net/"

# Create MongoDB client
client = MongoClient(MONGO_URI, server_api=ServerApi('1'))

db = client['smart_attedence_sys']  # Database name
companies_collection = db['company_register']  # Collection name

# Generate a random password
def generate_random_password(length=8):
    characters = string.ascii_letters + string.digits + string.punctuation   #make it short 
    return ''.join(random.choice(characters) for i in range(length))

# # Generate a unique Admin ID
def generate_unique_admin_id():
    return str(uuid.uuid4())[:4] # Generates a unique UUID *make it short 


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
                
            # Generate a unique Admin ID and a random password
            admin_id = generate_unique_admin_id()
            generated_password = generate_random_password()

            # Create company data object
            company_data = {
                'companyName': data['companyName'],
                'companyId': data['companyId'],
                'email': data['email'],
                'adminEmail': data['adminEmail'],
                'address': data['address'],
                'phoneNumber': data['phoneNumber'],
                'admin_id': admin_id,  
                'generated_password': generated_password
                
            }

            # Insert company details into MongoDB
            companies_collection.insert_one(company_data)
            
            # user_email = data['email']  # User's email who is registering
            # admin_email = data['adminEmail']  # Admin email to send the registration details

            # email_subject = 'Admin privileges'
            # email_body = (
            #     f'Your company has been registered successfully.\n'
            #     f'hear is yours Admin ID: {admin_id}\nGenerated Password: {generated_password}\n\n'
            #     f'Registration by: {user_email}'
            #     'please reset the password '
            # )

            # Sending the email
            # email = EmailMessage(
            #     subject=email_subject,
            #     body=email_body,
            #     from_email=[user_email],  # Use your server email
            #     to=[admin_email],  # Send to the admin
            #     reply_to=[user_email]  # When admin replies, it goes to the user
            # )
            # email.send(fail_silently=False)

            return JsonResponse({'message': 'Company registered successfully and email sent!'}, status=201)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


#Admin login

@csrf_exempt
def admin_login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            admin_id = data.get('adminId')
            password = data.get('password')

            # Validate admin ID and password
            company = companies_collection.find_one({
                'admin_id': admin_id,
                'generated_password': password
            })

            if company:
                return JsonResponse({'message': 'Login successful'}, status=200)
            else:
                return JsonResponse({'error': 'Invalid Admin ID or Password'}, status=401)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
