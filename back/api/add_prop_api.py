from flask import Blueprint, jsonify, request
from database.create__table import create_tables
from database.add_pro_db import a_prop, s_data, a_data, del_re, my_prop
import uuid
from datetime import date
from api.register import tokan_to_u_id

import jwt
prop = Blueprint('prop', __name__)
create_tables()






# adding data to database
@prop.post('/add_prop')
def add_prop():
    token = request.headers.get("Authorization")
    Holder_name = request.json.get("Holder_name")
    mobile_no = request.json.get("mobile_no")
    prop_size = request.json.get("prop_size")
    price = request.json.get("price")
    house_no = request.json.get("house_no")
    area_name = request.json.get("area_name")
    state_name = request.json.get("state_name")
    city_name = request.json.get("city_name")
    country_name = request.json.get("country_name")
    furniture = request.json.get("furniture")
    photo = request.json.get("photo")
    bhk = request.json.get("bhk")
    dis = request.json.get("dis")
    sell_or_rent = request.json.get("sell_or_rent")
    prop_deal = request.json.get("prop_deal")
    prop_type = request.json.get("prop_type")
    d = date.today()
    ddate = d 
    print(date)
    p_id = uuid.uuid4()
    try:
        u_id = tokan_to_u_id(token)
        try:
            if (len(country_name) == 0 and len(Holder_name) == 0 and len(house_no) == 0 and len(area_name) == 0 and len(state_name) == 0 and len(city_name) == 0 and len(photo) == 0 and len(bhk) == 0 and len(prop_size) == 0 and len(price) == 0 and len(furniture) == 0 and len(dis) == 0 and len(str(mobile_no)) == 0 and len(str(prop_size)) == 0 and len(str(price)) == 0 and len(str(bhk)) == 0):
                    return jsonify({'message':'Some fields are empty'}),
            else:
                a_prop(p_id, u_id, Holder_name, mobile_no, house_no, area_name, state_name, city_name,country_name, photo, bhk, prop_size, price, furniture, sell_or_rent,  dis, prop_deal, prop_type, ddate)
                return jsonify({'U_id': u_id, 'Holder name': Holder_name, 'message': 'Property added'}), 200
        
                
        except:
            return jsonify({'message': 'Something went wrong'}), 404

    except:
        return jsonify({'message': 'User not found'}), 400






# fetchin all data from database
@prop.get('/adata/<p_id>')
def aa_data(p_id):
    data = a_data(p_id)
    details = {"p_id": data[0], "u_id": data[1], "Holder_name": data[2], "mobile_no": data[3], "house_no": data[4], "area_name": data[5], "state_name": data[6], "city_name": data[7],"country_name": data[8], "photo": data[9], "bhk": data[10], "prop_size": data[11], "price": data[12], "furniture": data[13], "sell_or_rent": data[14], "dis": data[15], "prop_deal": data[16], "prop_type": data[17]}
    return details



# fetching some data from database
@prop.get('/sdata')
def ss_data():
    c = ["p_id", "photo", "city_name", "state_name", "bhk", "price", "prop_size"]
    data = s_data()
    new_data = []
    for r in data:
        d = {}
        for i in range(7):
            d[c[i]] = r[i]
        new_data.append(d)
    return jsonify(new_data)



# Deleting data from table
@prop.delete('/del_re')
def deleting():
    p_id = request.headers.get("Authorization")
    del_re(p_id)
    return jsonify({"message":"Record deleted"})


#fetching my(individual user's) data from databse
@prop.get('/my_data/<u_id>')
def my_data(u_id):
    data = my_prop(u_id)
    c = ["p_id", "u_id", "Holder_name", "mobile_no", "house_no", "area_name", "state_name", "city_name","country_name", "photo", "bhk", "prop_size", "price", "furniture", "sell_or_rent",  "dis", "prop_deal", "prop_type"] 
    
    new_data = []
    for r in data:
        d = {}
        for i in range(18):
            d[c[i]] = r[i]
        new_data.append(d)
    
    return jsonify(new_data)




#searching for perticular property address with help of  "country_name" or/and "city_name" or/and "state_name".
