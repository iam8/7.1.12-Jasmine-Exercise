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

    it('Should calculate the monthly rate correctly', function() {

        // Should return a monthly payment of 0 if the loan amount is 0
        expect(+calculateMonthlyPayment({amount: 0, rate: 1, years: 1})).toBe(0);

        // Should calculate correctly for other numbers
    });
    
    
    it("Should return a result with 2 decimal places", function() {

        // First check that the result is a string
        expect(calculateMonthlyPayment({amount: 100, rate: 1, years: 1})).toBeInstanceOf(String);
    });
    
    /// etc
})

