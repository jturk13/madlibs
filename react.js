import React, { useState } from 'react';

const Madlib = () => {
    const [story, setStory] = useState('');
    const [inputs, setInputs] = useState({
        noun: '',
        verb: '',
        adjective: '',
        adverb: ''
    });
    const [formCompleted, setFormCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate the story with inputs
        const newStory = `Once upon a time, there was a ${inputs.adjective} ${inputs.noun} who loved to ${inputs.adverb} ${inputs.verb}.`;
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

    return (
        <div>
            <h2>Mad Libs</h2>
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
        </div>
    );
};

export default Madlib;
