it ('Should check 5+2 equals 7', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5500')
    // 2. Act
    cy.get('#5').click();
    cy.get('.plus').click();
    cy.get('#2').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    cy.get('#calculator__screen__result-text').should('contain', '7')
})


it ('Should check 5*2 equals 10', () => {
    
    cy.visit('http://127.0.0.1:5500/')
    
    cy.get('#5').click();
    cy.get('.multiply').click();
    cy.get('#2').click();
    cy.get('#equals').click();
     
    cy.get('#calculator__screen__result-text').should('contain', '10')
})

it ('Should check 4/2 equals 2', () => {
    
    cy.visit('http://127.0.0.1:5500/')
    
    cy.get('#4').click();
    cy.get('.divide').click();
    cy.get('#2').click();
    cy.get('#equals').click();
     
    cy.get('#calculator__screen__result-text').should('contain', '2')
})

it ('Should check 8-2 equals 6', () => {
     
    cy.visit('http://127.0.0.1:5500/')
    
    cy.get('#8').click();
    cy.get('.minus').click();
    cy.get('#2').click();
    cy.get('#equals').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '6')
})


it ('Should check 8+2.4 equals 10.4', () => {
     
    cy.visit('http://127.0.0.1:5500/')
    
    cy.get('#8').click();
    cy.get('.plus').click();
    cy.get('#2').click();
    cy.get('.dot').click();
    cy.get('#4').click();
    cy.get('#equals').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '10.4')
})

it ('Should check 82.44 del 82.4', () => {
    
    cy.visit('http://127.0.0.1:5500/')
   
    cy.get('#8').click();
    cy.get('#2').click();
    cy.get('.dot').click();
    cy.get('#4').click();
    cy.get('#4').click();
    cy.get('#d').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '82.4')
})

it ('Should check 82.4+2+3 equals 87.4', () => {
    
    cy.visit('http://127.0.0.1:5500/')
   
    cy.get('#8').click();
    cy.get('#2').click();
    cy.get('.dot').click();
    cy.get('#4').click();
    cy.get('.plus').click();
    cy.get('#2').click();
    cy.get('.plus').click();
    cy.get('#3').click();
    cy.get('#equals').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '87.4')
})

it ('Should check 8-4+2 equals 6', () => {
    
    cy.visit('http://127.0.0.1:5500/')
   
    cy.get('#8').click();
    cy.get('.minus').click();
    cy.get('#4').click();
    cy.get('.plus').click();
    cy.get('#2').click();
    cy.get('#equals').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '6')
})

it ('Should check 8*2+12 equals 28', () => {
    
    cy.visit('http://127.0.0.1:5500/')
   
    cy.get('#8').click();
    cy.get('.multiply').click();
    cy.get('#2').click();
    cy.get('.plus').click();
    cy.get('#1').click();
    cy.get('#2').click();
    cy.get('#equals').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '28')
})

it ('Should check 2*4*3 equals 24', () => {
    
    cy.visit('http://127.0.0.1:5500/')
   
    cy.get('#2').click();
    cy.get('.multiply').click();
    cy.get('#4').click();
    cy.get('.multiply').click();
    cy.get('#3').click();
    cy.get('#equals').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '24')
})

it ('Should check -2*4*3 equals 24', () => {
    
    cy.visit('http://127.0.0.1:5500/')

    cy.get('#plus-minus').click();
    cy.get('#2').click();
    cy.get('.multiply').click();
    cy.get('#4').click();
    cy.get('.multiply').click();
    cy.get('#3').click();
    cy.get('#equals').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '-24')
})

it ('Should check -6/2+3 equals 0', () => {
    
    cy.visit('http://127.0.0.1:5500/')

    cy.get('#plus-minus').click();
    cy.get('#6').click();
    cy.get('.divide').click();
    cy.get('#2').click();
    cy.get('.plus').click();
    cy.get('#3').click();
    cy.get('#equals').click();
    
    cy.get('#calculator__screen__result-text').should('contain', '0')
})