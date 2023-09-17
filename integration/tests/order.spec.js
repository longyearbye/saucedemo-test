/// <reference types="cypress" />

import { LoginPage } from "../pages/loginpage";
import { Products } from "../pages/addtocart";

const loginPage = new LoginPage();
const products = new Products();
let login = "standard_user";
let password = "secret_sauce";

describe("saucedemo page using POM", function () {
  this.beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    loginPage.typeUsername(login);
    loginPage.typePassword(password);
    loginPage.clickLoginBtn();
  });
  it("add products to cart and place an order", function () {
    let firstName = "Jesse";
    let lastName = "Pinkman";
    let postalCode = "123-456";
    products.addBackpack();
    products.addBikeLight();
    products.shoppingCartBtn();
    products.checkOut();
    products.orderFirstName(firstName);
    products.orderLastName(lastName);
    products.orderPostalCode(postalCode);
    products.continueBtn();
    products.finishBtn();
    products.assertOrder();
  });
});
