import { Braintree, HostedField } from 'react-braintree-fields';
import React from 'react';

//braintree payment process form

class CheckoutForm extends React.Component {


    constructor(props) {
        super(props);
        this.numberField = React.createRef();
        this.braintree = React.createRef();
        this.state = {
            submit_message: null,
            numberFocused: false,
        };

        [
            'onError',
            'getToken',
            'onAuthorizationSuccess',
        ].forEach(prop => (this[prop] = this[prop].bind(this)));
    }

    //grabbing total
    getAmount() {
        let cart = localStorage.getItem("cart")
        if (cart == null) {
            localStorage.setItem("cart", "[]")
        }
        let items = JSON.parse(localStorage.getItem("cart"))

        const array = items.map((item) => item.price);

        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        console.log(sum);
        return sum;
    }


    onError(error) {
        this.setState({ error: error.message || String(error) });
    }

    //grab nonce to send to braintree
    getToken() {
        this.tokenize().then(
            (response) => {
                console.log("my response from braintree: ");
                console.log(response);
                fetch("http://localhost:5000/transactions?nonce=" + response.nonce + "&amount=" + this.getAmount())
                    .then(res => {
                        this.setState({ 'submit_message': 'Payment submitted to braintree!' });
                    })
                    .catch(error => {
                        this.setState({ 'submit_message': 'payment submission failed: ' + error });
                    });
            }
        ).catch(error => {
            this.setState({ 'submit_message': 'payment submission failed: ' + error });
            this.onError(error)
        });
    }


    componentDidMount() {
        this.setState({ authorization: 'sandbox_w3mwc4k6_t8tv7prj37747f3r' });
    }

    onAuthorizationSuccess() {
        this.numberField.current.focus();
    }

    render() {
        return (
            <div>
                <h3>Credit Card Payment</h3>
                
                {/* Using React library to process payment */}
                {/* https://github.com/nathanstitt/react-braintree-fields */}
                <Braintree
                    ref={this.braintree}
                    authorization={this.state.authorization}
                    onAuthorizationSuccess={this.onAuthorizationSuccess}
                    onError={this.onError}
                    getTokenRef={t => (this.tokenize = t)}
                    styles={{
                        input: {
                            'font-size': '14px',
                            'font-family': 'helvetica, tahoma, calibri, sans-serif',
                            color: '#7d6b6b',
                        },
                        ':focus': {
                            color: 'black',
                        },
                    }}
                >
                    <div>
                        Card Number:
                        <HostedField
                            type="number"
                            onBlur={() => this.setState({ numberFocused: false })}
                            onFocus={() => this.setState({ numberFocused: true })}
                            className={this.state.numberFocused ? 'focused' : ''}
                            prefill="4111 1111 1111 1111"
                            ref={this.numberField}
                        />
                        Cardholder's Name:
                        <HostedField type="cardholderName" />
                        Expiration Month:
                        <HostedField type="expirationMonth" />
                        Expiration Year:
                        <HostedField type="expirationYear" />
                        CVV:
                        <HostedField type="cvv" placeholder="CVV" ref={cvvField => { this.cvvField = cvvField; }} />
                        Zip:
                        <HostedField type="postalCode" />
                    </div>
                </Braintree>
                <div className="footer">
                    <button onClick={this.getToken}>Submit</button>

                    <h6> {this.state.submit_message}</h6>
                </div>
            </div>

        );
    }
}

export default CheckoutForm;