export const contractAddress = "0x2a7F1765A8Dc331be619145d312acF0198c91525";

export const contractAbi = [
  {
    inputs: [
      {
        internalType: "enum RockPaperScissors.GameType",
        name: "_gameType",
        type: "uint8",
      },
    ],
    name: "createGame",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "gameId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "player1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum RockPaperScissors.GameType",
        name: "gameType",
        type: "uint8",
      },
    ],
    name: "GameCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "gameId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payout",
        type: "uint256",
      },
    ],
    name: "GameEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "gameId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "player2",
        type: "address",
      },
    ],
    name: "GameJoined",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_gameId",
        type: "bytes32",
      },
    ],
    name: "joinGame",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_gameId",
        type: "bytes32",
      },
      {
        internalType: "enum RockPaperScissors.Choice",
        name: "_choice",
        type: "uint8",
      },
    ],
    name: "playRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "gameId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "roundNumber",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum RockPaperScissors.Choice",
        name: "player1Choice",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum RockPaperScissors.Choice",
        name: "player2Choice",
        type: "uint8",
      },
    ],
    name: "RoundPlayed",
    type: "event",
  },
  {
    inputs: [],
    name: "creatorFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "games",
    outputs: [
      {
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
      {
        internalType: "enum RockPaperScissors.GameType",
        name: "gameType",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "roundsPlayed",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_gameId",
        type: "bytes32",
      },
    ],
    name: "getGameState",
    outputs: [
      {
        internalType: "address[2]",
        name: "players",
        type: "address[2]",
      },
      {
        internalType: "uint256",
        name: "stake",
        type: "uint256",
      },
      {
        internalType: "enum RockPaperScissors.GameType",
        name: "gameType",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "roundsPlayed",
        type: "uint8",
      },
      {
        internalType: "uint8[2]",
        name: "scores",
        type: "uint8[2]",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
