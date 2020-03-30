import React from 'react'
import '../styles/Business.scss'
import TeamCard from '../Components/Cards/TeamCard'
import firebase from '../FireBase/Firebase.js'

let db = firebase.firestore()
class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [],
      specialMembers:[],
      boardMembers:[]
    }
  }
componentDidMount =() =>{
  this.getTeammembers();
  this.getSpecialMembers();
  this.getBoardMembers()
}
  getTeammembers = () => {
    db.collection('teamMember').get().then( (querySnapshot) => {
      querySnapshot.forEach( doc => {
        const data = doc.data()
        this.setState({
          teamMembers: [...this.state.teamMembers, {...data}]
        })
      });
    }) 
  }
  getSpecialMembers = () => {
    db.collection('specialProjects').get().then( (querySnapshot) => {
      querySnapshot.forEach( doc => {
        const data = doc.data()
        this.setState({
          specialMembers: [...this.state.specialMembers, {...data}]
        })
      });
    }) 
  }
  getBoardMembers = () => {
    db.collection('boardMemebers').get().then( (querySnapshot) => {
      querySnapshot.forEach( doc => {
        const data = doc.data()
        this.setState({
          boardMembers: [...this.state.boardMembers, {...data}]
        })
      });
    }) 
  }
  render() {
    const {teamMembers} = this.state;
    const {specialMembers} = this.state;
    const {boardMembers} = this.state;
    return (
      <main>
        <h1 style={{
          font: '600 4.43vw Roboto',
          width: '44.52vw',
          textAlign: 'center',
          margin: '5% auto 0 auto'
        }}>EXECUTIVE TEAM</h1>
        <p style={{
          width: '57.35vw',
          font: '400 1.82vw Roboto',
          margin: '5% auto 2% auto',
          textAlign: 'center'
        }}>Admin office</p>

        {teamMembers.map(member => {
          return (<TeamCard name={member.name} position={member.position} src ={member.url} text={member.text} />)
        })}
        <p style={{
          width: '57.35vw',
          font: '400 1.82vw Roboto',
          margin: '5% auto 2% auto',
          textAlign: 'center'
        }}>Special Projects</p>
        {specialMembers.map(member => {
          return (<TeamCard name={member.name} position={member.position} src ={member.url} text={member.text} />)
        })}

        <p style={{
          width: '57.35vw',
          font: '400 1.82vw Roboto',
          margin: '5% auto 2% auto',
          textAlign: 'center'
        }}>XCAB: X-Culture Advisory Board 2019-2020</p>

        {boardMembers.map(member => {
          return (<TeamCard name={member.name} position={member.position} src ={member.url} text={member.text} />)
        })}

      </main>
    )

  }
}

export default Team;