from database.connectionn import connection
def create_tables():
    conn = connection()
    cursor = conn.cursor()
    #users table
    cursor.execute("""CREATE TABLE IF NOT EXISTS users (
                        u_id varchar(1000) primary key,
                        username VARCHAR(100) NOT NULL,
                        email VARCHAR(100) unique NOT NULL,
                        password VARCHAR(100) NOT NULL,  
                        mobile_no numeric NOT NULL,
                        photo text[] NOT NULL,
                        otp int
                        )   
    """)
    #property table
    cursor.execute("""CREATE TABLE IF NOT EXISTS property(
                        p_id varchar(1000) not null,
                        u_id varchar(1000) not null,
                        Holder_name varchar(100) not null,
                        mobile_no numeric not null, 
                        house_no varchar(10) not null,
                        area_name varchar(20) not null, 
                        state_name char(20) not null, 
                        city_name char(20) not null,
                        country_name text not null,
                        photo text[] not null,
                        bhk  numeric not null,
                        prop_size numeric not null,
                        price numeric not null,
                        furniture char(30) not null,
                        sell_or_rent char(10) not null,
                        dis varchar(1000) not null,
                        prop_deal boolean not null,
                        prop_type char(50) not null,
                        ddate varchar(20))
                        """)
    conn.commit()
    cursor.close()
    conn.close()