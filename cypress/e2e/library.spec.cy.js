describe('Test du formulaire avec fixture', function () {
    beforeEach(() => {
    cy.visit('http://127.0.0.1:8000');
  });
      it('Remplir le formulaire avec des utilisateur valide depuis la fixture', function () {
        
        cy.fixture('users').then((userData) => { 
        const users = userData.users;  
          cy.wrap(users).each((entry) => {
         
            const user = entry.standardUser;
       
            cy.get('a[href="/register"]').click();
            cy.get('#firstname').type(user.firstName);
            cy.get('#lastname').type(user.lastName);
            cy.get('#email').type(user.email);
            cy.get('#password').type(user.password);
            cy.get('#confirm-password').type(user.password);
            
            cy.get('button[type="submit"]').click();

        });             
    });
});
});
