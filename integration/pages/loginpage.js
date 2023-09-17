export class LoginPage {
  usernameInput = "[data-test='username']";
  passwordInput = '[data-test="password"]';
  loginBtn = '[data-test="login-button"]';

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }
  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }
  clickLoginBtn() {
    cy.get(this.loginBtn).click();
  }
}
