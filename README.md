# Onboarding

## Install and Setup

`npm install cypress`

`git tag install`

`git push origin install`

You can now open Cypress by running:

`node_modules/.bin/cypress open`

When the above command is run for the first time, Cypress adds folders with example tests and fixtures.

`git tag setup-complete; git push origin setup-complete`

By default when tests are run from command line, Cypress runs the tests in headless mode. That is, it does not open the browser.

Pass the command line option `--headed` to open the browser when running the tests.

Example:

`npm run cy:run -- --headed`

`git tag run-test-on-commandline; git push origin run-test-on-commandline`

## Run on a specific browsers

`npm run cy:run -- --headed --browser=chrome`

`npm run cy:run -- --headed --browser=firefox`

`npm run cy:run -- --headed --browser=edge`

## Overriding default configurations

Adding config entries in `cypress.json` will override the default configurations.

# Getting Started

## Locating Elements

## CSS & JQery Selectors

Example:

class selector ex: `.product`  
id selector ex: `#name`  
attribute selector `input[data-id=hjuh78-oiujh7-987uhy-iiuyty7]`  
nth-child selector `td:nth-child(2)`

Cypress Plugin to Locate Elements

## Intellisense

Use tripple slash directives which is a TypeScript concept. It tells TypeScript compiler to include additional files in the compilation process.

`/// <reference types="Cypress" />`

## Assertions

Cypress comes with its own assertion methods.

Example:

Following code gets and asserts that there are 4 products on the page.

```js
cy.get(".products .product").should("have.length", 4);
```

## Auto Run

Cypress automatically runs the test when we save the test.

## Time Travel

## Before & After Screenshots

## Debugging

- One or more elements are not visible

- Clear error messages

- Line number where the test failed

## Parent/ Child Chaining

```js
cy.get(".products").find(".product").should("have.length", 4);
```

## Iterating Array of Elements

```js
// Add to Cart, product by name
// Ex: Add Cashew to the Cart
cy.get(".products")
  .find(".product")
  .each((element) => {
    cy.wrap(element)
      .find(".product-name")
      .invoke("text")
      .then((text) => {
        if (text.toLowerCase().includes("cashew")) {
          cy.wrap(element).contains("ADD TO CART").click();
        }
      });
  });
```

## Async and Promise Handling

- Non Cypress commands can not resolve promise by themselves
- text() example
- text method can be used on `.find('.class')`
- but, use `invoke('text').then(callbackFn)` instead

## Logging

```js
cy.log();
```

## Alias

```js
cy.get(".products .product").as("products");
cy.get("@products").should("have.length", 4);
```

## Console log

Console logs should be used inside `.then()` to ensure it is executed in proper sequence.

Following code does not gaurantee that `console.log` is executed at the end. You will see the console log printed into console (dev tools) while the test is still running.

```js
cy.get();
cy...
cy...
console.log('end of test'); // this gets exected first, as this is not a cypress command
```

How can I use the `console.log` then ?

```js
cy.get();
cy...
cy...
cy...
cy().then(() => {
    console.log('end of test'); // this gets exected after all the previous steps are completed.
});
```

## Checkbox

Checkbox should be checked.

```js
cy.get("#checkBoxOption1")
  .check()
  .should("be.checked")
  .and("have.value", "option1");
```

## Static Dropdown and Dynamic Dropdown

Static Dropdown

```js
cy.get("select").select("option2").should("have.value", "option2");
```

Dynamic Dropdown

```js
cy.get("#autocomplete").type("United Kingdom");
cy.get(".ui-autocomplete")
  .get(".ui-menu-item-wrapper")
  .each((element) => {
    cy.log(element);
    cy.wrap(element)
      .invoke("text")
      .then((text) => {
        cy.log(text);
        if (text === "United Kingdom (UK)") {
          cy.get(element).click();
        }
      });
  });
cy.get("#autocomplete").should("have.value", "United Kingdom (UK)");
```

## Visible and Invisible Elements

## Radio Buttons

## Alert Popup

Cypress Auto-Accepts popups.

## Browser Events

Cypress can listen to browser events.
We can get the `text` of alert or conirm popups and validate them.

## Child Tabs

Remove target attribute using jquery function, so that the page does not open a new tab. Instead the page will be oopened on the same browser window.

## Browser Navigation

The command `cy.go()` can be used to go backward or forward in a web page.

## Web Tables

`.each()` command can be used to iterate through an array of web elements, `next()` method can be used to get the next element, `eq(index)` can be used to get the specific row.

## Mouse Over/ Popup

Use jquery `show()` method to display the hidden elements

Force click using `{ force: true }`

## Child Windows

Child windows are not supported in Cypress.

Use `cy.get()` and open the page in the same browser window.

Cypress does not support visiting Cross Domain url.

## Frames

Install npm package `cypress-iframe`

# Framework Building

## Hooks

`before()`

- Runs once before the test run. That is before any of the `it` blocks are run
- Setup data for the test
- Launch the browser
- Open connection to database

