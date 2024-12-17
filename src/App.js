import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage reminders
  const [reminders, setReminders] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle adding a new reminder
  const addReminder = () => {
    if (inputValue.trim() !== '') {
      setReminders([...reminders, inputValue]); // Add to the list
      setInputValue(''); // Clear input
    }
  };

  // Function to delete a reminder by index
  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  return (
    <div className="App">
      <h1>📝 Reminder List</h1>

      {/* Input and Add Button */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a reminder..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addReminder}>Add Reminder</button>
      </div>

      {/* Display List of Reminders */}
      <ul className="reminder-list">
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder}
            <button className="delete-btn" onClick={() => deleteReminder(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
