from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import matplotlib.pyplot as plt
import io
import base64
app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/api/pic")
def expic():
    data={
        "sales":[2, 15, 24],
        "products":["Gorilla_Glue",
                    "Triple_G",
                    "Nova_oG"],
    }

    # parse data to pandas dataframe
    data_frame=pd.DataFrame(data)

    # calculations mean & sum
    avg=data_frame["sales"].mean()
    total=data_frame["sales"].sum()

    _,ax=plt.subplots()
    data_frame.plot(kind="bar", x="sales", y="products", ax=ax)
    plt.tight_layout()

    # base64 encoding
    img=io.BytesIO()
    plt.savefig(img, format="png")
    img.seek(0)
    plot_url=base64.b64encode(img.getvalue().decode("utf-8"))

    # return
    return jsonify({"avg": avg, "total": total, "plot_url": f"data:image/png;base64,{plot_url}"})
if __name__=="__main__":
    app.run(debug=True)