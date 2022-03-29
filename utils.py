import random
import json

def create_random_num():
    return round(random.uniform(0.5, 2.5),1)

def save_data_on_file(d):
    with open("data.json", "r") as r:
        file_data = json.load(r)
        file_data['data'].append(d)
    
    with open("data.json", "w") as r:
        r.write(json.dumps(file_data,indent=4))
        




