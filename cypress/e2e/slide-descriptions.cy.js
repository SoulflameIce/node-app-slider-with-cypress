describe('Slide Descriptions Test', function () {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    const slides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' },
    ];
  
    it('Verifies each slide displays the correct title and description', function () {
        slides.forEach((slide, index) => {
            cy.get('.swiper-slide-active').within(() => {
            cy.contains(slide.title).should('be.visible');
            cy.contains(slide.description).should('be.visible');
        });
        if (index < slides.length-1) {
            cy.get('.swiper-button-next').click();
            }
            cy.wait(500);
      });
    });
  });
  