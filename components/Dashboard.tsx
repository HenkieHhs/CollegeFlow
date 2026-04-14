'use client';

import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Recent Summaries</h2>
            {/* Here you can fetch and map through recent summaries data */}
            <ul>
                <li>Summary 1</li>
                <li>Summary 2</li>
                <li>Summary 3</li>
            </ul>
            <h2>Quick Actions</h2>
            <button>Action 1</button>
            <button>Action 2</button>
            <button>Action 3</button>
        </div>
    );
};

export default Dashboard;
