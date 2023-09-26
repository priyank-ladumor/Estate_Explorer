from database.connectionn import connection


# Creatig user
def c_user(u_id,username, email, password, mobile_no, photo):
    conn = connection()
    cursor = conn.cursor()

    query = "INSERT INTO users (u_id,username,email, password, mobile_no, photo) VALUES (%s, %s, %s, %s, %s, %s)"
    cursor.execute(query, (u_id, username, email, password, mobile_no, photo))

    conn.commit()
    cursor.close()
    conn.close()





# For login
def g_user(email):
    conn = connection()
    cursor = conn.cursor()

    cursor.execute(f"SELECT * FROM users WHERE email ='{email}'",)

    user = cursor.fetchone()

    conn.commit()
    cursor.close()
    conn.close()

    return user

# get user through u_id
def get_user_by_uid(u_id):
    conn = connection()
    cursor = conn.cursor()

    cursor.execute(f"SELECT * FROM users WHERE u_id ='{u_id}'",)

    user = cursor.fetchone()

    conn.commit()
    cursor.close()
    conn.close()

    return user



# For updating table
def update_user_details(u_id, username, email, mobile_no, photo):
    conn = connection()
    cursor = conn.cursor()
    
    cursor.execute(f"UPDATE users SET username = %s, email = %s, mobile_no = %s, photo = %s WHERE u_id = %s ",(username,email, mobile_no, photo, u_id) )
    conn.commit()   
    cursor.close()
    conn.close()    
    
    
    
    
    
#for changin password of users
def change_user_password(u_id, password):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"UPDATE users SET password = '{password}' WHERE u_id = '{u_id}'")
    conn.commit()
    cursor.close()
    conn.close()
    
    
    
    
    

#Geting user data
def data_of_user(u_id):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT * FROM users where u_id = '{u_id}'")
    data = cursor.fetchone()
    conn.commit()
    cursor.close()
    conn.close()
    return data

#sending otp
#cheking if email is there or not in the database
def is_email_there(email):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT COUNT(*) FROM users WHERE email = '{email}'")
    count = cursor.fetchone()[0]
    conn.commit()
    cursor.close()
    conn.close()
    if count > 0:
        return 1
    else: 
        return 0

#save otp
def save_otp(email,otp):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"UPDATE users SET otp = '{otp}' WHERE email = '{email}'")
    conn.commit()
    cursor.close()
    conn.close()

#get otp
def get_otp(u_id):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"SELECT * from users where u_id = '{u_id}'")
    data = cursor.fetchone()
    # cursor.execute(f"UPDATE users SET opt = NULL wehre otp = {otp}")
    conn.commit()
    cursor.close()
    conn.close()
    return data

#delete otp
def del_otp(u_id, otp):
    conn = connection()
    cursor = conn.cursor()
    cursor.execute(f"UPDATE users SET otp = NULL WHERE otp = {otp} AND u_id = '{u_id}'")
    conn.commit()
    cursor.close()
    conn.close()

