import View from "./View";
import previewView from "./previewView";
import icons from "url:../../img/icons.svg";

class BookmarksView extends View {
    _parentElement = document.querySelector(".bookmarks__list");
    _errorMessage = "No Bookmarks yet! Find a recipe to bookmark";
    _message = "";

    _generateMarkup() {
        return this._data
            .map((result) => previewView.render(result, false))
            .join("");
    }
}

export default new BookmarksView();
