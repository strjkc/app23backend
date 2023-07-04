const helpers = require("./helpers");
const entries = require("./testData");
//The isCurrentMonth function tests wheter the current date is between the start and end date of the entry

describe("Start year is smaller than current, end year is greater", () => {
    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[0];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[1];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[2];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[3];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[4];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[5];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[6];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[7];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsInYrange[8];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });
});

//###################
describe("Start and End year are equal to current", () => {
    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[0];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[1];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[2];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[3];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[4];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[5];
        expect(helpers.isCurrentMonth(entry)).toBe(true);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[6];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[7];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsEqualToY[8];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });
})

//###################

describe("Start and End year are greater than current", () => {
    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[0];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[1];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[2];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[3];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[4];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[5];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[6];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[7];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsGreaterThanYs[8];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });
});
//###################

describe("Start and end year are smaller than current", () => {
    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[0];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[1];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[2];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[3];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[4];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });

    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[5];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[6];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[7];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });


    test("startYear: current; startMonth: current, endYear: 9999; endMonth: > current. result: true", () => {
        const entry = entries.dateIsSmallerThanYs[8];
        expect(helpers.isCurrentMonth(entry)).toBe(false);
    });
});