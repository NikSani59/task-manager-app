import { useState } from 'react';

function TaskItem({ task, onToggle, onEdit, onDelete }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  return (
    <li className="task-item">
      {isEditing ? (
        <div className="edit-container">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button onClick={handleSave} className="edit-buttons">Save</button>
          <button onClick={handleCancel} className="edit-buttons">Cancel</button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            className="task-checkbox"
            id={`task-checkbox-${task._id}`}
            checked={task.completed}
            onChange={() => onToggle(task._id)}
          />
          <span id={`task-${task._id}`} className="task-text">
            {task.name}
          </span>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button type="button" onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}


export default TaskItem
