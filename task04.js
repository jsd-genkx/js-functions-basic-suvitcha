"use strict";

/*
Task 04: Traffic Light Action

📝 Instructions
- Create a function named trafficLightAction
- It should accept one parameter: a string representing the color
- Use a switch statement to handle each case
- Return "Go" if the color is "green"
- Return "Slow down" if it's "yellow"
- Return "Stop" if it's "red"
- Otherwise, return "Invalid light color"

❌ Do not print inside the function.
✅ Only return the result.
*/

// 👨‍💻 TODO-01: Write your code below to complete the task as described above.
const trafficLightAction = (parameters) => {
  switch (parameters) {
    case "green":
      return "Go";
    case "yellow":
      return "Slow down";
    case "red":
      return "Stop";
    default:
      return "Invalid light color";
  }
};

// Example Test Cases
console.log(trafficLightAction("green")); // "Go"
console.log(trafficLightAction("yellow")); // "Slow down"
console.log(trafficLightAction("red")); // "Stop"
console.log(trafficLightAction("blue")); // "Invalid light color"
