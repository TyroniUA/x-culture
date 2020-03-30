import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Footer.scss'
let aboutUs=[{title:'Contact', link:'/contact'}, {title:'About X-Culture', link:'/main'}, {title:'Team', link:'/team'}, {title:'Winners', link:'/winners'},{title:'Blog', link:'/blog'}]
let xCulture=[{title:'Student', link:'/training'}, {title:'Instructor', link:'/training'}, {title:'Professional', link:'/professional'}, {title:'Research', link:'/research'}]
let xAcademy=[{title:'Contact', link:'/contact'}, {title:'Trainee', link:'/trainee'}, {title:'About', link:'/xacademy'}]
const List = (props)=>{
    return(
        <div className={props.class}>
            <h4 style={{margin:'3vw 0 2vw 0'}}>{props.title}</h4>
            {props.links.map((e,index)=>{
                return <Link to={e.link} key={e.link+e.title} style={{textDecoration: 'none', whiteSpace:'nowrap',margin:'0 5vw 0 0'}}><li style={{color: 'black', textDecoration: 'none', listStyleType:'none',
                    font: '400 1.04vw Roboto'}} className={props.class}>{e.title}</li></Link>
            })}
        </div>
    )
}
const Footer = () => {
    return (
        <footer>
            <h2 style={{margin: '5vw 0 2vw 0', textAlign:'center'}}> X-Culture 2020</h2>
            <p style={{textAlign:'center', font:'400 1.3vw Roboto'}}> All rights reserved.</p>
            <div className='row'>
            <List title='About us' key='Abous us' links={aboutUs} className='end'/>
                <List title='X-Culture' key='X-Culture' links={xCulture} className='middle'/>
                <List title='X-Academy' key='X-Academy' links={xAcademy} className='start'/>
            </div>

        </footer>
    )
}

export default Footer;