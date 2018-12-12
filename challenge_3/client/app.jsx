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
    this.nextPage = this.nextPage.bind(this);
  }
  nextPage() {
    if (this.state.page === 4) {
      this.setState({ page: 0 });
    } else {
      this.setState({ page: this.state.page + 1 });
    }
  }
  // HOMEPAGE TO CHECKOUT
  pageZeroView() {
    return (
      <div>
        <h1>Page {this.state.page + 1}</h1>
        <button
          type="submit"
          name="checkout"
          id="checkout"
          onClick={this.nextPage}
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
        <h1>Page {this.state.page + 1}</h1>
        <button
          type="submit"
          name="next"
          id="pageOneNext"
          onClick={this.nextPage}
        >
          Next
        </button>
      </div>
    );
  }
  // FORM TWO - COLLECTS SHIP TO ADDRESS (LINE 1, LINE 2, CITY, STATE, ZIP) AND PHONE #
  pageTwoView() {
    return (
      <div>
        <h1>Page {this.state.page + 1}</h1>
        <button
          type="submit"
          name="next"
          id="pageTwoNext"
          onClick={this.nextPage}
        >
          Next
        </button>
      </div>
    );
  }
  // FORM THREE - COLLECTS CREDIT CARD #, EXPIRATION, CVV, AND BILLING ZIP
  pageThreeView() {
    return (
      <div>
        <h1>Page {this.state.page + 1}</h1>
        <button
          type="submit"
          name="next"
          id="pageThreeNext"
          onClick={this.nextPage}
        >
          Next
        </button>
      </div>
    );
  }
  // SUMMARIZE PURCHASE DATA PAGE
  pageFourView() {
    return (
      <div>
        <h1>Page {this.state.page + 1}</h1>
        <button
          type="submit"
          name="purchase"
          id="purchase"
          onClick={this.nextPage}
        >
          Purchase
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
