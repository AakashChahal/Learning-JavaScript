import View from "./View";
import icons from "url:../../img/icons.svg";

class PaginationView extends View {
    _parentElement = document.querySelector(".pagination");

    addHandlerClick(handler) {
        this._parentElement.addEventListener("click", function (e) {
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }

    _generateMarkup() {
        const numPages = Math.ceil(
            this._data.results.length / this._data.resultsPerPage
        );
        const currPage = this._data.page;
        // console.log(numPages);
        // first with no other page
        if (currPage === 1 && numPages === 1) {
            return;
        }

        // first with more pages
        else if (currPage === 1 && numPages > 1) {
            return `
                <button data-goto="${
                    currPage + 1
                }" class="btn--inline pagination__btn--next">
                    <span>Page ${currPage + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `;
        }

        // last page
        else if (currPage === numPages) {
            return `
                <button data-goto="${
                    currPage - 1
                }" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${currPage - 1}</span>
                </button>
            `;
        }

        // some page between first and last page
        return `
            <button data-goto="${
                currPage - 1
            }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currPage - 1}</span>
            </button>
            <button data-goto="${
                currPage + 1
            }" class="btn--inline pagination__btn--next">
                <span>Page ${currPage + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
    }
}

export default new PaginationView();
