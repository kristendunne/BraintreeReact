import { Braintree, HostedField } from 'react-braintree-fields';
import React from 'react';

class MySillyCheckoutForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.numberField = React.createRef();
        this.braintree = React.createRef();
        [
            'onError',
            'getToken',
            'onCardTypeChange',
            'onAuthorizationSuccess',
        ].forEach(prop => (this[prop] = this[prop].bind(this)));
    }

    state = {}

    onError(error) {
        this.setState({ error: error.message || String(error) });
    }

    getToken() {
        this.tokenize().then(
            token => this.setState({ token, error: null }),
        ).catch(error => this.onError(error));
    }

    onCardTypeChange({ cards }) {
        if (1 === cards.length) {
            const [card] = cards;

            this.setState({ card: card.type });

            if (card.code && card.code.name) {
                this.cvvField.setPlaceholder(card.code.name);
            } else {
                this.cvvField.setPlaceholder('CVV');
            }
        } else {
            this.setState({ card: '' });
            this.cvvField.setPlaceholder('CVV');
        }
    }

    state = {
        numberFocused: false,
    }

    componentDidMount() {
        this.setState({ authorization: 'sandbox_w3mwc4k6_t8tv7prj37747f3r' });
    }

    renderResult(title, obj) {
        if (!obj) { return null; }
        return (
            <div>
                <b>{title}:</b>
                <pre>{JSON.stringify(obj, null, 4)}</pre>
            </div>
        );
    }

    onAuthorizationSuccess() {
        this.numberField.current.focus();
    }

    render() {
        return (
            <div>
                <h3>Credit Card Payment</h3>
                {this.renderResult('Error', this.state.error)}
                {this.renderResult('Token', this.state.token)}

                <Braintree
                    ref={this.braintree}
                    authorization={this.state.authorization}
                    onAuthorizationSuccess={this.onAuthorizationSuccess}
                    onError={this.onError}
                    getTokenRef={t => (this.tokenize = t)}
                    onCardTypeChange={this.onCardTypeChange}
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
                        <p>Card type: {this.state.card}</p>
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
                    <button onClick={this.getToken}>Get nonce token</button>
                </div>
            </div>
        );
    }

}

export default MySillyCheckoutForm;