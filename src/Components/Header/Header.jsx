import './Header.css';

// eslint-disable-next-line react/prop-types
function Header({headerExpanded}) {
  return (
    <div className='head-container'>
    <img className={`${headerExpanded ? 'head-image-expanded':'head-image-contracted'}`} src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' alt='img'/>
        <h1 className={` ${headerExpanded ? 'head-text-expanded':'head-text-contracted'}`}>Name It!!!</h1>
    </div>
  )
}

export default Header