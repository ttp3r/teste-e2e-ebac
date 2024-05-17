/// <reference types ="cypress"/>
import ProdutosPage from "../support/page_objects/produtosPage"
import { faker } from '@faker-js/faker';

describe('funcionalidades: Produtos e checkout', () => {

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('produtos')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

    let produto1 = 'Erica Evercool Sports Bra'
    let qtdProd1 = 3
    ProdutosPage.buscarProduto(produto1)
    ProdutosPage.addProdutoCarrinho('S', 'Blue', qtdProd1)

    let produto2 = 'Ariel Roll Sleeve Sweatshirt'
    let qtdProd2 = 1
    ProdutosPage.buscarProduto(produto2)
    ProdutosPage.addProdutoCarrinho('XS', 'Purple', qtdProd2)

    let produto3 = 'Taurus Elements Shell'
    let qtdProd3 = 2
    ProdutosPage.buscarProduto(produto3)
    ProdutosPage.addProdutoCarrinho('XL', 'White', qtdProd3)

    let produto4 = 'Troy Yoga Short'
    let qtdProd4 = 4
    ProdutosPage.buscarProduto(produto4)
    ProdutosPage.addProdutoCarrinho(36, 'Black', qtdProd4)

    ProdutosPage.preencherDados()
    cy.preencherDados(faker.person.firstName(), faker.person.lastName(), 'Brasil', 'Rua Aureliano Coutinho, 109', 'São Paulo', 'São Paulo', '01224-021', '1130303200', faker.internet.email())
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.page-title').should('contain', 'PEDIDO RECEBIDO')
    });
})
})

