import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import Icon from '@material-ui/core/Icon'
import '../styles/NavBar.scss'
import $ from 'jquery'


class NavBar extends React.Component {
    
    handleClick =()=> { 
        
        $('#menu-mobile').toggleClass('open');
        $('#switcher').fadeToggle(300) };
    render(){

   
        return (
            <nav>
               
               
                <div id="menu-mobile" onClick={this.handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
                <div id='switcher'>
                    <ul>
                    <div style={{margin:'1vw 0 1vw 0'}}></div>
                <Link to='/team'>
                    <li style={{margin:'0 0 0 0'}} >Executive Team</li>
                    </Link>
                    <div style={{margin:'1vw 0 1vw 0'}}></div>
                    <Link  to='/symposium'>
                    <li style={{margin:'0 0 0 0'}}>Global Symposium</li>
                    </Link>
                    <div style={{margin:'1vw 0 1vw 0'}}></div>
                    <Link  to='/winners'>
                    <li style={{margin:'0 0 0 0'}}>Winners</li>
                    </Link>
                    <div style={{margin:'1vw 0 1vw 0'}}></div>
                    <Link to='/blog'>
                    <li style={{margin:'0 0 0 0'}}>Blog</li>
                    </Link>
                    </ul>
                </div>
                <ul>
                    <Link to='/'>
                    <li>Main</li>
                    </Link>
                    <Link to='/training'>
                    <li>Student</li>
                    </Link>
                    <Link to='/business'>
                    <li>Business</li>
                    </Link>
                    <Link to='/coach'>
                    <li>Coach</li>
                    </Link>
                    <Link to='/research'>
                    <li>Researcher</li>
                    </Link>
                    <Link id='xacademy' to='/x-academy' style={{margin:'0 2vw 0 2vw'}}>
                    <li>X-Academy</li>
                    </Link>
                </ul>
            </nav>
           
        )
    }
    
}

export default NavBar;