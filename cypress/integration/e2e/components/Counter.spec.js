describe("Counter component", () => {
  beforeEach(() => {
    cy.visit("/counter");
  });

  it("should have an 'h1' displaying the number 0", () => {
    cy.get("[data-cy=counterDisplay]").should("have.text", "0");
  });

  it("should increment by 1 if you click the Increment button, counter must be 1", () => {
    cy.contains("Incrementar").click();
    cy.get("[data-cy=counterDisplay]").should("have.text", "1");
  });
  it("should decrement by 1 if you click the Decrmeent button, counter must be -1", () => {
    cy.contains("Disminuir").click();
    cy.get("[data-cy=counterDisplay]").should("have.text", "-1");
  });
});
