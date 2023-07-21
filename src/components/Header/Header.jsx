import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/logo.png';
import './Header.scss'
export default function Header() {
  return (
    <header className='header-container'>
      <Link to="/"> 
        <img  src={Logo} alt="logo de Kasa" />
      </Link>
      <nav className='header-container_machin'>
        <ul>
            <li><Link to="/">Acceuil</Link></li> 
            <li><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

