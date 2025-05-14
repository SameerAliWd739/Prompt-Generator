    const projects = {
      web: `1. Responsive Portfolio Website: Build a clean, modern, and responsive portfolio website to showcase your work.\n2. Blog Website: Create a dynamic blog where users can post, comment, and interact.\n3. To-Do List App: A simple to-do app with task management features.\n...`,
      game: `1. 2D Platformer Game: Build a basic 2D platformer where a character jumps and collects items while avoiding enemies.\n2. Snake Game: Classic Snake game using JavaScript where the snake grows longer each time it eats food.\n3. Maze Puzzle Game: A game where the player navigates through a maze.\n...`,
      app: `1. Recipe Finder: An app that fetches recipes based on ingredients using an API like Spoonacular.\n2. Fitness Tracker: Track workouts, set goals, and view progress.\n3. Budget Tracker: Manage and track finances and expenses.\n...`,
      python: `1. Data Visualization Dashboard: Build an interactive dashboard with charts and graphs using libraries like Matplotlib.\n2. Weather Prediction Model: Use machine learning to predict weather.\n3. Recommendation System: Create a recommendation system.\n...`,
      ml: `1. Image Classification App: Build an app that can classify objects in images.\n2. Sentiment Analysis Tool: Analyze text sentiment (positive, negative, neutral).\n3. Voice Assistant: Build a basic voice assistant.\n...`,
      misc: `1. Personal Finance Tracker: Track income and expenses over time.\n2. Daily Habit Tracker: Track and build habits.\n3. Random Joke Generator: Generate random jokes.\n...`
    };

    // Function to display project code or description
    function generateProject() {
      const projectSelect = document.getElementById('projectSelect').value;
      const customPrompt = document.getElementById('customPrompt').value.trim();

      let projectCode = '';

      if (customPrompt) {
        projectCode = `You entered a custom prompt: "${customPrompt}".\n\nWe can help you build this project!`;
      } else if (projectSelect) {
        projectCode = projects[projectSelect] || 'No projects found.';
      } else {
        projectCode = 'Please select a project or enter a custom prompt.';
      }

      // Display the project description or code
      const projectDisplay = document.getElementById('projectDisplay');
      projectDisplay.innerHTML = `<pre>${projectCode}</pre>`;
    }