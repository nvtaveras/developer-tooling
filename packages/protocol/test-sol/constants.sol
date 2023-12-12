pragma solidity ^0.5.13;

// This contract is only required for Solidity 0.5
contract Constants {
  uint256 public constant FIXED1 = 1e24;
  uint256 constant YEAR = 365 * 24 * 60 * 60;

  // contract names
  string constant ElectionContract = "Election";
  string constant SortedOraclesContract = "SortedOracles";
  string constant StableTokenContract = "StableToken";
  string constant GoldTokenContract = "GoldToken";
  string constant FreezerContract = "Freezer";
}