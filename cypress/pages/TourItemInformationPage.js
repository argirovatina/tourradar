class TourItemInformationPage {

    getTourItemImage() {
        return cy.get('.ao-tour-hero-image');
    }
    getTourItemMainInfo() {
        return cy.get('.ao-tour-above-fold__main');
    }
    getTourItemPlanningBlock() {
        return cy.get('[data-cy="tdp-tour-planning"]');
    }
    getTourItemPlacesBlock() {
        return cy.get('[data-block-type="Places"]');
    }
    getTourItemMapBlock() {
        return cy.get('.ao-tour-map-image-block');
    }
    getTourItemItineraryBlock() {
        return cy.get('[data-block-type="Itinerary"]');
    }
    getTourItemStayBlock() {
        return cy.get('#tour-what-is-included');
    }
    getTourItemIncludedBlock() {
        return cy.get('#tour-what-is-included');
    }
    getTourItemStayBlock() {
        return cy.get('#tour-where-you-will-stay');
    }
    getTourItemSustainabilityBlock() {
        return cy.get('.ao-sustainability-operator');
    }
    getTourItemFlexibilityBlock() {
        return cy.get('.ao-tour-flexible-options-card');
    }
    getTourItemReviewsBlock() {
        return cy.get('[data-block-type="Reviews"]');
    }
    getTourItemAvailabilityBlock() {
        return cy.get('[data-block-type="Availability"]');
    }
}

export default TourItemInformationPage;