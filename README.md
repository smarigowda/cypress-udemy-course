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

class selector
id selector
attribute selector

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
cy.get('.products').find('.product').should('have.length', 4);
```


