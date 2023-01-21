//array of objectS

const myQuiz = [
  {
    question:
      "Which operator returns true if the two compared values are not equal?",
    choices: ["<>", "~", "==!", "!=="],
    correct: "!==",
  },

  {
    question:
      "Which statement is the correct way to create a variable called rate and assign it the value 100?",
    choices: [
      "let rate = 100;",
      "let 100 = rate;",
      "100 = let rate;",
      "rate = 100;",
    ],
    correct: "let rate = 100;",
  },

  {
    question: "Which expression evaluates to true?",
    choices: ["[3] == [3]", "3 == '3'", "3 != '3'", "3 === '3'"],
    correct: "3 == '3'",
  },
  {
    question:
      "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    choices: [
      "Object.get()",
      "Object.loop()",
      "Object.each()",
      "Object.keys()",
    ],
    correct: "Object.keys()",
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    choices: [
      "JSON.fromString();",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.stringify()",
    ],
    correct: "JSON.parse()",
  },
  {
    question: "Which method adds a new element to the beginning of an array?",
    choices: ["shift()", "push()", "unshift()", "pop()"],
    correct: "unshift()",
  },

  {
    question: "How do you call a function named myFunction",
    choices: [
      "myFunction()",
      "call function myFunction()",
      "call myFunction()",
      "All is correct",
    ],
    correct: "All is correct",
  },

  {
    question: "What API is used to handle objects in localStorage?",
    choices: ["DOM", "Web", "Window", "JSON"],
    correct: "JSON",
  },
];
