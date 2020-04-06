import React from 'react'
import SymposiumCard from '../Components/Cards/SymposiumCard'
import firebase from '../FireBase/Firebase.js'
import Skeleton from 'react-loading-skeleton';

let db = firebase.firestore()
class  Gsymp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symposium:[]
    }
  }
componentDidMount =() =>{
  this.getSymposium();
}

  getSymposium = () => {
    db.collection('Symposium').orderBy('title', 'desc').get().then( (querySnapshot) => {
      querySnapshot.forEach( doc => {
        const data = doc.data()
        this.setState({
          symposium: [...this.state.symposium, {...data}]
        })
      });
    }) 
  }

  render() {
    const {symposium} = this.state;
    
    return (
      <main>
        <h1 style={{
          font: '600 4.43vw Roboto',
          width: '44.52vw',
          textAlign: 'center',
          margin: '5% auto 0 auto'
        }}>X-CULTURE GLOBAL SYMPOSIUM</h1>
        

        {symposium.map(symposium => {
          return (<SymposiumCard id='symposiumCard' key={symposium.id } title={symposium.title ||<Skeleton count={1}/>} participants={symposium.participants ||<Skeleton count={2}/>} location={symposium.location ||<Skeleton count={2}/>} date={symposium.date ||<Skeleton count={2}/>} src ={symposium.url ||<Skeleton count={2}/>} text={symposium.text ||<Skeleton count={6}/>} link={symposium.link} />)
        })}
        

        

      </main>
    )

  }
}

export default Gsymp;