describe("App", () => {
  it("Contains a link to learn about React", () => {
    cy.visit("/")
    cy.findByText("Test button").should("exist")
  })
})
