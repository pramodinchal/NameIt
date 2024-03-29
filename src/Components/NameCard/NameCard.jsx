
import './NameCard.css';
const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain='

function NameCard({suggestedName}) {
  return (
    <a target='_blank' rel='noreferrer' className='card-link' href={`${nameCheapUrl}${suggestedName}`}>
    <div className='result-name-card'>
        <p key={suggestedName} className='result-name'>{suggestedName}</p>
    </div>
    </a>
  )
}

export default NameCard;