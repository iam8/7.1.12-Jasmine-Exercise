// Ioana A Mititean
// 10/06/22
// 7.1.12: Jasmine Testing Exercise

describe("submitPaymentInfo() tests", function() {

    // Initialization logic: set up some bill and tip input values
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

    it("Should return 'undefined' for empty or invalid input bill and tip amounts", function() {

        billAmtInput.value = "";
        tipAmtInput.value = "";
        expect(createCurPayment()).toBeUndefined();

        billAmtInput.value = -100;
        tipAmtInput.value = 25;
        expect(createCurPayment()).toBeUndefined();

        billAmtInput.value = 100;
        tipAmtInput.value = -25;
        expect(createCurPayment()).toBeUndefined();

        billAmtInput.value = 0;
        tipAmtInput.value = 25;
        expect(createCurPayment()).toBeUndefined();
    })

    it("Should create an object with the correct payment properties and values for valid input \
        bill and tip amounts",
        function() {

            billAmtInput.value = 100;
            tipAmtInput.value = 25;
            expect(createCurPayment()).toEqual({billAmt: "100", tipAmt: "25", tipPercent: 25});

            billAmtInput.value = 100;
            tipAmtInput.value = 0;
            expect(createCurPayment()).toEqual({billAmt: "100", tipAmt: "0", tipPercent: 0});
    })
})

// describe("appendPaymentTable() tests", function() {

// })

// describe("updateSummary() tests", function() {

// })
