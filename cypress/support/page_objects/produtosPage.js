class ProdutosPage {

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    preencherDados() {
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    }
}

export default new ProdutosPage()