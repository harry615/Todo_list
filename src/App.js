import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage reminders
  const [reminders, setReminders] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // Track which reminder is being edited
  const [editingValue, setEditingValue] = useState(''); // Track the value being edited

  // Function to handle adding a new reminder
  const addReminder = () => {
    if (inputValue.trim() !== '') {
      setReminders([...reminders, inputValue]);
      setInputValue(''); // Clear input
    }
  };

  // Function to delete a reminder by index
  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  // Function to enable editing mode
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingValue(reminders[index]);
  };

  // Function to save the edited reminder
  const saveEditing = (index) => {
    const updatedReminders = reminders.map((reminder, i) =>
      i === index ? editingValue : reminder
    );
    setReminders(updatedReminders);
    setEditingIndex(null); // Exit edit mode
  };

  return (
    <div className="App">
      <h1>📝 To do List</h1>

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
            {editingIndex === index ? (
              // If in edit mode, show an input field
              <input
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                onBlur={() => saveEditing(index)} // Save on losing focus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveEditing(index); // Save on Enter key
                }}
                autoFocus
              />
            ) : (
              // If not in edit mode, show the reminder text
              <span onClick={() => startEditing(index)}>{reminder}</span>
            )}
            <button className="delete-btn" onClick={() => deleteReminder(index)}
            style={{

            background: "none",
            border: "none",
            color: "red",
            fontSize: "48px",
            cursor: "pointer",
            marginLeft: "10px",
            }}
                                                 >
                                                   ×
                                                 </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;