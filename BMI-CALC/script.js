const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100; // Convert cm to meters
    const weightValue = document.getElementById("weight").value;

    if (!heightValue || !weightValue || heightValue <= 0 || weightValue <= 0) {
        alert("Please enter valid height and weight values!");
        return;
    }

    const bmiValue = (weightValue / (heightValue * heightValue)).toFixed(2); // Calculate BMI and round to 2 decimals
    bmiInputEl.value = bmiValue;

    if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText = "Overweight";
    } else if (bmiValue >= 30) {
        weightConditionEl.innerText = "Obesity";
    }
}

btnEl.addEventListener("click", calculateBMI);
