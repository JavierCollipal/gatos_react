describe("Counter component", () => {
  it("visit the component route", () => {
    cy.visit("/counter");
  });

  it("should have an 'h1' displaying the number 0", () => {
    cy.visit("/counter");
    cy.get("h1").should("have.text", "0");
  });
  it("should increment by 1 if you click the Increment button, counter must be 1", () => {
    cy.visit("/counter");
    cy.contains("Incrementar").click();
    cy.get("h1").should("have.text", "1");
  });
  it("should decrement by 1 if you click the Decrmeent button, counter must be -1", () => {
    cy.visit("/counter");
    cy.contains("Disminuir").click();
    cy.get("h1").should("have.text", "-1");
  });
});
