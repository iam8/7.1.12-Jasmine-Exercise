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
            expect(newTr.childElementCount).toBe(3);

            // Get the child elements of the new outer table element
            const trChildren = newTr.children;

            // Check that these child elements have the correct attributes and information
            expect(trChildren[0].tagName).toBe("TD");
            expect(trChildren[1].tagName).toBe("TD");
            expect(trChildren[2].tagName).toBe("TD");

            expect(trChildren[0].innerText).toBe("Alice");
            expect(trChildren[1].innerText).toBe("$0.00");
            expect(trChildren[2].innerText).toBe("X");
        })

    // Teardown logic: reset allServers and server table
    afterEach(function() {
        allServers = {};
        serverTbody.innerHTML = "";
    });
});
