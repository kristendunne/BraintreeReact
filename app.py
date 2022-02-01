from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
from flask import request

from flask import Flask, redirect, url_for, render_template, request, flash

from os.path import join, dirname
import braintree

gateway = braintree.BraintreeGateway(
    braintree.Configuration(
        environment=braintree.Environment.Sandbox,
        merchant_id="t8tv7prj37747f3r",
        public_key="xxxvhk8tknd38jwn",
        private_key="070bd87e40b6b22ba85dc319991ca7d8",
    )
)


@app.route("/transactions", methods = ['GET'])
def transactions():
    args = request.args
    print(args.get('amount'))
    print(args.get('nonce'))
    print(request.get_json())
    result = gateway.transaction.sale({
    "amount": args.get('amount'),
    "payment_method_nonce": args.get('nonce'),
    "options": {
        "submit_for_settlement": True
        }
    })

    if result.is_success:
        print("success!: " + result.transaction.id)
    elif result.transaction:
        print("Error processing transaction:")
        print("  code: " + result.transaction.processor_response_code)
        print("  text: " + result.transaction.processor_response_text)
    else:
        for error in result.errors.deep_errors:
            print("attribute: " + error.attribute)
            print("  code: " + error.code)
            print("  message: " + error.message)
    return "ok"

    # flask run