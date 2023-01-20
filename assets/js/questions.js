//array of objectS
const myQuiz = [
  {
    question:
      "Which operator returns true if the two compared values are not equal?",
    choices: ["<>", "~", "==!", "!=="],
    answer: "!==",
  },
  {
    question: "How is a forEach statement different from a for statement?",
    choices: [
      "Only a for statement uses a callback function.",
      "A for statement is generic, but a forEach statement can be used only with an array.",
      "Only a forEach statement lets you specify your own iterator.",
      "A forEach statement is generic, but a for statement can be used only with an array.",
    ],
    answer:
      "A for statement is generic, but a forEach statement can be used only with an array",
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
    answer: "let rate = 100;",
  },

  {
    question: "Which expression evaluates to true?",
    choices: ["[3] == [3]", "3 == '3'", "3 != '3'", "3 === '3'"],
    answer: "3 == '3'",
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
    answer: "Object.keys()",
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    choices: [
      "JSON.fromString();",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.stringify()",
    ],
    answer: "JSON.parse()",
  },
  {
    question: "Which method adds a new element to the beginning of an array?",
    choices: ["shift()", "push()", "unshift()", "pop()"],
    answer: "unshift()",
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: [
      "The <head> section",
      "The <body> section",
      "The <header> section",
      "Both <head> or <body> section",
    ],
    answer: "Both <head> or <body> section",
  },

  {
    question: "How do you call a function named myFunction",
    choices: [
      "myFunction()",
      "call function myFunction()",
      "call myFunction()",
      "All is correct",
    ],
    answer: "All is correct",
  },

  {
    question: "What API is used to handle objects in localStorage?",
    choices: ["DOM", "Web", "Window", "JSON"],
    answer: "JSON",
  },
];
