function generateTasks(userStory) {
    const tasks = [];
  
    // Basic rules
    const actionVerbs = ['create', 'build', 'develop', 'implement', 'integrate'];
    const objectKeywords = ['system', 'module', 'component', 'feature'];
  
    const words = userStory.split(' ');
    words.forEach((word, index) => {
      if (actionVerbs.includes(word)) {
        // Potential task: Create a task based on the following word(s)
        const potentialTask = `${word} ${words[index + 1]}`;
        tasks.push(potentialTask);
      } else if (objectKeywords.includes(word)) {
        // Potential task: Create a task based on the object
        const potentialTask = `Create ${word}`;
        tasks.push(potentialTask);
      }
    });
  
    return tasks;
  }
 export default Tasks; 