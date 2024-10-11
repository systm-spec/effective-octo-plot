from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
app = Flask(__name__)
CORS(app)


# DATA
testdata = {
    "test_products" : ["A", "B", "C", "D"],
    "test_sales" : [11, 22, 33, 44]
}

# API-Endpunkt zur Bereitstellung der Kategorien und Werte
@app.route('/api/data', methods=['GET'])
def get_data():
    # Pandas DataFrame
    test_df = pd.DataFrame(testdata)

    # Calculation example: avg and sum
    avg_value = float(test_df["test_sales"].mean())
    total_value =float(test_df["test_sales"].sum())
    print(type(avg_value), type(total_value))

    # JSON-Obj return
    return jsonify({
        "mock_data": test_df.to_dict(orient='records'),
        "summary":{
            "AVG-Value": avg_value,
            "TOTAL-Value": total_value
        }
    })


# Main
if __name__ == '__main__':
    app.run(debug=True)