// Ioana A Mititean
// 10/05/22
// 7.1.12: Jasmine Testing Exercise

// Accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
    let total = 0;

    for (let key in allPayments) {
        let payment = allPayments[key];

        total += Number(payment[type]);
    }

    return total;
}

// Converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
    return Math.round(100 / (billAmt / tipAmt));
}

// Expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
    let newTd = document.createElement('td');
    newTd.innerText = value;

    tr.append(newTd);
}

// Creates a 'td' element marked with an 'X', which will remove the table row (the given 'tr'
// element that it belongs to).
// Upon pressing the delete button, the table (servers or payments table) associated with the row
// being deleted will be updated.
function appendDeleteBtn(tr) {

    const delBtn = document.createElement("td");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", function(event) {

        // Grab the ID of the current table row
        const row_id = tr.id;

        // Remove the parent table row element completely
        tr.remove();

        // Remove the server entry from the allServers or allPayments object
        delete allServers[row_id];
        delete allPayments[row_id];

        // Update the server table and update the summary
        updateServerTable();
        updateSummary();
    })

    tr.append(delBtn);
}