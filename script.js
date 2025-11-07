// Pocket Garden Day 1 - simple behavior with emojis

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
    const garden = document.getElementById('garden');
  
    let completedCount = 0; // counts how many tasks you've finished
  
    // Add a task to the list
    function addTask() {
      const text = input.value.trim();
      if (!text) return; // don't add empty tasks
  
      const li = document.createElement('li');
      li.textContent = text;
  
      // When we click this task, mark it done and grow a plant
      function onTaskClick() {
        if (li.classList.contains('done')) return; // already done
        li.classList.add('done'); // line-through style
        li.removeEventListener('click', onTaskClick); // stop further clicks
        growPlant();
      }
  
      li.addEventListener('click', onTaskClick);
      taskList.appendChild(li);
      input.value = '';
      input.focus();
    }
  
    // Grow a small plant in the garden (emoji for Day 1)
    function growPlant() {
      completedCount++;
      const plantEmoji = '🌱'; // simple for Day 1
      const div = document.createElement('div');
      div.className = 'plant';
      div.textContent = plantEmoji;
      garden.appendChild(div);
    }
  
    // Events: button click or pressing Enter
    addBtn.addEventListener('click', addTask);
    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') addTask();
    });
  });