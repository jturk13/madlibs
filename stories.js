import React, { useState } from 'react';

const Madlib = () => {
    const [selectedStory, setSelectedStory] = useState('');
    const [story, setStory] = useState('');
    const [inputs, setInputs] = useState({
        noun: '',
        verb: '',
        adjective: '',
        adverb: ''
    });
    const [formCompleted, setFormCompleted] = useState(false);

    const handleStorySelect = (e) => {
        setSelectedStory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate the story with inputs
        const newStory = generateStory(selectedStory, inputs);
        setStory(newStory);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
        // Check if all input fields are filled out
        if (Object.values(inputs).every((input) => input.trim() !== '')) {
            setFormCompleted(true);
        } else {
            setFormCompleted(false);
        }
    };

    const handleRestart = () => {
        setStory('');
        setInputs({
            noun: '',
            verb: '',
            adjective: '',
            adverb: ''
        });
        setFormCompleted(false);
    };

    // Function to generate story based on selected option and inputs
    const generateStory = (selectedOption, inputs) => {
        switch (selectedOption) {
            case 'story1':
                return `Story 1: Once upon a time, there was a ${inputs.adjective} ${inputs.noun} who loved to ${inputs.adverb} ${inputs.verb}.`;
            case 'story2':
                return `Story 2: ${inputs.noun} ${inputs.verb} ${inputs.adverb} ${inputs.adjective}.`;
            // Add more cases for additional story options
            default:
                return '';
        }
    };

    return (
        <div>
            <h2>Mad Libs</h2>
            <select value={selectedStory} onChange={handleStorySelect}>
                <option value="">Select a Story</option>
                <option value="story1">Story 1</option>
                <option value="story2">Story 2</option>
                {/* Add more options for additional stories */}
            </select>
            {selectedStory && (
                <>
                    {story ? (
                        <>
                            <p>{story}</p>
                            <button onClick={handleRestart}>Restart</button>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="noun">Noun:</label>
                            <input type="text" id="noun" name="noun" value={inputs.noun} onChange={handleInputChange} required />
                            <label htmlFor="verb">Verb:</label>
                            <input type="text" id="verb" name="verb" value={inputs.verb} onChange={handleInputChange} required />
                            <label htmlFor="adjective">Adjective:</label>
                            <input type="text" id="adjective" name="adjective" value={inputs.adjective} onChange={handleInputChange} required />
                            <label htmlFor="adverb">Adverb:</label>
                            <input type="text" id="adverb" name="adverb" value={inputs.adverb} onChange={handleInputChange} required />
                            <button type="submit" disabled={!formCompleted}>Submit</button>
                        </form>
                    )}
                </>
            )}
        </div>
    );
};

export default Madlib;
