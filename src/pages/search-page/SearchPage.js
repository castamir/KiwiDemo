import React, {Component} from "react";
import "./SearchPage.css";
import SearchForm from "./SearchForm";
import SearchService from "../../core/search.service";
import TimeService from "../../core/time.service";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            loading: false,
        };

        this.handleOnSearchFormChange.bind(this);
    }

    handleOnSearchFormChange(value) {
        this.setState({loading: true});
        let searchService = new SearchService();
        searchService.search(value.from, value.to, value.date)
            .then(results => {
                this.setState({results: results, loading: false});
            });
    }

    renderLoading() {
        return (<div>Loading...</div>);
    }

    renderResults() {
        const {results} = this.state;

        if (results.length === 0) {
            return (<div>No results</div>);
        }

        return (
            <table className={'table table-stripped table-hover'}>
                <tr>
                    <th>From / To</th>
                    <th>Departure / Arrival</th>
                    <th>Fly duration</th>
                </tr>
                {results.map(item =>
                    <tr key={item.id}>
                        <td>
                            <div>{item.cityFrom}</div>
                            <div>{item.cityTo}</div>
                        </td>
                        <td>
                            <div>{TimeService.formatDateTime(item.dTime * 1000)}</div>
                            <div>{TimeService.formatDateTime(item.aTime * 1000)}</div>
                        </td>
                        <td>Fly duration: {item.fly_duration}</td>
                    </tr>
                )}
            </table>
        );
    }

    render() {
        const {loading} = this.state;

        return (
            <seaction className="SearchPage">
                <SearchForm onSearchValueChange={(value) => this.handleOnSearchFormChange(value)} />

                {loading ? this.renderLoading() : this.renderResults()}
            </seaction>
        );
    }
}

export default SearchPage;
