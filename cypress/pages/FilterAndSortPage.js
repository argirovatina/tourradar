class FilterAndSortPage {

    getSortingSelector() {
        return cy.get('[data-cy="serp-filters--sort"]');
    }
    getPriceFilter() {
        return cy.get('.b_bud .noUi-handle-upper').filter(':visible');
    }
    getAgeRangeFilter() {
        return cy.get('[data-cy="serp-filters--age-range-list"]');
    }
    setAgeRangeFilter(range) {
        return cy.get(`[data-pid="${range}"]`);
    }
}

export default FilterAndSortPage;