import React from 'react'
import '../styles/Business.scss'

import firebase from '../FireBase/Firebase.js'
import TeamCard from '../Components/Cards/TeamCard';
import AccordeonTemplate from '../Components/Cards/AccordeonTemplate'


const TeamList = (props) => {

  // BELOW IS THE FUNCTION THAT HELPS TRANSFORM ORIGINAL TEXT (from an array)
  // TO THE STRINGIFIED ARRAY OF OBJECTS
  /*
  let list =[ **insert array here** ]
  let object=[]
  
  let counter = 0;
  list.map(element => {
  
  if (element.includes('Team')){
    object.push({"title": element})
    counter+=1
  } else {
  if (object[counter-1].members === undefined){
    object[counter-1].members = []
    object[counter-1].members.push(element)
  }
  else{
     object[counter-1].members.push(element)
  }
  }
  })
  
  let temp = JSON.stringify(object);
  console.log(temp) */


  return (
    <div>
      {props.teams.map((element, index) => {
        return <div style={{ width: '50vw', margin: '3vw auto 1vw auto' }} >
          <h3 key={index}> {element.title} </h3>
          <ul>{element.members.map((el, index) => {
            return <li key={index} > {el} </li>
          })}
          </ul>
        </div>
      })}
    </div>

  )

}

let db = firebase.firestore()
class Winners extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      winners: []
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

  componentDidMount = () => {
    this.getWinners();
  }

  getWinners = () => {
    db.collection('winners').get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        const data = doc.data()
        this.setState({
          winners: [...this.state.winners, { ...data }]
        })
      });
    })
  }

  render() {



    const { winners } = this.state;
    if (winners != []) {
      console.log(winners)
    }

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
        }}>Winners are not the people, who never fail. But who never quit.</p>

        {/*<div id='button-row'>
          <button id='1' className='' onClick={e => this.switch(e)}>
            BEST TEAMS
            </button>
          <button id='2' className='' onClick={e => this.switch(e)}>
            BEST INSTRUCTORS
            </button>
      </div> */}


        {winners.map(el => {


          let earlyTrackArayOfObjects = JSON.parse(el.winEarlyTrack);
          let lateTrackArrayOfObejcts = JSON.parse(el.winLateTrack)
          // console.log(object)


          return (<div style={{ width: '50vw', display: 'block', margin: '0 auto 0 auto' }}>
            <AccordeonTemplate title={el.winYear} defaultActiveKey={'1'} >
            
              
              <p style={{ font: '400 1.2vw Roboto', width: '50vw', margin: '2vw auto 3vw auto' }}>{el.winText}</p>

              <h3 style={{ font: '600 1.6vw Roboto', width: '20vw', margin: '2vw auto 3vw 0' }}>Early Track</h3>
              <TeamList teams={earlyTrackArayOfObjects} />

              <h3 style={{ font: '600 1.6vw Roboto', width: '20vw', margin: '2vw auto 3vw 0' }}>Late Track</h3>
              <TeamList teams={lateTrackArrayOfObejcts} />
            
            </AccordeonTemplate>
            </div>)
        })}
      </main>

    )
  }
}

export default Winners;