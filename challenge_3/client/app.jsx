/* 
The homepage of your application should have a Checkout button, which when clicked,
takes the user to the first of several forms. We'll call the forms F1, F2, F3.

* F1 collects name, email, and password for account creation.
* F2 collects ship to address(line 1, line 2, city, state, zip code) and phone number.
* F3 collects credit card #, expiry date, CVV, and billing zip code.

At each step, a Next button allows the user to progress to the next step in the 
checkout process. The final step is a confirmation page which summarizes the data
collected in the prior three steps. This page contains a Purchase button that
completes the purchase. When the purchase is complete, the user is returned to the homepage.

*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };
    this.beginCheckout = this.beginCheckout.bind(this);
    this.submitPurchase = this.submitPurchase.bind(this);
    this.addToState = this.addToState.bind(this);
    this.accountSubmit = this.accountSubmit.bind(this);
    this.shippingSubmit = this.shippingSubmit.bind(this);
    this.billingSubmit = this.billingSubmit.bind(this);
  }
  beginCheckout() {
    $.ajax({
      url: "/checkoutApp",
      type: "POST",
      data: JSON.stringify(["INITIALIZE"]),
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        console.log("Success!");
      }
    });
    this.setState({ page: 1 });
  }
  accountSubmit(e) {
    e.preventDefault();
    let accountState = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: "/checkoutApp",
      type: "POST",
      data: JSON.stringify(accountState),
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        console.log("Success!");
      }
    });
    this.setState({ accountInfo: accountState, page: 2 });
  }
  shippingSubmit(e) {
    e.preventDefault();
    let shippingState = {
      addressLineOne: this.state.addressLineOne,
      addressLineTwo: this.state.addressLineTwo,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber
    };
    $.ajax({
      url: "/checkoutApp",
      type: "POST",
      data: JSON.stringify(accountState),
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        console.log("Success!");
      }
    });
    this.setState({ shippingInfo: shippingState, page: 3 });
  }
  billingSubmit(e) {
    e.preventDefault();
    let billingState = {
      creditCardNumber: this.state.creditCardNumber,
      expiration: this.state.expiration,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    };
    $.ajax({
      url: "/checkoutApp",
      type: "POST",
      data: JSON.stringify(accountState),
      contentType: "application/json; charset=utf-8",
      success: function(response) {
        console.log("Success!");
      }
    });
    this.setState({ billingInfo: billingState, page: 4 });
  }
  addToState(e) {
    e.preventDefault();
    let newState = { [e.target.id]: e.target.value };
    this.setState(newState);
  }
  submitPurchase() {
    this.setState({ page: 0 });
  }
  // HOMEPAGE TO CHECKOUT
  pageZeroView() {
    return (
      <div>
        <h1>Home</h1>
        <button
          type="submit"
          name="checkout"
          id="checkout"
          onClick={this.beginCheckout}
        >
          Checkout
        </button>
      </div>
    );
  }
  // FORM ONE - COLLECTS NAME, EMAIL, AND PASSWORD FOR ACCOUNT CREATION
  pageOneView() {
    return (
      <div>
        <h1>Account Information</h1>
        <form onSubmit={this.accountSubmit}>
          <label for="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="email">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="password">
            Password:
            <input
              type="text"
              name="password"
              id="password"
              onChange={this.addToState}
            />
          </label>
          <button type="submit" name="next" id="pageOneNext">
            Next
          </button>
        </form>
      </div>
    );
  }
  // FORM TWO - COLLECTS SHIP TO ADDRESS (LINE 1, LINE 2, CITY, STATE, ZIP) AND PHONE #
  pageTwoView() {
    return (
      <div>
        <h1>Shipping Information</h1>
        <form onSubmit={this.shippingSubmit}>
          <label for="addressLineOne">
            Address (Line 1):
            <input
              type="text"
              name="addressLineOne"
              id="addressLineOne"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="addressLineTwo">
            Address (Line 2):
            <input
              type="text"
              name="addressLineTwo"
              id="addressLineTwo"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="city">
            City:
            <input
              type="text"
              name="city"
              id="city"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="state">
            State:
            <input
              type="text"
              name="state"
              id="state"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="zipCode">
            Zip Code:
            <input
              type="text"
              name="zipCode"
              id="zipCode"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="phoneNumber">
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={this.addToState}
            />
          </label>
          <button type="submit" name="next" id="pageTwoNext">
            Next
          </button>
        </form>
      </div>
    );
  }
  // FORM THREE - COLLECTS CREDIT CARD #, EXPIRATION, CVV, AND BILLING ZIP
  pageThreeView() {
    return (
      <div>
        <h1>Billing Information</h1>
        <form onSubmit={this.billingSubmit}>
          <label for="creditCardNumber">
            Credit Card Number:
            <input
              type="text"
              name="creditCardNumber"
              id="creditCardNumber"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="expiration">
            Expiration:
            <input
              type="text"
              name="expiration"
              id="expiration"
              onChange={this.addToState}
            />
          </label>
          <br />
          <br />
          <label for="cvv">
            CVV:
            <input type="text" name="cvv" id="cvv" onChange={this.addToState} />
          </label>
          <br />
          <br />
          <label for="billingZip">
            Billing Zip:
            <input
              type="text"
              name="billingZip"
              id="billingZip"
              onChange={this.addToState}
            />
          </label>
          <button type="submit" name="next" id="pageThreeNext">
            Next
          </button>
        </form>
      </div>
    );
  }
  // SUMMARIZE PURCHASE DATA PAGE
  pageFourView() {
    return (
      <div>
        <h1>Confirm Purchase</h1>
        <h2>Account Info</h2>
        <p>
          Name: {this.state.accountInfo.firstName}{" "}
          {this.state.accountInfo.lastName}
          <br />
          Email: {this.state.accountInfo.email}
          <br />
        </p>
        <h2>Shipping Info</h2>
        <p>
          Address: {this.state.shippingInfo.addressLineOne}{" "}
          {this.state.shippingInfo.addressLineTwo}
          <br />
          {this.state.shippingInfo.city}, {this.state.shippingInfo.state}{" "}
          {this.state.shippingInfo.zipCode}
          <br />
          Phone Number: {this.state.shippingInfo.phoneNumber}
        </p>
        <h2>Billing Info</h2>
        <p>
          Credit Card: ************
          {this.state.billingInfo.creditCardNumber.slice(-4)}
          <br />
          Expiration: {this.state.billingInfo.expiration} Billing Zip:{" "}
          {this.state.billingInfo.billingZip}
        </p>
        <button
          type="submit"
          name="purchase"
          id="purchase"
          onClick={this.submitPurchase}
        >
          Submit Purchase
        </button>
      </div>
    );
  }
  render() {
    switch (this.state.page) {
      case 0:
        return this.pageZeroView();
        break;
      case 1:
        return this.pageOneView();
        break;
      case 2:
        return this.pageTwoView();
        break;
      case 3:
        return this.pageThreeView();
        break;
      case 4:
        return this.pageFourView();
        break;
      default:
        return this.pageZeroView();
    }
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
