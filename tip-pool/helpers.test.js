// Ioana A Mititean
// 10/06/22
// 7.1.12: Jasmine Testing Exercise

describe("Tests for sumPaymentTotal() (with setup and teardown)", function() {

    // Initialization logic: add a couple of entries in allPayments
    beforeEach(function() {
        allPayments["payment0"] = {billAmt: "100", tipAmt: "23", tipPercent: 23};
        allPayments["payment1"] = {billAmt: "75", tipAmt: "13", tipPercent: 17};
    })

    it("Should calculate the correct payment totals from allPayments", function() {
        const billTotal = sumPaymentTotal("billAmt");
        const tipTotal = sumPaymentTotal("tipAmt");
        const tipPercentTotal = sumPaymentTotal("tipPercent");

        expect(billTotal).toBe(175);
        expect(tipTotal).toBe(36);
        expect(tipPercentTotal).toBe(40);
    })

    // Teardown logic: reset the allPayments object
    afterEach(function() {
        allPayments = {};
    })
})

describe("Tests for calculateTipPercent()", function() {

    it("Should calculate the correct tip percent when given valid tip and bill amounts",
        function() {
            expect(calculateTipPercent(100, 0)).toBe(0);
            expect(calculateTipPercent(750, 3)).toBe(0);
            expect(calculateTipPercent(100, 15)).toBe(15);
            expect(calculateTipPercent(78, 78)).toBe(100);
            expect(calculateTipPercent(10, 19)).toBe(190);
            expect(calculateTipPercent(69, 20)).toBe(29);
        })

})

describe("Tests for appendTd()", function() {

    it("Should append a new 'td' element with the correct attributes and value to a given 'tr' \
        element",
        function() {

            // Create some tr elements
            const tr0 = document.createElement("tr");
            const tr1 = document.createElement("tr");

            // Add some info to the tr elements using appendTd
            appendTd(tr0, "Some inner text");
            appendTd(tr1, 1336.1);

            // Check that only 1 child element was added to each tr
            expect(tr0.childElementCount).toBe(1);
            expect(tr1.childElementCount).toBe(1);

            // Get the child element of each tr and check for correct attributes and values
            const data0 = tr0.firstElementChild;
            const data1 = tr1.firstElementChild;

            expect(data0.tagName).toBe("TD");
            expect(data1.tagName).toBe("TD");
            expect(data0.innerText).toBe("Some inner text");
            expect(data1.innerText).toBe("1336.1");
        })
})
