import { levels } from '../fixtures/levels';

describe('Flexbox Defence', () => {
  it('Should open page', () => {
    cy.visit('http://www.flexboxdefense.com');
    cy.get('.header__title').should('contain', 'Flexbox Defense');
  });

  const testLevel = (levelNumber) => {
    cy.visit('http://www.flexboxdefense.com');
    cy.get('body').then(($body) => {
      if ($body.find('.modal__instructions').length) {
        cy.get('.modal__button').contains('Ok, got it!').click();
      }
    });
    cy.get('.nav__button--selector').click();
    cy.get('.menu__wave-link')
      .contains(levelNumber + 1)
      .click();
    cy.get('body').then(($body) => {
      if ($body.find('.modal__instructions').length) {
        cy.get('.modal__button').contains('Ok, got it!').click();
      }
    });
    cy.get('.ember-text-field').eq(0).type(levels[levelNumber][0]);
    cy.get('.ember-text-field').eq(0).blur();
    for (let j = 1; j < levels[levelNumber].length; j++) {
      if (!levels[levelNumber][j]) {
        continue;
      }
      cy.get('.ember-text-field').eq(j).type(levels[levelNumber][j]);
      cy.get('.ember-text-field').eq(j).blur();
    }
    cy.get('.stylesheet__start-wave-button')
      .contains('Start Wave')
      .trigger('click');
    cy.get('.stylesheet__cancel-wave-button').should('be.visible');
    cy.get('.modal__grade p', { timeout: 60000 })
      .contains('Congratulations! You scored 100 points!')
      .should('be.visible');
  };

  it('Should validate first task', () => {
    testLevel(0);
  });

  it('Should validate second task', () => {
    testLevel(1);
  });

  it('Should validate third task', () => {
    testLevel(2);
  });

  it('Should validate forth task', () => {
    testLevel(3);
  });

  it('Should validate fifth task', () => {
    testLevel(4);
  });

  it('Should validate sixth task', () => {
    testLevel(5);
  });

  it('Should validate seventh task', () => {
    testLevel(6);
  });

  it('Should validate eighth task', () => {
    testLevel(7);
  });

  it('Should validate nineth task', () => {
    testLevel(8);
  });

  it('Should validate tenth task', () => {
    testLevel(9);
  });

  it('Should validate eleventh task', () => {
    testLevel(10);
  });

  it('Should validate twelfth task', () => {
    testLevel(11);
  });
});
