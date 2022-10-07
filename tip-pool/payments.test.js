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

        submitPaymentInfo();

        expect(billAmtInput.value).toBe("");
        expect(tipAmtInput.value).toBe("");
    })

    // Teardown logic: reset values that were changed
    afterEach(function() {

        billAmtInput.value = "";
        tipAmtInput.value = "";

        allPayments = {};
        paymentId = 0;

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

    // Teardown logic: reset values that were changed
    afterEach(function() {

        billAmtInput.value = "";
        tipAmtInput.value = "";
    })
})

describe("appendPaymentTable() tests", function() {

    it("Should create and append a new 'tr' element with the correct attributes and value to the \
        payment table", function() {

            const curPayment = {billAmt: "100", tipAmt: "25", tipPercent: 25};
            appendPaymentTable(curPayment);

            expect(paymentTbody.childElementCount).toBe(1);

            // Get the newly added row element
            const newTr = paymentTbody.firstElementChild;

            // Check that the new element has the correct attributes and information
            expect(newTr.tagName).toBe("TR");
            expect(newTr.id).toBe("payment0");
            expect(newTr.childElementCount).toBe(4);

            // Get the child elements of this new row element
            const tdList = newTr.children;

            // Check that these child elements have the correct attributes
            expect(tdList[0].tagName).toBe("TD");
            expect(tdList[1].tagName).toBe("TD");
            expect(tdList[2].tagName).toBe("TD");
            expect(tdList[3].tagName).toBe("TD");

            expect(tdList[0].innerText).toBe("$100");
            expect(tdList[1].innerText).toBe("$25");
            expect(tdList[2].innerText).toBe("25%");
            expect(tdList[3].innerText).toBe("X");
    })

    // Teardown logic: reset values that were changed
    afterEach(function() {
        paymentTbody.innerHTML = "";
    })
})

describe("updateSummary() tests", function() {

    it("Should update the summary table appropriately for a total tip percent and number of \
        payments of 0",
        function() {

            updateSummary();

            expect(summaryTds[0].innerHTML).toBe("$0");
            expect(summaryTds[1].innerHTML).toBe("$0");
            expect(summaryTds[2].innerHTML).toBe("0%");
        })

    it("Should update the summary table appropriately for a total tip percent of 0 but a nonzero \
        number of payments",
        function() {

            allPayments["payment0"] = {billAmt: "100", tipAmt: "0", tipPercent: 0};

            updateSummary();

            expect(summaryTds[0].innerHTML).toBe("$100");
            expect(summaryTds[1].innerHTML).toBe("$0");
            expect(summaryTds[2].innerHTML).toBe("0%");
        })

    it("Should update the summary table with the correct values for valid billAmt, tipAmt, and \
        tipPercent inputs",
        function() {

            allPayments["payment0"] = {billAmt: "100", tipAmt: "23", tipPercent: 23};
            allPayments["payment1"] = {billAmt: "75", tipAmt: "13", tipPercent: 17};

            updateSummary();

            expect(summaryTds[0].innerHTML).toBe("$175");
            expect(summaryTds[1].innerHTML).toBe("$36");
            expect(summaryTds[2].innerHTML).toBe("20%");
        })

    // Teardown logic: reset values that were changed
    afterEach(function() {

        allPayments = {};

        for (let td of summaryTds) {
            td.innerHTML = "";
        }
    })
})
