describe('Testando a tabela', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000'); // change URL to match your dev URL
  });
  
  it('Testamdo o primeiro elemento da tabela', function () {
    cy.get(':nth-child(2) > div > input').check();
    cy.get(':nth-child(2) > div > input').should('be.checked')
  });


   it('seleiconando os checkbox', function () {
    cy.get(':nth-child(1) > :nth-child(2) > .select-listagem').uncheck();
    cy.get(':nth-child(1) > :nth-child(2) > .select-listagem').should('not.be.checked')
  });



  it('seleiconando os checkbox', function () {
    cy.get(':nth-child(3) > :nth-child(2) > .analiseListagem').uncheck()
    cy.get(':nth-child(3) > :nth-child(2) > .analiseListagem').should('not.be.checked')
  });
  it('seleiconando os checkbox', function () {
    cy.get(':nth-child(3) > :nth-child(2) > .analiseListagem').check()
    cy.get(':nth-child(3) > :nth-child(2) > .analiseListagem').should('be.checked')
    cy.get(':nth-child(3) > :nth-child(2) > .analiseListagem').check()


    cy.get(':nth-child(3) > :nth-child(2) > .analiseListagem').should('be.checked')
  });



});
