import React, { useState } from 'react';

export default function BusinessForm({ onData, setLoading, setError, loading }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !location.trim()) {
            setError('Please fill in all fields');
            return;
        }
        setError('');
        setLoading(true);
        try {
            const res = await fetch('http://localhost:5000/business-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, location }),
            });
            const data = await res.json();
            onData({ name, location, ...data });
        } catch {
            setError('Failed to fetch business data');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="w-11/12 max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-8 border border-gray-100 space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Business Name</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. Cake & Co"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="e.g. Mumbai"
                />
            </div>
            <button
                type="submit"
                className={`w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                disabled={loading}  
            >
                {loading ? 'Loading…' : 'Generate Insights'}
            </button>
        </form>
    );
}