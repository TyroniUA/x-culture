import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from '../FireBase/Firebase.js'
import { Accordion, Badge, Card } from 'react-bootstrap/';
import '../styles/AdminDashboard.scss';

let db = firebase.firestore()
let storage = firebase.storage()
class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            name: '',
            position: '',
            text: '',
            title:'',
            date:'',
            url:'',
            location:'',
            participants:'',
            textSymposium:'',
            link:'',
            winYear:'',
            winText:'',
            winEarlyTrack:'',
            winLateTrack:'',
            bestInstrText:'',
            bestInstrList:''
        }
    }


    onSubmit = (event) => {
        event.preventDefault();
        if(document.getElementById('image').files[0] != null){
            let image = document.getElementById('image').files[0]
        let imageName = image.name;
        let storageRef = storage.ref('/images/' + imageName)
        let uploadTask = storageRef.put(image);
        let newurl = ''
        uploadTask.on('state_changed', (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);

        }, (error) => {
            console.log(error.message)
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                if (this.state.name != '' && this.state.position != '' && this.state.text != '') {
                    db.collection('boardMemebers').add({
                        Name: this.state.name,
                        position: this.state.position,
                        text: this.state.text,
                        url: url
                    }).then(window.alert('Team Member was successfully added'))
                } else {
                    return (window.alert('Please fulfill all gaps'))
                }

            })
        })
        }
        else{
            window.alert('Image is Empty')
        }
        

    }

    onSubmitSymposium = (event, collection, obj) => {
        event.preventDefault();
        if(document.getElementById('imageSymposium').files[0] != null){
            let image = document.getElementById('imageSymposium').files[0]
        let imageName = image.name;
        let storageRef = storage.ref('/images/' + imageName)
        let uploadTask = storageRef.put(image);
        let newurl = ''
        uploadTask.on('state_changed', (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);

        }, (error) => {
            console.log(error.message)
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                let photourl = url;
                if (this.state.title != '' && this.state.date != '' && this.state.textSymposium != '') {
                    db.collection(collection).add().then(window.alert('Symposium was added'))
                } else {
                    return (window.alert('Please fulfill all gaps'))
                }

            })
        })
        }
        else{
            window.alert('Image is Empty')
        }
        

    }

    onSubmitWinners =(event)=> {
        event.preventDefault();
    if (this.state.winYear !='') {
                    db.collection('winners').add({
                        winYear: this.state.winYear,
                        winText: this.state.winText,
                        winEarlyTrack: this.state.winEarlyTrack,
                        winLateTrack: this.state.winLateTrack,
                       
                    }).then(window.alert('Symposium was added'))
                } else {
                    return (window.alert('Please fulfill all gaps'))
                }

    }


    onChange = (event) => {
if (event.target.id === 'winEarlyTrack'){
            let obj = JSON.parse(event.target.value)
            console.log(event.target.value)
            console.log(obj.title)
        }
        this.setState({
            [event.target.id]: event.target.value
        })
        
        
    }
    
    render() {
        
        return (
            <div>
                <h1 style={{
                    font: '600 4.43vw Roboto',
                    width: '44.52vw',
                    textAlign: 'center',
                    margin: '5% auto 0 auto'
                }}>ADMIN DASHBOARD</h1>
               
                <Accordion defaultActiveKey="1" style={{ margin: '2vw auto 0 auto', }}>
                    <Accordion.Toggle as={Badge} variant="link" eventKey="0" style={{ color: 'black', cursor: 'pointer', margin: '0 auto 0 auto', background: 'none', border: 'none', display: 'block' }}>
                        <h3 className='box-name' >ADD EXECUTIVE TEAM</h3>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body style={{ padding: '0 0 0 2vw' }}>

                            <section style={{ display: 'block' }} >
                                <input id='image' name="myFile" type="file" placeholder='Upload the photo' accept="image/x-png,image/gif,image/jpeg" />

                                <Form>
                                    <Form.Group controlId="name">
                                        <Form.Label><h4>Enter Name</h4></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Enter Name" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="position">
                                        <Form.Label><h4>Enter Position</h4></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Enter Position" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="text">
                                        <Form.Label><h4>Write about this team member...</h4></Form.Label>
                                        <Form.Control as="textarea" rows="4" onChange={this.onChange} />
                                    </Form.Group>
                                    <Button type="submit" onClick={this.onSubmit}>Submit</Button>
                                </Form>


                            </section>
                        </Card.Body>
                    </Accordion.Collapse>
                </Accordion>

                <Accordion defaultActiveKey="1" style={{ margin: '2vw auto 0 auto', }}>
                    <Accordion.Toggle as={Badge} variant="link" eventKey="0" style={{ color: 'black', cursor: 'pointer', margin: '0 auto 0 auto', background: 'none', border: 'none', display: 'block' }}>
                        <h3 className='box-name'>ADD SYMPOSIUM</h3>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body style={{ padding: '0 0 0 2vw' }}>

                            <section style={{ display: 'block' }} >
                                <input id='imageSymposium' name="myFile" type="file" placeholder='Upload the photo' accept="image/x-png,image/gif,image/jpeg" />

                                <Form>
                                    <Form.Group controlId="title">
                                        <Form.Label><h4>Enter Title</h4></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Enter Title" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="date">
                                        <Form.Label><h4>Enter Date</h4></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Enter Date" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="location">
                                        <Form.Label><h4>Location</h4></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Enter Location" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="participants">
                                        <Form.Label><h4>Amount Participants</h4></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Enter Amount of Participants" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="link">
                                        <Form.Label><h4>Link to full Page</h4></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Enter Link..." onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="textSymposium">
                                        <Form.Label><h4>Write about the Symposium</h4></Form.Label>
                                        <Form.Control as="textarea" rows="3" onChange={this.onChange} />
                                    </Form.Group>
                                    <Button type="submit" onClick={e => this.onSubmitSymposium(e, 'Symposium', {
                        title: this.state.title,
                        date: this.state.date,
                        location: this.state.location,
                        participants: this.state.participants,
                        text: this.state.textSymposium,
                        url: this.state.url,
                        link: this.state.link
                    })}>Submit</Button>
                                </Form>


                            </section>
                        </Card.Body>
                    </Accordion.Collapse>

                </Accordion>
                
                <Accordion defaultActiveKey="1" style={{ margin: '2vw auto 0 auto', }}>
                    <Accordion.Toggle as={Badge} variant="link" eventKey="0" style={{ color: 'black', cursor: 'pointer', margin: '0 auto 0 auto', background: 'none', border: 'none', display: 'block' }}>
                        <h3 className='box-name'>ADD WINNERS</h3>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body style={{ padding: '0 0 0 2vw' }}>

                            <section style={{ display: 'block' }} >
                               

                                <Form>
                                    <Form.Group controlId="winYear">
                                        <Form.Label><h4>Enter Year</h4></Form.Label>
                                        <Form.Control size="lg" type="text" placeholder="Enter Year" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="winText">
                                        <Form.Label><h4>Enter Text</h4></Form.Label>
                                        <Form.Control as="textarea" rows="4" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="winEarlyTrack">
                                        <Form.Label><h4>Enter Early Track winners</h4></Form.Label>
                                        <Form.Control as="textarea" rows="4"placeholder="Enter Ealy Track Winners" onChange={this.onChange} />
                                    </Form.Group>
                                    <Form.Group controlId="winLateTrack">
                                        <Form.Label><h4>Enter Late Track winners</h4></Form.Label>
                                        <Form.Control as="textarea" rows="4" placeholder="Enter Late Track winners" onChange={this.onChange} />
                                    </Form.Group>
                                   
                                    <Button type="submit" onClick={this.onSubmitWinners}>Submit</Button>
                                </Form>


                            </section>
                        </Card.Body>
                    </Accordion.Collapse>

                </Accordion>
            
                <button className='logout-button' onClick={() => firebase.auth().signOut()}>Sign out</button>
            </div>
        )
    }
}

export default AdminDashboard;