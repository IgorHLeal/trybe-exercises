"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Data {
    constructor(day, month, year) {
        const validDate = `${year}, ${month}, ${day}`;
        const newDate = new Date(validDate).getDate();
        if (newDate !== day || newDate !== month || newDate !== year) {
            this._day = 1,
                this._month = 1,
                this._year = 1900;
        }
        else {
            this._day = day,
                this._month = month,
                this._year = year;
        }
    }
    get day() {
        return this._day;
    }
    set day(value) {
        this._day = value;
    }
    get month() {
        return this._month;
    }
    set month(value) {
        this._month = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }
}
exports.default = Data;
const testDate = new Data(29, 1, 1989);
console.table(testDate);
