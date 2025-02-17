from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Load trained model and label encoder
model = joblib.load("crop_predictor_model.joblib")
label_encoder = joblib.load("label_encoder.joblib")

@app.route('/predict', methods=['POST'])
def predict_crop():
    try:
        data = request.json
        features = np.array([[data["N"], data["P"], data["K"], data["temperature"], 
                              data["humidity"], data["ph"], data["rainfall"]]])
        prediction = model.predict(features)
        predicted_crop = label_encoder.inverse_transform(prediction)[0]
        
        return jsonify({"predicted_crop": predicted_crop})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
