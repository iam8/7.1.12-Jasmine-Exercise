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

    it("Should create and add a new 'tr' element to the table in the DOM in updateServerTable()",
        function() {

        })

    // Teardown logic: reset allServers and server table
    afterEach(function() {
        allServers = {};
        serverTbody.innerHTML = "";
    });
});
