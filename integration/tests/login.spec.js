/// <reference types="cypress" />

import { LoginPage } from "../pages/loginpage";

const loginPage = new LoginPage();
const tests = require("../data/users.json");

describe("saucedemo page using POM", function () {
  this.beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  tests.forEach((test) => {
    it(test.name, () => {
      loginPage.typeUsername(test.username);
      loginPage.typePassword(test.password);
      loginPage.clickLoginBtn();
    });
  });
});
