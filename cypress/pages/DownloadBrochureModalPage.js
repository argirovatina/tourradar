class DowloadBrochureModalPage {
    getDownloadModal() {
        return cy.get('#pdf_popup');
    }
    getSuccessDownloadModal() {
        return cy.get('#callback_popup');
    }
    getDownloadEmail() {
        return cy.get('[data-cy="common-download-brochure--email-input"]');
    }
    submitDownloadButton() {
        cy.get('[data-cy="common-download-brochure--submit"]').click();
    }
}

export default DowloadBrochureModalPage;