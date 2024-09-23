describe('template spec', () => {
  it('passes', () => {

    //Visita a página inicial de login do app SenhaSegura
    cy.visit('https://identity.senhasegura.app/realms/zarya/protocol/openid-connect/auth?client_id=zf-frontend&redirect_uri=https%3A%2F%2Fcloud.senhasegura.app%2Fauth&response_type=code&scope=openid&state=cdd67ca2633d449aa2eff9e7977da9c4&code_challenge=0F2wlElmUIKHCgoFbds6r8pD_M21Y0eZs14gmSV7eZ4&code_challenge_method=S256')
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })

    //Clica no botão de login utilizando o Google
    cy.wait(2000);
    cy.xpath('/html/body/div/div/div[1]/div/div[1]/div[2]/div[3]/a[1]/div').click();
    cy.wait(2000);


    //Clica no botão "Acessar" na opção "Could Entitlements"
    cy.xpath('//*[@id="fuse-main"]/div/div/div/div/div/div[2]/div[1]/div/div/div[1]/div[1]/div[2]/div[2]/div/div[2]/div[2]/a').click();
    //Faz o assertion para garantir que estou na Home do app
    cy.xpath('//*[@id="fuse-main"]/div/div/div/div/div/div[1]/div/div/div[2]/span[1]').should('have.text', 'Home');
    cy.wait(2000);

    //Clica no botão "Exportar" para fazer a exportação dos relatórios da Home
    cy.xpath('//*[@id="fuse-main"]/div/div/div/div/div/div[1]/div/div/div[3]/div/div[2]/button').click();
    cy.wait(2000);

    //Faz o assertion para garantir que a mensagem de erro está correta
    cy.xpath('/html/body/div/div/div/div[1]/h4').should('have.text', 'There was an error...');
  })
})