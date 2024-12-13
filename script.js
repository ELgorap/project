// Function to handle Addition
document.getElementById("addBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2;
        document.getElementById("result").textContent = "Result: " + result;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    }
});

// Function to handle Subtraction
document.getElementById("subtractBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 - num2;
        document.getElementById("result").textContent = "Result: " + result;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    }
});

// Function to handle Multiplication
document.getElementById("multiplyBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2;
        document.getElementById("result").textContent = "Result: " + result;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    }
});

// Function to handle Division
document.getElementById("divideBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        const result = num1 / num2;
        document.getElementById("result").textContent = "Result: " + result;
    } else if (num2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero.";
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    }
});
