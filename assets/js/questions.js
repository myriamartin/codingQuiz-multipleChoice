//array of objectS 
let questions = [
  {
    question:
      "Which operator returns true if the two compared values are not equal?",
    answer: "!==",
    choices: ["<>", "~", "==!", "!=="],
  },
  {
    question: "How is a forEach statement different from a for statement?",
    answer:
      "A for statement is generic, but a forEach statement can be used only with an array",
    choices: [
      "Only a for statement uses a callback function.",
      "A for statement is generic, but a forEach statement can be used only with an array.",
      "Only a forEach statement lets you specify your own iterator.",
      "A forEach statement is generic, but a for statement can be used only with an array.",
    ],
  },
  {
    question:
      "Which statement is the correct way to create a variable called rate and assign it the value 100?",
    answer: "let rate = 100;",
    choices: [
      "let rate = 100;",
      "let 100 = rate;",
      "100 = let rate;",
      "rate = 100;",
    ],
  },

  {
    question: "Which expression evaluates to true?",
    answer: "3 == '3'",
    choices: ["[3] == [3]", "3 == '3'", "3 != '3'", "3 === '3'"],
  },
  {
    question:
      "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
    answer: "Object.keys()",
    choices: [
      "Object.get()",
      "Object.loop()",
      "Object.each()",
      "Object.keys()",
    ],
  },
  {
    question: "Which method converts JSON data to a JavaScript object?",
    answer: "JSON.parse()",
    choices: [
      "JSON.fromString();",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.stringify()",
    ],
  },
  {
    question: "Which method adds a new element to the beginning of an array?",
    answer: "unshift()",
    choices: ["shift()", "push()", "unshift()", "pop()"],
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    answer: "Both <head> or <body> section",
    choices: [
      "The <head> section",
      "The <body> section",
      "The <header> section",
      "Both <head> or <body> section",
    ],
  },

  {
    question: "How do you call a function named myFunction",
    answer: "All is correct",
    choices: [
      "myFunction()",
      "call function myFunction()",
      "call myFunction()",
      "All is correct",
    ],
  },

  {
    question: "What API is used to handle objects in localStorage?",
    answer: "JSON",
    choices: ["DOM", "Web", "Window", "JSON"],
  },
];
