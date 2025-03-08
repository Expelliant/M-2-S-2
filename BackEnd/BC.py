from flask import Flask, jsonify, request
import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import os

app = Flask(__name__)

# Load dataset
file_path = "ecommerce_dataset_with_churn.csv"
if not os.path.exists(file_path):
    raise FileNotFoundError(f"File not found: {file_path}")

df = pd.read_csv(file_path)

# Data preprocessing
categorical_columns = ['Category', 'Product', 'Most Bought', 'Most Searched']
label_encoders = {}
for col in categorical_columns:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    label_encoders[col] = le

# Splitting data
X = df[['Category', 'Product', 'Customer Review (Score)', 'Customer Review (Site)', 'Most Bought', 'Most Searched']]
y = df['Churning Score'] > 50  # Convert to binary classification
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)
joblib.dump(model, 'churn_model.pkl')

@app.route('/customers', methods=['GET'])
def get_customers():
    return jsonify(df[['Name', 'Email', 'State']].to_dict(orient='records'))

@app.route('/customers/<int:customer_id>', methods=['GET'])
def get_customer(customer_id):
    if 0 <= customer_id < len(df):
        return jsonify(df.iloc[customer_id].to_dict())
    return jsonify({'error': 'Customer not found'}), 404

@app.route('/predict-churn', methods=['POST'])
def predict_churn():
    data = request.json
    input_data = [data[col] for col in X.columns]
    prediction = model.predict([input_data])[0]
    return jsonify({'churn_risk': bool(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
