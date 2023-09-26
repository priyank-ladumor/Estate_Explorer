from flask import Flask
from api.register import login_api
from api.add_prop_api import prop
from flask_cors import CORS


app = Flask(__name__)
app.register_blueprint(login_api)
app.register_blueprint(prop)
CORS(app)
    



if __name__ == '__main__':
    app.run(debug = True)   
