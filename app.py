from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import utils
import time
import uuid
import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, logger=True, engineio_logger=True)

@app.route("/")
def index():
    return render_template("index.html")

@socketio.on('connection')
def handle_connection(data):
    emit("data", data)

@socketio.on('updated_data')
def send_updated_data(data):
    now = datetime.datetime.now()
    date_time = now.strftime("%m/%d/%Y, %H:%M:%S")
    random_data = {"public_id": str(uuid.uuid4()),"datetime": date_time}
    for i in ["temp","ec","ph1","ph2","humidity"]:
        random_data[i] = utils.create_random_num()
    
    # utils.save_data_on_file(random_data)
    time.sleep(2)
    emit("data", {"data": random_data})

if __name__ == "__main__":
    socketio.run(app=app)
    app.run(debug=True)

