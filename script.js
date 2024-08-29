document.getElementById("btn").addEventListener("click", function() {
    const input = Number(document.getElementById("ip").value);
    const output = document.getElementById("output");

    // Step 1: Create the initial promise that resolves with the input number after 2 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            output.textContent = `Result: ${input}`;
            resolve(input);
        }, 2000);
    })
    // Step 2: Multiply the number by 2 after 1 second
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = number * 2;
                output.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Step 3: Subtract 3 from the number after 1 second
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = number - 3;
                output.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Step 4: Divide the number by 2 after 1 second
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = number / 2;
                output.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Step 5: Add 10 to the number after 1 second
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = number + 10;
                output.textContent = `Result: ${result}`;
                resolve(result);
            }, 1000);
        });
    })
    // Step 6: Update the final result
    .then((finalResult) => {
        output.textContent = `Final Result: ${finalResult}`;
    })
    // Handle errors
    .catch((error) => {
        output.textContent = `Error: ${error}`;
    });
});