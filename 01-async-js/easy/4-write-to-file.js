// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

function writeToFile() {
    const fs = require('fs');
    const content = 'Hello, World!';
    fs.writeFile('output.txt', content, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File written successfully');
    }
    );
    // Expensive operation
    let sum = 0;    
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    console.log('Expensive operation done');
}   