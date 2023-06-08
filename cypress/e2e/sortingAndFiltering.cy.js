import FilterAndSortPage from '../pages/FilterAndSortPage';
import TourItemsListPage from '../pages/TourItemsListPage';
import ageLimits from '../fixtures/filterdata.json';

const filterAndSortPage = new FilterAndSortPage();
const tourItemsListPage = new TourItemsListPage();

beforeEach(() => {
    cy.visit('/d/europe');
});

Object.keys(ageLimits).forEach(range => {
    const minAge = ageLimits[range].min;
    const maxAge = ageLimits[range].max;
    describe('filtering', () => {
        it(`verifies filtering by age range ${range}`, () => {
            filterAndSortPage.getAgeRangeFilter().scrollIntoView();
            filterAndSortPage.setAgeRangeFilter(range).click();
            tourItemsListPage.getTourItemDescription().each((item) => {
                const minAgeRange = parseInt(item.children('dd')[1].innerText.split(' to ')[0])
                const maxAgeRange = parseInt(item.children('dd')[1].innerText.split(' to ')[1])

                console.log(`${minAgeRange}, ${maxAgeRange}`) // logging
                expect(minAgeRange).to.be.within(minAge, maxAge)
                expect(maxAgeRange).to.be.within(minAge, maxAge)
            });
        });
    });
});

describe('sorting', () => {
    it('verifies sorting by price', () => {
        filterAndSortPage.getSortingSelector().should('contain', 'Popularity: Most popular first')
        filterAndSortPage.getSortingSelector().select("prasc");
        filterAndSortPage.getSortingSelector().should('contain', 'Total price: Lowest first')
    
        tourItemsListPage.getFinalPrice().each(($el, index, $list) => {
            if ($list[index + 1] === undefined) {
                return;
            };

            const currentPrice = $el.text()
            const nextPrice = $list[index + 1].innerText
        
            console.log(`${currentPrice} vs ${nextPrice}`) // logging
            expect(currentPrice <= nextPrice).to.be.true
        })
    });
  });
