import React, { useState, useEffect } from 'react';

const Filters = ({ onFilterChange }) => {
    const distance = [{id: 0, value: 5}, {id: 1, value: 10}, {id:2, value: 25}, {id:3, value: 50}];
    const [selectedDistance, setSelectedDistance] = useState('5');

    const handleDistanceChange = (event) => {
        setSelectedDistance(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor="distance">Filter by Distance:</label>
            <select id="distance" value={selectedDistance} onChange={handleDistanceChange}>
                <option value="">Select Distance</option>
                {distance.map((dist) => (
                    <option key={dist.id} value={dist.value}>
                        {dist.value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filters;