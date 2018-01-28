import React, {Component} from "react";
import "./SearchForm.css";

class SearchForm extends Component {
    render() {
        return (
            <form className="search-form">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-from">From</label>
                        <input type="text" className="form-control" id="search-form-from" placeholder="Prague" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-to">To</label>
                        <input type="text" className="form-control" id="search-form-to" placeholder="Brno" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-date">Date</label>
                        <input type="text" className="form-control" id="search-form-date" placeholder="DD/MM/YYYY" />
                    </div>
                </div>
                <div className="form-group text-right">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </form>
        );
    }
}

export default SearchForm;
