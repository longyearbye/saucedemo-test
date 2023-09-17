export class Products {
  backpackBtn = "#add-to-cart-sauce-labs-backpack";
  bikeLightBtn = "#add-to-cart-sauce-labs-bike-light";
  shoppingCart = ".shopping_cart_link";
  checkoutBtn =
    "#contents_wrapper > #cart_contents_container > div > .cart_footer > #checkout";
  firstName = "#first-name";
  lastName = "#last-name";
  postalCode = "#postal-code";
  continueButton = "#continue";
  finishButton = "#finish";
  assertTitle = ".complete-header";

  addBackpack() {
    cy.get(this.backpackBtn).click();
  }
  addBikeLight() {
    cy.get(this.bikeLightBtn).click();
  }
  shoppingCartBtn() {
    cy.get(this.shoppingCart).click();
  }
  checkOut() {
    cy.get(this.checkoutBtn).click();
  }
  orderFirstName(firstname) {
    cy.get(this.firstName).type(firstname);
  }
  orderLastName(lastname) {
    cy.get(this.lastName).type(lastname);
  }
  orderPostalCode(postalcode) {
    cy.get(this.postalCode).type(postalcode);
  }
  continueBtn() {
    cy.get(this.continueButton).click();
  }
  finishBtn() {
    cy.get(this.finishButton).click();
  }
  assertOrder() {
    cy.get(this.assertTitle).should("contain", "Thank you for your order!");
  }
}
