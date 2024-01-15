import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';

function ResultsContainer({suggestedNames}) {
    const suggestedNamesJsx = suggestedNames.map((suggestedName)=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    });
  return (
    <div className='result-container'>
        <p>{suggestedNamesJsx}</p>
    </div>
  )
}

export default ResultsContainer