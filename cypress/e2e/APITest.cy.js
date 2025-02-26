context("GET https://demoqa.com/BookStore/v1/Books", () => {
    it("gets a list of books", () => {
        cy.request("GET", "https://demoqa.com/BookStore/v1/Books").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.results).length.to.be.greaterThan(1)
        })
    })
})