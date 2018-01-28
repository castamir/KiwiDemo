import React, {Component} from "react";
import "./SearchPage.css";
import SearchForm from "./SearchForm";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.handleOnSearchFormChange.bind(this);
    }

    handleOnSearchFormChange(value) {
        console.log(['handleOnSearchFormChange', value]);
    }

    render() {
        return (
            <seaction className="SearchPage">
                <SearchForm onSearchValueChange={this.handleOnSearchFormChange} />
                <div>
                    No results yet
                </div>
            </seaction>
        );
    }
}

export default SearchPage;
