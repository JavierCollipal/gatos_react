describe("Counter component", () => {
  it("visit the component route", () => {
    cy.visit("/counter");
  });
  it("should increment by 1 if you click the Incrementar button", () => {
    cy.visit("/counter");
    cy.contains("Incrementar").click();
  });
  it("should decrement by 1 if you click the Disminuir button", () => {
    cy.visit("/counter");
    cy.contains("Disminuir").click();
  });
});
