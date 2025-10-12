import React from 'react';

const Plan = () => {
    const items = [
        { title: 'Janine & Peter', description: 'Eerste kindje', image: '../images/female-male.png' },
        { title: 'Uitgerekende datum', description: '1 januari 2025', image: '../images/calendar.png' },
        { title: 'Geslacht', description: 'Onbekend', image: '../images/gender.png' },
        { title: 'Verloskundige', description: 'St. Anna', image: '../images/practice.png' },
    ];

    return (
        <div style={{ display: 'flex', gap: '1.5rem' }}>
            {items.map((item, idx) => (
                <div key={idx} style={{
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '1rem',
                    width: '150px',
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <img src={item.image} alt={item.title} style={{ width: '100%', borderRadius: '4px' }} />
                    <h3 style={{ margin: '0.5rem 0 0 0', fontSize: '1.1rem' }}>{item.title}</h3>
                    <p style={{ margin: '0.5rem 0 0 0', color: '#555' }}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Plan;
