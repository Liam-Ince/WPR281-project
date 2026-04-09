<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitness Goal Tracker</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <header>
        <h1>Simple Fitness Tracker</h1>

        <!-- Burger Menu for mobile view -->
        <div class="burger-menu" onclick="toggleMenu()">
            <div class="burger-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="nav-menu">
            <ul>
                <li><a href="../Question 5/game.html">Home</a></li>
                <li><a href="../Question 2/Question2.html">Stats</a></li>
                <li><a href="../Question 3/index.html">Goals</a></li>
                <li><a href="../Question 1/index.html">Log</a></li>
            </ul>
        </nav>
    </header>

    <div class="container">
        <h2>Fitness Goal Tracker</h2>
        <form id="goal-form">
            <!-- Goal Type Dropdown -->
            <div class="form-group">
                <label for="goal">Select Goal:</label>
                <select id="goal" required>
                    <option value="Swimming">Swimming</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Strength">Strength Training</option>
                    <option value="Running">Running</option>
                </select>
            </div>

            <!-- Target Amount -->
            <div class="form-group">
                <label for="target">Target Amount:</label>
                <input type="number" id="target" placeholder="Enter target" required>
                <select id="target-unit">
                    <option value="km">km</option>
                    <option value="m">m</option>
                    <option value="calories">calories</option>
                </select>
                <span class="error-message" id="target-error"></span>
            </div>

            <!-- Progress Amount -->
            <div class="form-group">
                <label for="progress">Progress:</label>
                <input type="number" id="progress" placeholder="Enter progress" required>
                <select id="progress-unit">
                    <option value="km">km</option>
                    <option value="m">m</option>
                    <option value="calories">calories</option>
                </select>
                <span class="error-message" id="progress-error"></span>
            </div>

            <!-- Buttons -->
            <div class="button-group">
                <button type="submit">Set Goal</button>
                <button type="button" id="reset-button">Reset</button>
            </div>
        </form>

        <!-- Progress Display -->
        <h3 id="goal-display"></h3>
        <div class="progress-container">
            <div class="progress-bar" id="progress-bar">0%</div>
        </div>
        <p class="message" id="message"></p>
    </div>

    <!-- Goal Records Table -->
    <div class="goal-record-container">
        <h2>Goal Records</h2>
        <table class="goal-record-table">
            <thead>
                <tr>
                    <th>Goal</th>
                    <th>Target</th>
                    <th>Progress</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody id="goal-records">
                <!-- Records will be inserted dynamically -->
            </tbody>
        </table>
    </div>

    <footer>Copyright &copy; 2025 Fitness Tracker</footer>
    <script src="index.js"></script>
    <script>
        // JavaScript function to handle the burger menu toggle
        function toggleMenu() {
            const navMenu = document.querySelector('.nav-menu');
            const burgerIcon = document.querySelector('.burger-icon');
            navMenu.classList.toggle('active');
            burgerIcon.classList.toggle('active');
        }
    </script>
</body>
</html>