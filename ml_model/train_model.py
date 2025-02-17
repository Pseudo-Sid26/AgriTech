import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

# Load dataset
df = pd.read_csv("crop_data.csv")

# Features and target
X = df.drop(columns=['label'])
y = df['label']

# Encode target labels
le = LabelEncoder()
y = le.fit_transform(y)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save model and label encoder
joblib.dump(model, "crop_predictor_model.joblib")
joblib.dump(le, "label_encoder.joblib")

print("Model training completed and saved.")
