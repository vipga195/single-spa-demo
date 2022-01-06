import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <Link to={"/people"} className='header-link'>People</Link>
            <Link to={"/planets"} className='header-link'>Planets</Link>
            <Link to={"/"} className='ml-auto header-link'>Github project</Link>
        </div>
    )
}
export default Header