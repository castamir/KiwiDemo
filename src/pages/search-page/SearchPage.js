import React, {Component} from "react";
import "./SearchPage.css";
import SearchForm from "./SearchForm";

class SearchPage extends Component {
    render() {
        return (
            <seaction className="SearchPage">
                <SearchForm/>
                <div>
                    No results yet
                </div>
            </seaction>
        );
    }
}

export default SearchPage;
