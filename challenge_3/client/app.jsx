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
  }
  render() {
    return <h1>Hello, WORLD</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("App"));
