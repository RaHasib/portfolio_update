import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Face6Icon from '@mui/icons-material/Face6';

const DadJoke = () => {
    const [joke, setJoke] = useState('');
    const [showJoke, setShowJoke] = useState(false);

    const StyledButton = styled(Button)`
      background-color: #94c7ac;
      color: #000000;
      border-radius: 8px;
      padding: 9px 10px;
      font-size: 12px;
      font-weight: lighter;
      text-transform: uppercase;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #4bb382;
        color: white;
      }
    `;

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            setJoke(data.joke);
            setShowJoke(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {showJoke ? (
                <p className="p-4">{joke}</p>
            ) : (
                <p className="p-4">Click &quot;Get Dad Jokes&quot; to see a joke</p>
            )}
            <StyledButton variant="contained" onClick={fetchJoke} endIcon={<Face6Icon />}>
                Get Dad Jokes
            </StyledButton>
        </div>
    );
};

export default DadJoke;
