import React from 'react'
import '../styles/Business.scss'

import firebase from '../FireBase/Firebase.js'
import TeamCard from '../Components/Cards/TeamCard';


const TeamList =(props)=>{
  
  let regex = /Team/gi
          
          
  let newExample = props.argument.replace(regex, '\enterTeam').split('\enter')

  let regx = /Ukraine|Grenada|Denmark|Switzerland|Pakistan|USA|India|Canada|Colombia|Venezuela|Brazil|United States/g
  let array2 = newExample.map(element => {
  return element.toString().replace(regx,'asd').split('asd')});
  
  let array3=[];
  array2.map((e,i)=>{ array3.push({title: e[0], arr:[...e]}) })
 
 
  return (
       <div>
         {array3.map((e,i)=>{return <div style={{width: '50vw', margin:'3vw auto 1vw auto'}} ><h3>{e.title}</h3> <ul>{e.arr.map((el,ind)=>{return <li>{el}</li>})}</ul></div>})}
       </div>
      
    )
 
}

let db = firebase.firestore()
class Winners extends React.Component {
  constructor(props) {
    super(props);
    this.state=({
      winners:[]
    })
  }
  switch = (e) => {
    let but = document.getElementsByTagName('button')
    console.log(but);
    let cont = document.getElementsByTagName('section')

    for (let i = 0; i < but.length; i++) {
      if (e.target.id === but[i].id) {
        e.target.className = 'active'
        cont[i].style.display = 'block'
      }
      else {

        but[i].className = ''
        cont[i].style.display = 'none'
      }
    }

  }

  componentDidMount =()=>{
    this.getWinners();
  }

  getWinners = () => {
    db.collection('winners').get().then( (querySnapshot) => {
      querySnapshot.forEach( doc => {
        const data = doc.data()
        this.setState({
          winners: [...this.state.winners, {...data}]
        })
      });
    }) 
  }

  render() {

    const {winners} = this.state;
    return (
      <main>
        
        <h1 style={{
          font: '600 4.43vw Roboto',
          width: '44.52vw',
          textAlign: 'center',
          margin: '5% auto 0 auto'
        }}>WINNERS</h1>
        <p style={{
          width: '57.35vw',
          font: '400 1.82vw Roboto',
          margin: '5% auto 2% auto',
          textAlign: 'center'
        }}>Empty page of winners</p>

        {/*<div id='button-row'>
          <button id='1' className='' onClick={e => this.switch(e)}>
            BEST TEAMS
            </button>
          <button id='2' className='' onClick={e => this.switch(e)}>
            BEST INSTRUCTORS
            </button>
      </div> */}

        
        {winners.map(el => {
          
         
          
          return (
          
          <div><h3 style={{font:'600 2vw Roboto', width:'20vw', margin:'2vw auto 3vw auto' }}>{el.winYear}</h3><p style={{font:'400 1vw Roboto', width:'50vw', margin:'2vw auto 3vw auto' }}>{el.winText}</p><TeamList argument={el.winEarlyTrack}/> </div>)
        })}
      </main>

    )
  }
}

export default Winners;