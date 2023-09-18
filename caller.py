import requests

data = {'Name': 'Menna', 'Age': 20}
response = requests.post('http://localhost:3000/api/data', json=data)

print(response.status_code) 
