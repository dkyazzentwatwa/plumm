const usersData = [
    { id: 1, name: "Susan", image: require("../assets/user.png") },
    { id: 2, name: "Lucy", image: require("../assets/user2.png") },
    { id: 3, name: "Lucy", image: require("../assets/user3.png") },
    { id: 4, name: "Lucy", image: require("../assets/user4.png") },
    { id: 5, name: "Lucy", image: require("../assets/user5.png") },
    { id: 6, name: "Lucy", image: require("../assets/user.png") },
    { id: 7, name: "Lucy", image: require("../assets/user2.png") },
    { id: 8, name: "Lucy", image: require("../assets/user3.png") },
    { id: 9, name: "Lucy", image: require("../assets/user4.png") },
    { id: 10, name: "Lucy", image: require("../assets/user5.png") },
    { id: 11, name: "Lucy", image: require("../assets/user.png") },
    { id: 12, name: "Lucy", image: require("../assets/user2.png") },
  ];
  const tranData = [
    {
      transaction: {
        id: 1,
        title: "Transaction 1",
        description: "Direct Deposit",
        amount: 100,
      },
    },
    {
      transaction: {
        id: 2,
        title: "Transaction 2",
        description: "Gas",
        amount: -50,
      },
    },
    {
      transaction: {
        id: 3,
        title: "Transaction 3",
        description: "Food",
        amount: -30,
      },
    },
    {
      transaction: {
        id: 4,
        title: "Transaction 4",
        description: "Groceries",
        amount: -60,
      },
    },
    {
      transaction: {
        id: 5,
        title: "Transaction 5",
        description: "Entertainment",
        amount: -20,
      },
    },
    {
      transaction: {
        id: 6,
        title: "Transaction 6",
        description: "Shopping",
        amount: -80,
      },
    },
    {
      transaction: {
        id: 7,
        title: "Transaction 7",
        description: "Utilities",
        amount: -40,
      },
    },
    {
      transaction: {
        id: 8,
        title: "Transaction 8",
        description: "Travel",
        amount: -70,
      },
    },
    {
      transaction: {
        id: 9,
        title: "Transaction 9",
        description: "Groceries",
        amount: -60,
      },
    },
    {
      transaction: {
        id: 10,
        title: "Transaction 10",
        description: "Food",
        amount: -30,
      },
    },
    {
      transaction: {
        id: 11,
        title: "Transaction 11",
        description: "Gas",
        amount: -50,
      },
    },
    {
      transaction: {
        id: 12,
        title: "Transaction 12",
        description: "Direct Deposit",
        amount: 100,
      },
    },
    {
      transaction: {
        id: 13,
        title: "Transaction 13",
        description: "Direct Deposit",
        amount: 100,
      },
    },
    {
      transaction: {
        id: 14,
        title: "Transaction 14",
        description: "Direct Deposit",
        amount: 100,
      },
    },
    {
      transaction: {
        id: 15,
        title: "Transaction 15",
        description: "Direct Deposit",
        amount: 100,
      },
    },
    // ... more transactions
  ];

export default { usersData, tranData };