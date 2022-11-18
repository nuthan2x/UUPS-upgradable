// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "./PizzaV2.sol";

contract PizzaV3 is PizzaV2 {
    uint public tables;

    function getTables() external view returns (uint) {
        return tables;
    }

    function addTable()  external{
        tables++;
    }
}