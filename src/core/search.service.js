import axios from "axios";
import TimeService from "./time.service";

class SearchService {
    search(flyFrom, to, dateFrom) {
        let dateTo = '';
        try {
            dateTo = TimeService.nextDay(dateFrom).format('DD/MM/YYYY');
        } catch (_) {

        }

        let options = [
            'v=2',
            'locale=en',
            `flyFrom=${flyFrom}`,
            `to=${to}`,
            `dateFrom=${dateFrom}`,
            `dateTo=${dateTo}`,
        ];
        return axios.get(`https://api.skypicker.com/flights?${options.join('&')}`)
            .then(response => {
                let flights = response.data.data;
                flights.sort((a, b) => a.dTime - b.dTime);
                return flights;
            })
            .catch(() => []);
    }
}

export default SearchService;
