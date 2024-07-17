const express = require('express');
const app = express();
app.use(express.json());


const javaTopics = [
  {
    id: 0,
    topic: "Introduction to Java",
    description:
      "Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.",
    websites: [
      "https://www.w3schools.com/java/java_intro.asp",
      "https://www.geeksforgeeks.org/java/?ref=home-articlecards"
    ],
  },
  {
    id: 1,
    topic: "Java install",
    description :
      "Java installation, setup, path set up and basic terminologies of java .",
    websites: [
      "https://www.w3schools.com/java/java_getstarted.asp",
      "https://www.geeksforgeeks.org/java-basic-syntax/?ref=lbp"
    ]  
  },
  {
    id: 2,
    topic: "Java Syntax Basics",
    description:
      "Learn the fundamental building blocks of Java code.",
    websites: [,
      "https://www.w3schools.com/java/java_syntax.asp",
      "https://www.geeksforgeeks.org/java-hello-world-program/?ref=lbp"
    ],
  },
  {
    id: 2,
    topic: "Java Syntax Basics",
    description:
      "Learn the fundamental building blocks of Java code.",
    websites: [,
      "https://www.w3schools.com/java/java_syntax.asp",
      "https://www.geeksforgeeks.org/java-hello-world-program/?ref=lbp"
    ],
  },
  {
    id: 3,
    topic: "Java Output",
    description:
      "let's learn how to get output",
    websites: [
      "https://www.w3schools.com/java/java_output.asp"
    ],
  },
  {
    id: 4,
    topic: "Java Data-Types",
    description:
      "Types of Data-Types in java",
    websites: [,
      "https://www.w3schools.com/java/java_data_types.asp",
      "https://www.geeksforgeeks.org/data-types-in-java/?ref=lbp"
    ]
  },
  {
    id: 5,
    topic: "Java Operators",
    description:
      "Types of operators and there workings",
    websites: [,
      "https://www.javatpoint.com/operators-in-java",
      "https://www.geeksforgeeks.org/operators-in-java/?ref=dhm"
    ],
  },
  {
    id: 6,
    topic: "Java Variables",
    description:
      "Variables are containers for storing data values",
    websites: [,
      "https://www.w3schools.com/java/java_variables.asp",
      "https://www.geeksforgeeks.org/variables-in-java/?ref=lbp"
    ],
  },
  {
    id: 7,
    topic: "flow conrol in java",
    description:
      "Decision Making in Java (if, if-else, switch, break, continue, jump)",
    websites: [,
      "https://www.javatpoint.com/control-flow-in-java",
      "https://www.geeksforgeeks.org/decision-making-javaif-else-switch-break-continue-jump/?ref=lbp"
    ],
  },
  {
    id: 8,
    topic: "java if, if-else statements",
    description:
      "The Java if statement is used to test the condition. It checks boolean condition: true or false.",
    websites: [,
      "https://www.javatpoint.com/java-if-else",
      "https://www.geeksforgeeks.org/java-if-else-statement-with-examples/?ref=lbp"
    ],
  },
  {
    id: 9,
    topic: "Java Switch",
    description:
      "The Java switch statement executes one statement from multiple conditions.",
    websites: [,
      "https://www.javatpoint.com/java-switch",
      "https://www.w3schools.com/java/java_switch.asp"
    ],
  },
  {
    id: 10,
    topic: "Java For Loops",
    description:
      "Loops in Java come into use when we need to repeatedly execute a block of statements.",
    websites: [,
      "https://www.javatpoint.com/java-for-loop",
      "https://www.geeksforgeeks.org/java-for-loop-with-examples/?ref=lbp"
    ],
  },
  {
    id: 11,
    topic: "Java while loop",
    description:
      "Java while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition.",
    websites: [,
      "https://www.javatpoint.com/java-while-loop",
      "https://www.geeksforgeeks.org/java-while-loop-with-examples/?ref=lbp"
    ],
  },  
  {
    id: 12,
    topic: "Java Do-while loop",
    description:
      "Loops in Java come into use when we need to repeatedly execute a block of statements.",
    websites: [,
      "https://www.javatpoint.com/java-do-while-loop",
      "https://www.geeksforgeeks.org/java-while-loop-with-examples/?ref=lbp"
    ],
  },
  {
    id: 13,
    topic: "Break Statments in java",
    description:
      "Break Statement is a loop control statement that is used to terminate the loop.",
    websites: [,
      "https://www.javatpoint.com/java-break",
      "https://www.geeksforgeeks.org/break-statement-in-java/?ref=lbp"
    ],
  },
  {
    id: 14,
    topic: "Continue Statments in java",
    description:
      "The continue statement is used in loop control structure when you need to jump to the next iteration of the loop immediately.",
    websites: [,
      "https://www.javatpoint.com/java-continue",
      "https://www.geeksforgeeks.org/continue-statement-in-java/?ref=lbp"
    ],
  },
  {
    id: 15,
    topic: "Strings in java",
    description:
      "Strings are the type of objects that can store the character of values and in Java, every character is stored in 16 bits i,e using UTF 16-bit encoding.",
    websites: [,
      "https://www.javatpoint.com/java-string",
      "https://www.geeksforgeeks.org/strings-in-java/?ref=lbp"
    ],
  },
  {
    id: 16,
    topic: "Array in Java",
    description:
      "In Java, Array is a group of like-typed variables referred to by a common name.",
    websites: [,
      "https://www.javatpoint.com/array-in-java",
      "https://www.geeksforgeeks.org/arrays-in-java/?ref=lbp"
    ],
  },
  
];
app.get('/topics', (req, res) => {
  res.json(javaTopics);
});

app.get('/topics/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const topic = javaTopics.find((topic) => topic.id === id);
  if (!topic) {
    res.status(404).send({ message: 'Topic not found' });
  } else {
    res.json(topic);
  }
});

app.post('/topics', (req, res) => {
  const newTopic = {
    id: javaTopics.length + 1,
    topic: req.body.topic,
    description: req.body.description,
    websites: req.body.websites
  };
  javaTopics.push(newTopic);
  res.json(newTopic);
});

app.put('/topics/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const topic = javaTopics.find((topic) => topic.id === id);
  if (!topic) {
    res.status(404).send({ message: 'Topic not found' });
  } else {
    topic.topic = req.body.topic;
    topic.description = req.body.description;
    topic.websites = req.body.websites;
    res.json(topic);
  }
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
