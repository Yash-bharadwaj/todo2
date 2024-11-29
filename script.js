document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTask');
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');
    const quoteContainer = document.getElementById('quoteContainer'); // h1 tag for quotes

    // Array of quotes to show randomly
    const quotes = [
        "You can do anything, but not everything.",
        "Start where you are. Use what you have. Do what you can.",
        "Don't watch the clock; do what it does. Keep going.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "The secret of getting ahead is getting started.",
        "Success doesn't just find you. You have to go out and get it.",
        "It's not about having time. It's about making time.",
        "Your only limit is you.",
        "Dream big. Start small. Act now.",
        "The future depends on what you do today.",
        "Small steps every day add up to big results.",
        "It always seems impossible until it's done.",
        "Don't count the days, make the days count.",
        "Strive for progress, not perfection.",
        "Believe you can and you're halfway there.",
        "Focus on being productive instead of busy.",
        "Action is the foundational key to all success.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "You don't have to see the whole staircase, just take the first step.",
        "Opportunities don't happen, you create them."
    ];

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = createTaskElement(taskText);
            pendingTasksList.appendChild(taskItem);
            taskInput.value = '';

            // Update the quote with roll-in animation after adding a new task
            updateQuoteWithAnimation();
        }
    }

    function createTaskElement(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const completeBtn = li.querySelector('.complete-btn');
        const editBtn = li.querySelector('.edit-btn');
        const deleteBtn = li.querySelector('.delete-btn');

        completeBtn.addEventListener('click', () => completeTask(li));
        editBtn.addEventListener('click', () => editTask(li));
        deleteBtn.addEventListener('click', () => deleteTask(li));

        return li;
    }

    function completeTask(taskElement) {
        taskElement.querySelector('.complete-btn').remove();
        completedTasksList.appendChild(taskElement);
        
        // Update the quote with left-to-right sliding effect after completing a task
        slideNewQuote();
    }

    function editTask(taskElement) {
        const taskText = taskElement.querySelector('span').textContent;
        taskInput.value = taskText;  // Move the task text to the input field
        taskElement.remove();  // Remove the task from the pending list
    }

    function deleteTask(taskElement) {
        taskElement.remove();
    }

    function updateQuoteWithAnimation() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const newQuote = quotes[randomIndex];

        // Apply roll-out animation before changing the text
        quoteContainer.style.animation = 'roll-out 0.5s forwards';
        
        // After roll-out, change the quote and apply roll-in animation
        setTimeout(() => {
            quoteContainer.textContent = newQuote;
            quoteContainer.style.animation = 'roll-in 0.5s forwards';
        }, 500); // Wait for the roll-out animation to finish (0.5s)
    }

    function slideNewQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const newQuote = quotes[randomIndex];

        // Apply slide-out animation
        quoteContainer.style.animation = 'slide-out 0.5s forwards';

        // After slide-out, change the quote and apply slide-in animation
        setTimeout(() => {
            quoteContainer.textContent = newQuote;
            quoteContainer.style.animation = 'slide-in 0.5s forwards';
        }, 500); // Wait for slide-out to finish
    }
});
