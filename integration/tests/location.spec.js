/// <reference types="cypress" />

describe("location tests", () => {
  const login = "standard_user";
  const password = "secret_sauce";
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
  });
  it("should have title tag with value Swag Labs", () => {
    cy.title().should("eq", "Swag Labs");
  });
  it("URL should be https://www.saucedemo.com/", () => {
    cy.url().should("eq", "https://www.saucedemo.com/");
  });
  it("should be HTTPS", () => {
    cy.location("protocol").should("contain", "https");
  });
  it("the hostname should be www.saucedemo.com", () => {
    cy.location("hostname").should("eq", "www.saucedemo.com");
  });
  it("should login to the main page", () => {
    cy.get("[data-test='username']").type(login);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.location("pathname").should("eq", "/inventory.html");
  });
});
