import moment from "moment";

class TimeService {

    static moment(value, format) {
        if (!format) {
            format = 'DD/MM/YYYY';
        }
        let m = Number.isInteger(value) ? moment(value) : moment(value, [moment.ISO_8601, moment.RFC_2822, format]);
        if (!m.isValid()) {
            throw new Error(`Invalid date "${value}"`);
        }
        return m;
    }

    static nextDay(datetime, format) {
        let m = TimeService.moment(datetime, format);
        return m.add(1, 'day');
    }

    static formatDateTime(timestamp) {
        return TimeService.moment(timestamp).format('DD/MM/YYYY HH:mm');
    }
}

export default TimeService;
