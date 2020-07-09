describe("Home component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display a mesage 'Diviertete interactuando con el crud de gatos o tambien puedes interactuar con el contador'", () => {
    cy.get("[data-cy=homeInfo]").should(
      "have.text",
      "Diviertete interactuando con el crud de gatos o tambien puedes interactuar con el contador"
    );
  });
});
