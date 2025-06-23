
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.linear_model import LinearRegression
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()['data']
    df = pd.DataFrame(data)
    df['Day'] = range(len(df))
    model = LinearRegression().fit(df[['Day']], df['Value'])
    next_days = np.array(range(len(df), len(df) + 7)).reshape(-1, 1)
    forecast = model.predict(next_days)
    return jsonify({'forecast': forecast.tolist()})

if __name__ == '__main__':
    app.run(port=5000)
