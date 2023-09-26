import psycopg2

def connection():
    conn = psycopg2.connect(
        host='localhost',
        port='5432',
        database='project',
        user='postgres',
        password='123456789'
    )
    return conn