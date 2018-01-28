import React, {Component} from "react";
import "./SearchForm.css";

class SearchForm extends Component {
    static propTypes = {
        onSearchValueChange(value) {}
    };

    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            date: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        let newState = {};
        newState[key] = e.target.value;
        this.setState(newState, () => {
            this.props.onSearchValueChange(this.state);
        });
    }

    render() {
        let {from, to, date} = this.state;

        return (
            <form className="search-form">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-from">From</label>
                        <input type="text" className="form-control" id="search-form-from" placeholder="Prague"
                            value={from} onChange={(e) => this.handleChange(e, 'from')}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-to">To</label>
                        <input type="text" className="form-control" id="search-form-to" placeholder="Brno"
                            value={to} onChange={(e) => this.handleChange(e, 'to')}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-date">Date</label>
                        <input type="text" className="form-control" id="search-form-date" placeholder="DD/MM/YYYY"
                            value={date} onChange={(e) => this.handleChange(e, 'date')}
                        />
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
