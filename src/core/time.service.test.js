import TimeService from "./time.service";

it("gets next day", () => {
    let date = '25/02/2018';
    let format = 'DD/MM/YYYY';

    expect(TimeService.nextDay(date, format).isValid()).toEqual(true);
    expect(TimeService.nextDay(date, format).format(format)).toEqual('26/02/2018');

    date = '2018-03-15';
    expect(TimeService.nextDay(date).isValid()).toEqual(true);
    expect(TimeService.nextDay(date).format(format)).toEqual('16/03/2018');

    date = 'not a valid date';
    try {
        TimeService.nextDay(date);
        expect(true).toEqual(false, 'TimeService did not throw an Error');
    } catch (e) {
        expect(e.message).toEqual(`Invalid date "${date}"`);
    }
});
