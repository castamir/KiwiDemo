import React, {Component} from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';

import "./SearchForm.css";
import 'react-datepicker/dist/react-datepicker.css';



class SearchForm extends Component {
    static propTypes = {
        onSearchValueChange(value) {}
    };

    constructor(props) {
        super(props);
        this.state = {
            from: 'prague_cz',
            to: 'brno_cz',
            date: moment(),
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        let {from, to, date} = this.state;

        this.props.onSearchValueChange({
            from: from,
            to: to,
            date: date.format('DD/MM/YYYY'),
        });

        e.preventDefault();
    }

    handleChange(value, key) {
        let newState = {};
        newState[key] = value;
        this.setState(newState);
    }

    render() {
        let {from, to, date} = this.state;

        return (
            <form className="search-form" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-from">From</label>
                        <input type="text" className="form-control" id="search-form-from" placeholder="Prague"
                            value={from} onChange={(e) => this.handleChange(e.target.value, 'from')}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-to">To</label>
                        <input type="text" className="form-control" id="search-form-to" placeholder="Brno"
                            value={to} onChange={(e) => this.handleChange(e.target.value, 'to')}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="search-form-date">Date</label>
                        {/*<input type="text" className="form-control" id="search-form-date" placeholder="DD/MM/YYYY"*/}
                            {/*value={date} onChange={(e) => this.handleChange(e, 'date')}*/}
                        {/*/>*/}
                        <DatePicker
                            selected={this.state.date}
                            onChange={(value) => this.handleChange(value, 'date')}
                            className="form-control"
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
