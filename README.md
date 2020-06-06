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

# Locating Elements

## CSS & JQery Selectors

Example:

class selector ex: `.product`  
id selector ex: `#name`  
attribute selector `input[data-id=hjuh78-oiujh7-987uhy-iiuyty7]`

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
cy.get("#checkBoxOption1").check().should("be.checked").and('have.value', 'option1');
```
