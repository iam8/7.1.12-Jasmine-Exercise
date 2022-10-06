// Ioana A Mititean
// 10/05/22
// 7.1.12: Jasmine Testing Exercise

describe("Tests for calculateMonthlyPayment()", function() {
    it("Should throw an error for invalid inputs", function() {

        // Negative loan amount, yearly rate, or num of years
        expect(() => calculateMonthlyPayment({
            amount: -10,
            rate: 1,
            years: 1}))
            .toThrowError("Input amounts cannot be negative.");
        expect(() => calculateMonthlyPayment({
            amount: 1,
            rate: -10,
            years: 1}))
            .toThrowError("Input amounts cannot be negative.");
        expect(() => calculateMonthlyPayment({
            amount: 1,
            rate: 1,
            years: -10}))
            .toThrowError("Input amounts cannot be negative.");

        // Value of 0 for yearly rate or num years
        expect(() => calculateMonthlyPayment({
            amount: 1,
            rate: 0,
            years: 1}))
            .toThrowError("Yearly rate and number of years must be greater than 0.");
        expect(() => calculateMonthlyPayment({
            amount: 1,
            rate: 1,
            years: 0}))
            .toThrowError("Yearly rate and number of years must be greater than 0.");
        
        // Input values of NaN
        expect(() => calculateMonthlyPayment({
            amount: NaN,
            rate: 1,
            years: 1}))
            .toThrowError("Inputs must be numbers.");
        expect(() => calculateMonthlyPayment({
            amount: 1,
            rate: NaN,
            years: 1}))
            .toThrowError("Inputs must be numbers.");
        expect(() => calculateMonthlyPayment({
            amount: 1,
            rate: 1,
            years: NaN}))
            .toThrowError("Inputs must be numbers.");
    })

    it('Should calculate and round the monthly rate correctly', function() {

        // Should return a monthly payment of 0 if the loan amount is 0
        expect(calculateMonthlyPayment({amount: 0, rate: 1, years: 1})).toBe("0.00");

        // Should calculate correctly for other valid numbers
        expect(calculateMonthlyPayment({amount: 100, rate: 1, years: 1})).toBe("13.50");
        expect(calculateMonthlyPayment({amount: 666666, rate: 0.03, years: 11})).toBe("5935.84");
        expect(calculateMonthlyPayment({amount: 50.55, rate: 0.002, years: 60})).toBe("0.07");
        expect(calculateMonthlyPayment({amount: 150000, rate: 0.06, years: 25})).toBe("966.45");
    });
    
    
    it("Should return a string result representing a number with 2 decimal places", function() {

        // First check that the result is a string
        expect(calculateMonthlyPayment({amount: 100, rate: 1, years: 1})).toBeInstanceOf(String);

        // Check that the string result has 2 decimal places displayed
        const result_0 = calculateMonthlyPayment({amount: 0, rate: 1, years: 1});
        const result_1 = calculateMonthlyPayment({amount: 100, rate: 1, years: 1});
        const result_2 = calculateMonthlyPayment({amount: 700000, rate: 0.1, years: 10});
        const result_3 = calculateMonthlyPayment({amount: 63636827, rate: 0.09, years: 7284});

        expect(result_0[result_0.length - 3]).toBe(".");
        expect(result_1[result_1.length - 3]).toBe(".");
        expect(result_2[result_2.length - 3]).toBe(".");
        expect(result_3[result_3.length - 3]).toBe(".");
    });
})
