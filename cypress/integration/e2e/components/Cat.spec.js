describe("Cat component", () => {
  beforeEach(() => {
    cy.visit("/cats");
  });
  it("should have a button with the text 'Añade un nuevo gato'", () => {
    cy.get(".addButton").should("have.text", "Añade un nuevo gato");
  });
});
