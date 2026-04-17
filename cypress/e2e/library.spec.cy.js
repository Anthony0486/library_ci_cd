describe('Test du formulaire avec fixture', () => {
      it('Remplir le formulaire avec des utilisateur valide depuis la fixture', function () {
        cy.fixture('users').as('userData');
        const users = this.userData.users;        
       cy.wrap(users).each((entry) => {
        cy.visit('http://127.0.0.1:8000');
        
        const user = entry.standardUser;
             cy.get('href[href="/register"]').click();
             cy.get('#firstname').type(user.firstName);
             cy.get('#lastname').type(user.lastName);
             cy.get('#email').type(user.email);
             cy.get('#password').type(user.password);
             cy.get('#confirm-password').type(user.password);
             
             cy.get('button[type="submit"]').click();
       });             
    });
});

