import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import firebase from '../FireBase/Firebase.js'

let db = firebase.firestore()
let storage = firebase.storage()
class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            name: '',
            position: '',
            text:'',
            url: ''
        }
    }
  

     onSubmit= (event) =>{
        event.preventDefault();
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
    onChange =(event)=>{
        
        if(event.target.id==='Name'){
           
            this.setState({
                name:event.target.value
            })
        }
        else if(event.target.id==='Position'){
            
            this.setState({
                position: event.target.value
            })
        }
        else if(event.target.id==='Text'){
           
            this.setState({
                text: event.target.value
            })
        }
        
    }
    render() {
        
        return (
            <section style={{ display: 'block' }} >
                <input id='image' name="myFile" type="file" placeholder='Upload the photo' accept="image/x-png,image/gif,image/jpeg" />
                <button type='submit' onClick={this.upload}>UPLAOD</button>
                <Form>

                        
                    <Form.Group controlId="Name">
                    <Form.Label><h4>Enter Name</h4></Form.Label>
                    <Form.Control size="lg"  type="text" placeholder="Enter Name" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="Position">
                    <Form.Label><h4>Enter Position</h4></Form.Label>
                    <Form.Control size="lg"  type="text" placeholder="Enter Position" onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group controlId="Text">
                        <Form.Label><h4>Write about this team member...</h4></Form.Label>
                        <Form.Control  as="textarea" rows="3" onChange={this.onChange} />
                    </Form.Group>
                    <Button type="submit" onClick={this.onSubmit}>Submit</Button>
                </Form>
                

            </section>
        )
    }
}

export default AdminDashboard;