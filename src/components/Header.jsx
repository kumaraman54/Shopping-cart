import React, { Component } from 'react'
import menu from './svg/bars-solid.svg'
import cart from './svg/cart-shopping-solid.svg'
import close from './svg/square-xmark-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'


export class Header extends Component {

    state = {
        toggle:false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
        console.log("Click");
    }

  render() {
    const {toggle} = this.state;
    return (
    <header>
        <div className='menu' onClick={this.menuToggle}>
        <img src={menu} alt='' width="20"></img>
        </div>
        <div className='logo'>
            <h1><Link to="/">Nike</Link></h1>
        </div>
        <nav>
            <ul className={toggle ? "toggle" : ""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Product">Product</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Login">Login/Register</Link></li>
                <li className='close' onClick={this.menuToggle}>
                    <img src={close} alt='' width="20"></img>
                </li>
            </ul>
            <div className='nav-cart'>
                <span>0</span>
                <Link to="/cart">
                <img src={cart} alt='' width="20"></img>
                </Link>
            </div>
        </nav>
    </header>
    )
  }
}

export default Header

