describe('Test du formulaire avec fixture', () => {

        it('Remplir le formulaire avec des utilisateur valide depuis la fixture', function () {
        cy.visit('http://127.0.0.1:8000');
       
        cy.get('a[href="/register"]').click();
    
   
        });
    });
