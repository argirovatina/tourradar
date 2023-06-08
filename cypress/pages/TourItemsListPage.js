class TourItemsListPage {
    getTourItems() {
        return cy.get('[data-cy="serp-tour-card--view-tour"]');
    }
    getFinalPrice() {
        return cy.get('.br__price-wrapper-price-description-value');
    }
    getTourItemDescription() {
        return cy.get('[data-cy="serp-tour"] .values.active');
    }
    getTourItemDowloadButton() {
        return cy.get('[data-cy="serp-tour--download-brochure"]');
    }
}

export default TourItemsListPage;