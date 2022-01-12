import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <Link to={"/react/people"} className='header-link'>People</Link>
            <Link to={"/react/planets"} className='header-link'>Planets</Link>
            <Link to={"/vue"} className='header-link'>Vue</Link>
            <Link to={"/react"} className='header-link'>React</Link>
            <Link to={"/"} className='ml-auto header-link'>Github project</Link>
        </div>
    )
}
export default Header