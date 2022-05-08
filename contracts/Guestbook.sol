// SPDX-License-Identifier: MIT

pragma solidity 0.8.13;

contract Guestbook {
    event SignatureAdded(string message, bytes32 name);
    bytes32[] guests;

    function signBook(bytes32 name) public {
        guests.push(name);
        emit SignatureAdded("New guest signature!", name);
    }

    function getNames() public view returns (bytes32[] memory) {
        return guests;
    }
}
