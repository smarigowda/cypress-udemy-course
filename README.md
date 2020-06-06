# Notes

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

To run on a specific browsers:

`npm run cy:run -- --headed --browser=chrome`

`npm run cy:run -- --headed --browser=firefox`

`npm run cy:run -- --headed --browser=edge`