`after()`

- Runs once after the test. That is after all the `it` blocks are run
- Close the browser
- Close db connection

`beforeEach()`

- runs before each of the test step. That is before each of the `it` block

`afterEach()`

- runs after each of the test step. That is, after each of the `it` block

## Fixture

```js
cy.fixture("example").then(function (data) {
  // normal function
  this.data = data;
});
```

## Scenario for Framework Building Exercise

- Home Page
  - Click on Shop link
- Shop Page
  - _Add products to Cart by product names_
    - get product names array from fixture
    - Loop:
    - grab all the dom elements (product names)
    - iterate over them to find the specific product
    - grab all Add buttons and then use index to get the ADD button of specific product
    - add to cart by clicking on ADD button
    - repeat the above steps for the next product in the array
    - Loop End:
    - click on Checkout
- Checkout Page
  - click on checkout button
- Delivery Page
  - fill in delivery location (ex: India)
  - agree terms and conditions (check the check box)
  - click on purchase
  - Verify Successful purchase

## Custom Commands + Intellisense

Intelllisense for custom commands can be achieved by adding type definition to `globals.d.ts`

```ts
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Add a product to Cart by product name
     * @example
     * cy.selectProduct('product name')
     */
    selectProduct(productName: string): Chainable<any>;
  }
}
```

## Debugging & Pause

`cy.pause()` can be used to pause the test. You can then **resume** or **step** through the test.

We can also use `debugger` (see Cypress docs for more)

## Home Page Page Objects

```js
homePage
  .setFirstName(name)
  .setGender(gender)
  .verifyDataBoundInput()
  .verifyFirstNameMinLength()
  .verifyEnterprenuerRadioInputIsDisabled();
```

## Products Page, Page Objects

- Added function to verify the sum
- Added method to checkout to delivery page

## Delivery Page, Page Objects

- Methods added to complete the delivery page inputs and purchase the products

## Global/ Test Specific Configuration

Adding config entries to `cypress.json` will override default settings.

Example: Adding below to `cypress.json` will override the default command timeout and sets it to 10 seconds.

```js
{
    "defaultCommandTimeout": 10000
}
```

We can also override config for a specific test.

```js
Cypress.config({ defaultCommandTimeout: 3000 });
```

```js
  selectDeliveryLocation(country) {
    Cypress.config({ defaultCommandTimeout: 3000 }); // overiding config for specific test
    cy.get(this.countrySelector).type(country);
    cy.get(this.firstSuggestionSelector).click();
    return this;
  }
```

## Environment Variables

- Needed by all or most of the tests ex: `url`, `user data`, `environment specific data`
- Dev, Test, Staging, Production
- Accessible to all tests
- Create `env` propery inside cypress.json.

```js
{
  "defaultCommandTimeout": 10000,
  "env": {
    "baseUrl": "https://rahulshettyacademy.com"
  }
}
```

- We can also set the environment variable from command line.

```bash
./node_modules/.bin/cypress run --headed --env baseUrl=http://google.com --spec cypress/integration/examples/framework-demo-test.js
```

- Test fails due wrong base url. This proves that the env var set on command line takes precedence over the env var set in `cypress.json`

- Command line with proper baseUrl.

```bash
./node_modules/.bin/cypress run --headed --env baseUrl=https://rahulshettyacademy.com --spec cypress/integration/examples/framework-demo-test.js
```

## Screenshots on Failure

- Cypress takes screenshot when test failes. No custom code required

## Cypress Dashboard

- Login to Dashboard
- Can use GitHub account
- Or Google account
- Setup a Project

- Run all tests

`./node_modules/.bin/cypress run --record --key < provide key here >`

- Run specific test

`./node_modules/.bin/cypress run --record --key < provide key here > --spec cypress/integration/examples/framework-demo-test.js`

## Mochaawesome Reporter

- Install npm packages
- `npm install --save-dev mochawesome`
- `npm install --save-dev mocha@5.2.0`
- Tell Cypress that you are using `mochawesome` reporter
- Specify package name in cypress config

- Run a test

`./node_modules/.bin/cypress run --reporter mochawesome --spec cypress/integration/examples/framework-demo-test.js`

- Run all the tests

`./node_modules/.bin/cypress run --reporter mochawesome`

- Only the last test will be reported in mochawesome reporter

- Add reporter config into cypress.json config file

- Run all the tests

`./node_modules/.bin/cypress run`

- Still the same outcome

- Add reporter options to skip the html report generation, but save individual json files

```js
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/results",
    "overwrite": false,
    "html": false,
    "json": true
  }
```

- Run all the tests

`./node_modules/.bin/cypress run`

- Combine all the json files using the mochawesome-merge utility

`npx mochawesome-merge "cypress/results/*.json" > mochawesome.json`

- Generate a combined HTML report from the mochawesome.json file using the https://github.com/adamgruber/mochawesome-report-generator

`npx marge mochawesome.json`
