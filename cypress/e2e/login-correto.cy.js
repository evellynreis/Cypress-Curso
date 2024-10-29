describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get('[data-test="login-button"]').click(); 
    })

    it('Deve preencher os campos de login corretamente e autenticar o usuário a página', () => {

        cy.login('jade@email.com', 'Senha123')
    })
})