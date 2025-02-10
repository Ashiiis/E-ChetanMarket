// TaskContext.js
import React, { createContext, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const updateCount = (newCount) => {
        setCount(newCount);
    };

    return (
        <TaskContext.Provider value={{ count, updateCount }}>
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext };