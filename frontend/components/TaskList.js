// frontend/components/TaskList.js
import React from 'react';
import Task from './task'; // Changed './Task' to './task'

const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;