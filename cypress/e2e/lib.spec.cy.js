describe('Test du formulaire avec fixture', () => {

        it('Remplir le formulaire avec des utilisateur valide depuis la fixture', function () {
        cy.visit('http://127.0.0.1:8000');
        cy.fixture('users').then((userData) => { 
        const users = userData.users;  
        const user = entry.standardUser;
            cy.get('a[href="/register"]').click();
            cy.get('#firstname').type(user.standardUser[0].firstName);
            cy.get('#lastname').type(user.standardUser[0].lastName);
            cy.get('#email').type(user.standardUser[0].email);
            cy.get('#password').type(user.standardUser[0].password);
            cy.get('#confirm-password').type(user.standardUser[0].password);
            cy.get('button[type="submit"]').click();
        });
    });
});