// Ioana A Mititean
// 10/06/22
// 7.1.12: Jasmine Testing Exercise

describe("submitPaymentInfo() tests", function() {

    // Initialization logic
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
    })

    it ("Should add a new entry of payment info to allPayments",
        function() {
            submitPaymentInfo();

            expect(Object.keys(allPayments).length).toEqual(1);
            expect(allPayments['payment' + paymentId]).toEqual({billAmt: "100",
                                                                tipAmt: "25",
                                                                tipPercent: 25});
        })

    it("Should reset the bill amount and tip amount inputs to be empty", function() {
        billAmtInput.value = 50;
        tipAmtInput.value = 13;

        submitPaymentInfo();

        expect(billAmtInput.value).toBe("");
        expect(tipAmtInput.value).toBe("");
    })

    // Teardown logic: reset values that were changed
    afterEach(function() {
        billAmtInput.value = "";
        tipAmtInput.value = "";

        paymentId = 0;
        allPayments = {};

        // Reset the inner HTML of the tables that were changed
        paymentTbody.innerHTML = "";
        serverTbody.innerHTML = "";

        for (let td of summaryTds) {
            td.innerHTML = "";
        }
    })

})

describe("createCurPayment() tests", function() {

})

describe("appendPaymentTable() tests", function() {

})

describe("updateSummary() tests", function() {

})
