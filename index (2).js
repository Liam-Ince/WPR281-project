// JavaScript for Workout Statistics Page

// Toggle burger menu visibility
function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active"); // Toggles the 'active' class on the nav-menu to show or hide the menu
    document.querySelector(".burger-menu").classList.toggle("active"); // Toggles the 'active' class on the burger menu to change the icon state (open/close)
}

// Retrieve workout data from localStorage or use an empty array if none exists
const workoutData = JSON.parse(localStorage.getItem('workoutLists')) || []; // Fetch workout data from localStorage. If no data is found, use an empty array.

// Convert the property names to align with your chart and statistics
const formattedWorkoutData = workoutData.map(workout => ({
    type: workout.typeOfWorkout, // Maps the 'typeOfWorkout' property to 'type'
    duration: parseFloat(workout.durationOfWorkout), // Converts 'durationOfWorkout' string to float and maps it to 'duration'
    calories: parseFloat(workout.caloriesBurned) // Converts 'caloriesBurned' string to float and maps it to 'calories'
}));

// Calculate and display statistics
function updateStatistics() {
    if (formattedWorkoutData.length === 0) { // Check if there is no workout data
        document.getElementById('totalWorkouts').textContent = '0'; // Set total workouts to 0 if no data exists
        document.getElementById('totalCalories').textContent = '0'; // Set total calories to 0 if no data exists
        document.getElementById('avgDuration').textContent = '0 mins'; // Set average duration to '0 mins' if no data exists
        return; // Exit the function early if no workout data is available
    }

    const totalWorkouts = formattedWorkoutData.length; // Calculate the total number of workouts
    const totalCalories = formattedWorkoutData.reduce((sum, workout) => sum + workout.calories, 0); // Sum up the total calories burned from all workouts
    const avgDuration = (formattedWorkoutData.reduce((sum, workout) => sum + workout.duration, 0) / totalWorkouts).toFixed(2); // Calculate the average duration and round it to two decimal places

    // Update the DOM with calculated values
    document.getElementById('totalWorkouts').textContent = totalWorkouts; // Display total workouts on the page
    document.getElementById('totalCalories').textContent = totalCalories; // Display total calories burned on the page
    document.getElementById('avgDuration').textContent = `${avgDuration} mins`; // Display average workout duration in minutes
}

// Initialize statistics on page load
updateStatistics(); // Call the function to display the initial statistics when the page loads

// Chart.js - Visualize workout data
function renderCharts() {
    // Get the 2D context for each canvas
    const ctx1 = document.getElementById('workoutChart1').getContext('2d'); // For Bar chart (Workout duration by type)
    const ctx2 = document.getElementById('workoutChart2').getContext('2d'); // For Radar chart (Calories burned by workout type)
    const ctx3 = document.getElementById('workoutChart3').getContext('2d'); // For Line chart (Average workout duration over time)
    const ctx4 = document.getElementById('workoutChart4').getContext('2d'); // For Doughnut chart (Cumulative calories burned)

    if (formattedWorkoutData.length === 0) { // Check if there is no workout data
        console.warn('No workout data available to render the charts.'); // Log a warning if no workout data exists
        return; // Exit the function early if no data exists
    }

    // Extract labels (workout types) and data for charts
    const labels = formattedWorkoutData.map(workout => workout.type); // Create an array of workout types (X-axis labels)
    const durations = formattedWorkoutData.map(workout => workout.duration); // Create an array of workout durations (Y-axis data for Bar and Line chart)
    const calories = formattedWorkoutData.map(workout => workout.calories); // Create an array of calories burned (Radar and Doughnut chart data)

    // Bar Chart: Workout Duration by Type (workoutChart1)
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Workout Duration (mins)',
                data: durations,
                backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#FF5733', '#9C27B0'],
                borderColor: '#000000',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Radar Chart: Calories Burned by Workout Type (workoutChart2)
    new Chart(ctx2, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Calories Burned',
                data: calories,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: '#FF6384',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

    // Line Chart: Average Workout Duration (workoutChart3)
    new Chart(ctx3, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Average Duration (mins)',
                data: durations, // You can modify to display average over time if data allows
                borderColor: '#2196F3',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Polar Area Chart: Cumulative Calories Burned (workoutChart4)
const cumulativeCalories = calories.map((cal, index) => calories.slice(0, index + 1).reduce((a, b) => a + b, 0));

new Chart(ctx4, {
    type: 'polarArea', // Change the type to 'polarArea'
    data: {
        labels: labels,
        datasets: [{
            label: 'Calories Burned (Cumulative)',
            data: cumulativeCalories,
            backgroundColor: ['#FF5733', '#FFC107', '#2196F3', '#4CAF50'], // Colors for each segment
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

}

// Ensure Chart.js is loaded before rendering the charts
if (typeof Chart !== 'undefined') { // Check if Chart.js is available and loaded
    renderCharts(); // If Chart.js is loaded, call the renderCharts function to render the charts
} else {
    console.error('Chart.js is not loaded'); // Log an error if Chart.js is not loaded
}
