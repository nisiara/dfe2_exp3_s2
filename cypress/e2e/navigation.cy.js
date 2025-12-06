function obetenerTextoLink(texto){
  cy.get('.menu > ul')
    .children('li')
    .contains(texto)
    .click()
    .wait(3000)
}

describe('Navegación menú header', () => {
  beforeEach( () => {
    cy.visit('http://localhost:5173')
  })

  it('Navega la página "Inicio"', () => {
     obetenerTextoLink('Inicio')
     cy.get('img[alt="Punto Ticket"]').should('have.attr', 'src').and('include', 'images/home.jpg');
  })

  it('Navega a la página "Todos los Eventos"', () => {
    obetenerTextoLink('Ver todos los eventos')
    cy.get('section').children('article').should('have.length', 20)
  })

  it('Navega a la pagina "Nosotros"', () => {
    obetenerTextoLink('Nosotros')
    cy.get('section').children('h3').contains('Nosotros')
  })
})