import './SearchBox.css';

// eslint-disable-next-line react/prop-types
function SearchBox({onInputChange}) {
  return (
    <div className='search-container'>
        <input onChange={(event)=>onInputChange(event.target.value)} className='input-field' placeholder='Type Keyword'/>
    </div>
  )
}

export default SearchBox