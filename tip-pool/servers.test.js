// Ioana A Mititean
// 10/05/22
// 7.1.12: Jasmine Testing Exercise

describe("Tests for submitServerInfo() (with setup and tear-down)", function() {

    // Initialization logic: set up a test server named Alice
    beforeEach(function () {
        serverNameInput.value = 'Alice';
    });

    it('Should add a new server to allServers on submitServerInfo()', function() {
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it("Should reset input value for server name in submitServerInfo()", function() {
        submitServerInfo();

        expect(serverNameInput.value).toBe("");
    })

    // Teardown logic: reset the form and server table
    afterEach(function() {
        serverNameInput.value = "";
        allServers = {};
        serverId = 0;
        serverTbody.innerHTML = "";
    });
});

describe("Tests for updateServerTable() (with setup and tear-down)", function() {

    // Initialization logic: set up a test server named Alice and add it to allServers
    beforeEach(function () {
        allServers["server0"] = {serverName : "Alice"};
    })

    it("Should create and add a new row to the table in the DOM with the correct information",
        function() {
            updateServerTable();

            expect(serverTbody.childElementCount).toBe(1);

            // Get the newly added outer table element
            const newTr = serverTbody.firstElementChild;

            // Check that the new element has the correct attributes and information
            expect(newTr.tagName).toBe("TR");
            expect(newTr.id).toBe("server0");
            expect(newTr.childElementCount).toBe(2);

            // Get the child elements of the new outer table element
            const data0 = newTr.firstElementChild;
            const data1 = newTr.lastElementChild;

            // Check that these child elements have the correct attributes and information
            expect(data0.tagName).toBe("TD");
            expect(data1.tagName).toBe("TD");
            expect(data0.innerText).toBe("Alice");
            expect(data1.innerText).toBe("$0.00");
        })

    // Teardown logic: reset allServers and server table
    afterEach(function() {
        allServers = {};
        serverTbody.innerHTML = "";
    });
});
