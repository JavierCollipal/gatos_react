describe("Cat component", () => {
  beforeEach(() => {
    cy.visit("/cats");
  });
  it("should have a button with the text 'Añade un nuevo gato'", () => {
    cy.get("[data-cy=catAddButton]").should("have.text", "Añade un nuevo gato");
  });
  it("should have a list of catCards", () => {
    //be greater than x
    cy.get("[data-cy=catCard]").its("length").should("be.gte", 0);
  });
});
