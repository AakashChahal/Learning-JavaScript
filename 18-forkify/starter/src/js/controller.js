import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultView from "./views/resultView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

if (module.hot) {
    module.hot.accept();
}

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(
                new Error(`Request took too long! Timeout after ${s} second`)
            );
        }, s * 1000);
    });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        // console.log(id);

        if (!id) return;
        recipeView.renderSpinner();

        // updating results view
        resultView.update(model.getSearchResultPage());

        // loading a recipe
        await model.loadRecipe(id);

        // rendering a recipe
        recipeView.render(model.state.recipe);
        bookmarksView.update(model.state.bookmarks);
    } catch (error) {
        console.error(error);
        recipeView.renderError();
    }
};

const controlSearchResults = async function () {
    try {
        resultView.renderSpinner();
        const query = searchView.getQuery();
        if (!query) return;

        await model.loadSearchResults(query);
        resultView.render(model.getSearchResultPage(1));
        // console.log(model.getSearchResultPage(1));

        paginationView.render(model.state.search);
    } catch (error) {
        console.error(error);
    }
};

const controlPagination = function (page) {
    resultView.render(model.getSearchResultPage(page));
    paginationView.render(model.state.search);
};

const controlServings = function (newServing) {
    // update recipe servings in the data
    model.updateServings(newServing);

    // update the recipe view
    recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
    if (model.state.recipe.bookmarked)
        model.removeBookmark(model.state.recipe.id);
    else model.addBookmark(model.state.recipe);
    recipeView.update(model.state.recipe);
    bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
    bookmarksView.render(model.state.bookmarks);
};

const init = function () {
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    controlServings();
};

init();
