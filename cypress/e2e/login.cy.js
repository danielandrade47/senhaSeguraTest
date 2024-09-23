describe('Testes com Login', () => {
    beforeEach(() => {
      cy.request({
        method: 'POST',
        url: '/api/auth', // URL do endpoint de login
        body: {
          username: 'daniel.andrade63@gmail.com',
          password: 'SenhaTeste123@'
        }
      }).then((response) => {
        // Armazena o token no cookie para uso em outros testes
        cy.setCookie('auth_token', response.body.token)
      })
    })
  
    it('Deve acessar a página protegida', () => {
      // Agora que o token está armazenado, você pode acessar páginas protegidas
      cy.visit('https://cloud.senhasegura.app/home')
    })
  })