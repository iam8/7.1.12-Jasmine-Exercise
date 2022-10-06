// Ioana A Mititean
// 10/05/22
// 7.1.12: Jasmine Testing Exercise

describe("Servers test (with setup and tear-down)", function() {

    // Initialization logic
    beforeEach(function () {
        serverNameInput.value = 'Alice';
    });

    it('Should add a new server to allServers on submitServerInfo()', function() {
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it("Should update the table HTML with the new server information", function() {
        submitServerInfo();

    })

    it("Should reset input value for server name in submitServerInfo()", function() {
        submitServerInfo()

        expect(serverNameInput.value).toBe("");
    })

    // Teardown logic
    afterEach(function() {
        serverNameInput.value = "";
        allServers = {};
        serverId = 0;
        serverTbody.innerHTML = "";
    });
});
