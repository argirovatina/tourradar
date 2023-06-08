import TourItemInformationPage from '../pages/TourItemInformationPage';
import TourItemsListPage from '../pages/TourItemsListPage';
import DownloadBrochureModalPage from '../pages/DownloadBrochureModalPage';
import emailAddresses from '../fixtures/emailAddresses.json';

const tourItemInformationPage = new TourItemInformationPage();
const tourItemsListPage = new TourItemsListPage();
const downloadBrochureModalPage = new DownloadBrochureModalPage();

beforeEach(() => {
    cy.visit('/d/europe');
});

describe('tour item information', () => {
    it('verifies tour item full information', () => {
        tourItemsListPage.getTourItems().each(($el) => {
            $el.removeClass("blank")
        })
        tourItemsListPage.getTourItems()
        .first()
        .click();

       tourItemInformationPage.getTourItemImage().should('be.visible');
       tourItemInformationPage.getTourItemMainInfo().should('be.visible');
       tourItemInformationPage.getTourItemPlanningBlock().should('be.visible');
       tourItemInformationPage.getTourItemPlacesBlock().should('be.visible');
       tourItemInformationPage.getTourItemMapBlock().should('be.visible');
       tourItemInformationPage.getTourItemItineraryBlock().should('be.visible');
       tourItemInformationPage.getTourItemStayBlock().should('be.visible');
       tourItemInformationPage.getTourItemIncludedBlock().should('be.visible');
       tourItemInformationPage.getTourItemStayBlock().should('be.visible');
       tourItemInformationPage.getTourItemSustainabilityBlock().should('be.visible');
       tourItemInformationPage.getTourItemFlexibilityBlock().should('be.visible');
       tourItemInformationPage.getTourItemReviewsBlock().should('be.visible');
       tourItemInformationPage.getTourItemAvailabilityBlock().should('be.visible');
    });

    it('verifies brochure download from tour list', () => {
        downloadBrochureModalPage.getDownloadModal().should('not.exist');
        tourItemsListPage.getTourItemDowloadButton().first().click();
        downloadBrochureModalPage.getDownloadModal().should('be.visible');
        downloadBrochureModalPage.getDownloadEmail().type(emailAddresses.email);
        downloadBrochureModalPage.submitDownloadButton();
        downloadBrochureModalPage.getSuccessDownloadModal().should('contain', 'Brochure successfully sent!');
    });
});
