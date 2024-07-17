const express = require('express');
const app = express();
app.use(express.json());

const topics = [
    {
        "id": 0,
        "topic": "Introduction to C Programming",
        "description": "Dive into the world of C programming, its history, and your first triumphant 'Hello, world!' program. Learn about the core concepts that will lay the foundation for your C programming journey.",
        "websites": ["https://www.w3schools.com/c/c_intro.php", "https://www.geeksforgeeks.org/c-language-introduction/"]
      },
      {
        "id": 1,
        "topic": "Program Structure",
        "description": "Master the blueprint of your C programs. Grasp control flow with conditional statements (if-else) and looping constructs (for, while, do-while) to make informed decisions and execute code repeatedly based on conditions.",
        "websites": ["https://www.w3schools.com/c/c_getstarted.php", "https://www.geeksforgeeks.org/c-hello-world-program/?ref=lbp"]
      },
      {
        "id": 2,
        "topic": "Variables and Data Types",
        "description": "Become familiar with the building blocks of your programs - variables. Learn how to declare and manipulate variables using various data types (int, float, char, etc.) to store different kinds of information effectively.",
        "websites": ["https://www.w3schools.com/c/c_variables.php", "https://www.w3schools.com/c/c_data_types.php", "https://www.geeksforgeeks.org/variables-in-c/?ref=lbp", "https://www.geeksforgeeks.org/data-types-in-c/?ref=lbp"]
      },
      {
        "id": 3,
        "topic": "Operators",
        "description": "Unlock the power of operators in C. Perform calculations and comparisons using arithmetic operators (+, -, *, /), logical operators (&&, ||, !), relational operators (<, >, <=, >=, ==, !=), and assignment operators (=, +=, -=, *=, /=, %=) to manipulate data and control program flow.",
        "websites": ["https://www.w3schools.com/c/c_operators.php","https://www.geeksforgeeks.org/operators-in-c/?ref=lbp"]
      },
      {
        "id": 4,
        "topic": "Input/Output",
        "description": "Establish communication between your C programs and the user. Interact with the user using functions like printf (for formatted output) and scanf (for formatted input) to take input and display information.",
        "websites": ["https://www.w3schools.com/c/c_user_input.php","https://www.w3schools.com/c/c_output.php","https://www.geeksforgeeks.org/basic-input-and-output-in-c/?ref=lbp"]
      },
      {
        "id": 5,
        "topic": "Arrays and Strings",
        "description": "Work with organized collections of data. Utilize arrays to store elements of the same data type and manipulate them efficiently. Explore strings, which are essentially character arrays, to handle text data in your C programs.",
        "websites": ["https://www.tutorialspoint.com/cprogramming/c_arrays.htm", "https://www.geeksforgeeks.org/strings-in-c/"]
      },
      {
        "id": 6,
        "topic": "Pointers",
        "description": "Take your C programming skills to the next level with pointers. Demystify memory addresses and use pointers to reference and manage memory locations effectively, enabling more advanced programming techniques.",
        "websites": ["https://www.w3schools.com/c/c_pointers.php","https://www.geeksforgeeks.org/c-pointers/"]
      },
      {
        "id": 7,
        "topic": "Control Flow Statements",
        "description": "Make informed decisions within your C programs. Employ control flow statements like if-else, switch statements, and loops (for, while, do-while) to guide the execution flow based on conditions and create repetitive tasks for efficient processing.",
        "websites": ["https://www.geeksforgeeks.org/decision-making-c-cpp/","https://www.w3schools.com/c/c_conditions.php"]
      },
      {
        "id": 8,
        "topic": "Functions",
        "description": "Break down complex problems into smaller, reusable blocks of code. Leverage functions to organize your C programs, improve readability, and promote modularity. Explore concepts like arguments, return values, and variable scope within functions.",
        "websites": ["https://www.geeksforgeeks.org/c-functions/?ref=lbp","https://www.w3schools.com/c/c_functions.php"]
      },
      {
        "id": 9,
        "topic": "Memory Management",
        "description": "Understand dynamic memory allocation (using malloc, calloc, realloc, and free) for allocating memory during program execution",
        "websites": ["https://www.geeksforgeeks.org/memory-management-in-c/?ref=lbp","https://www.w3schools.com/c/c_memory_management.php"]
      },
      {
        "id": 10,
        "topic": "Error Handling",
        "description": "Implement techniques to gracefully handle errors and exceptions during program execution",
        "websites": ["https://www.geeksforgeeks.org/error-handling-in-c/?ref=lbp","https://www.tutorialspoint.com/cprogramming/c_error_handling.htm"]
      }
];

app.get('/topics', (req, res) => {
    res.json(topics);
});
app.get('/topics/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const topic = topics.find((topic) => topic.id === id);
    if (!topic) {
        res.status(404).send({ message: 'Topic not found' });
    } else {
        res.json(topic);
    }
});

app.post('/topics', (req, res) => {
    const newTopic = {
        id: topics.length,
        topic: req.body.topic,
        description: req.body.description,
        websites: req.body.websites
    };
    topics.push(newTopic);
    res.json(newTopic);
});

app.put('/topics/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const topic = topics.find((topic) => topic.id === id);
    if (!topic) {
        res.status(404).send({ message: 'Topic not found' });
    } else {
        topic.topic = req.body.topic;
        topic.description = req.body.description;
        topic.websites = req.body.websites;
        res.json(topic);
    }
});


app.delete('/topics/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = topics.findIndex((topic) => topic.id === id);
    if (index === -1) {
        res.status(404).send({ message: 'Topic not found' });
    } else {
        topics.splice(index, 1);
        res.json({ message: 'Topic deleted successfully' });
    }
});

app.listen(4000, () => {
    console.log('Server started on port 4000');
});