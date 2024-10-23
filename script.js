

function calculateCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    return circumference;
}

const radius = 5;  // Value of radius can be changed here.
const circumference = calculateCircumference(radius);
console.log("The circumference of the circle is: " + circumference);