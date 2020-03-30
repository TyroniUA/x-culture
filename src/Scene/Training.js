import React from 'react'
import FragmentPlayer from '../Components/FragmentPlayer.js';
import '../styles/Training.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import HowItWorksCard from '../Components/Cards/HowItWorksCard';
import AccordeonCard from '../Components/Cards/AccordeonCard'
import StepsCard from '../Components/Cards/StepsCard'
import $ from 'jquery'

// DATA NEDED TO DISPLAY
let shortlistInstructor = [
    'You send us the names of your students.', 'We put them on global virtual teams, each of about 6 students, each from a different country.',
    'Real businesses submit real international business challenges, and the students spend the semester working on those challenges.',
    'We collect detailed performance data (peer evals, quality of their work) and you receive weekly progress and performance review on each of your students.',
    'In the end, the students receive X-Culture Certificates, and many even get job offers from our partner companies.',
    'We bring our best students for a face-to-face meeting at the X-Culture Symposium.',
    'We also use the data for research and publishing.'
]
let longlistInstructor = [
    'X-Culture runs every semester. Each season has an “early” and a “late” track to accommodate academic calendar differences at different schools.',
    'Two months before the season start, X-Culture sends out a call for participants. Instructors interested in making X-Culture part of their IB course apply online.',
    'Within a few days after applying, instructors receive a decision on their application. X-Culture is open to all qualified instructors/students, but the enrollment is competitive and not all applications are approved.',
    'Successful applicants receive all materials several weeks prior to the start of the X-Culture project, including instructions and guidelines for students and instructors, training materials and other information.',
    'Before the project start, instructors and students are required to review X-Culture training materials and take a readiness test. The test ensures that all participants are sufficiently familiar with how X-Culture works, the task the teams will be working on, deadlines, available communication tools, and other project-related issues. Most students pass the test, but a few fail and are asked to review the training materials more carefully and retake the test.',
    'Students who successfully pass the readiness test are randomly assigned to global virtual teams (typically 7 students, all from different countries) and receive personal emails on the first day of the project with the names and contacts of their team members.',
    'Students work in global virtual teams over a 2-month period. During this time, they have to meet weekly deadlines. Three days before each deadline, each student receives a personal email with a deadline reminder and a personalized link to an online progress report form. The information is aggregated and the instructors receive detailed weekly reports on performance of each of their students. The students also receive weekly feedback, suggestions and updates on how their teams are doing compared to other teams.',
    'Although most of the coordination, communication, and performance monitoring are managed centrally by X-Culture, instructors regularly communicate with their students and provide coaching and guidance. Instructors normally devote at least a few minutes each lecture to discuss student progress, address concerns and answer questions.',
    'At the end of the project, student teams submit their international business proposals viaTurnItIn, an online platform that checks submissions for plagiarism. The students also complete an online post-project survey that include-peer evaluations.',
    'Once received, the team reports are evaluated by the instructors using standardized rubrics. Normally, each instructor evaluates the reports from the teams that had his/her students in them. Since every student is on a different team, this means that normally an instructors have to evaluate as many reports as there are students in his/her course, and that each student report is independently evaluated by seven instructors.',
    'The instructor evaluations of the team reports are then aggregated and used to select the best student teams.',
    'All students receive X-Culture Global Collaboration Experience Certificates and the members of the best teams receive Best Team awards ($1,000 per team, contingent upon funding availability).',
    'During the project, instructors receive rich multi-source longitudinal data on performance of their students, including performance on the pre-project readiness test, ability to meet weekly deadlines, brief weekly and detailed post-project peer evaluations, and multi-dimensional evaluation of the quality of the team reports. Instructors are free to use this information as they see fit for determining their students’ course grades/marks.',
    'At the end of each X-Culture season, instructors and students are invited to the X-Culture Symposium (e.g., the most recent X-Culture Symposium hosted by Mercedes-Benz). Subject to funding availability, members of the best student teams may receive travel stipends to attend the meeting.',
    'The data collected by X-Culture are used to study global virtual teams, international collaboration, experiential learning, and related issues. Instructors have the opportunity to get involved as research collaborators and co-authors of the resulting scholarly publications.'
]
let shortlistStudent = [
    'Once you enroll in the X-Culture Training, you will receive all X-Culture training materials and program instructions.',
    'You will be required to review the materials and complete the X-Culture Readiness test. Only students who successfully pass the Readiness Test will be allowed to participate in the project.',
    'After you pass the Readiness Test, you will be placed on a global virtual team. Typically, the teams are comprised of 6-8 trainees, each coming from a different country.',
    'The teams will be presented with an international business challenge and have about two months to develop a solution.',
    'There will be weekly deadlines that the teams have to meet. Each team member will receive a personal email with a link to the weekly progress update survey and will have to report if the team has completed that week’s task.',
    'At the end of the project, the teams will present their challenge solutions in a form of team reports. The reports will be evaluated by 6-7 independent experts.',
    'Based on the expert evaluations, best teams will be awarded the X-Culture Best Team Awards.',
    'Additionally, individual performance records and peer evaluations will be used to select each season’s Best Student Award recipients.'
]
let instructorText = [{
    title: 'ENHANCE STUDENT LEARNING', text: 'X-Culture improves cultural intelligence, international and ' +
        'virtual collaboration competencies, problem solving skills, and interest in cross-cultural interactions.'
},
{
    title: 'IMPROVE TEACHING EVALUATIONS', text: 'Students recognize the value of X-Culture. We see a significant improvement' +
        ' in teaching evaluations on every dimension in treatment (X-Culture) vs. control (no X-Culture) condition.'
},
{ title: 'RESEARCH & PUBLISH', text: 'X-Culture provides high-quality multi-source multi-level longitudinal data. Our database contains over 1,300 individual-level, 500 team-level, 200 instructor-level and 100 country-level variables. X-Culture data are multi-source, multi-level and longitudinal in nature:' },
{
    title: 'EXPAND YOUR NETWORK', text: 'Hundreds of established and rising-star International Business scholars and educators,' +
        'as well as business professionals on the X-Culture team.'
}]
let studentText = [{
    title: 'EXERCISE, NOT TEST', text: 'X-Culture is designed to be an exercise, not a test.' +
        'Our primary concern is your participation and effort.  If you are  involved - your grade is higher,' +
        'despite the final result of the group. But if you know all the answers and don’t actively participate  - don’t count on a good grade.'
},
{
    title: 'X-CULTURE SYMPOSIUM', text: 'At the end of each X-Culture season, we invite best students to attend an ' +
        'X-Culture Symposium. Best Student Award recipients are eligible for the X-Culture Travel Stipends. Learn more...'
},
{
    title: 'GLOBAL COLLABORATION CERTIFICATE', text: 'All X-Culture participants who successfully complete the project receive Global ' +
        'Collaboration Experience Certificates.When the workplace goes global, a certificate of experience in global collaboration can make a difference.'
},
{
    title: 'EXPAND YOUR NETWORK', text: 'Hundreds of established and rising-star International Business scholars and educators,' +
        'as well as business professionals on the X-Culture team.'
}]
let affiliatedStudent = 'Most X-Culture trainees are students who take a course at their university where X-Culture is a required or optional part of the course. These trainees do not need to submit individual X-Culture applications and pay the participation fee – the application and the participation fee will be covered by their course instructor.'

let unAffiliatedProfessional = 'A sizable portion of X-Culture trainees are professionals. Trainees of this type are usually employed professionals. However, some are students at universities that do not offer X-Culture training. Unaffiliated professionals need to submit their individual applications directly to X-Culture.'


//CARD OF STUDENTS
const StudentCard = (props) => {
    return (
        <div
            style={{
                width: ' 28.62vw',
                height: '16.73',
                border: '1px solid black',
                borderRadius: '10px',
                margin: props.margin
            }}>
            <h2 style={{ font: '600 1.56vw  Roboto', textAlign: 'center', margin: '2vw 0 2vw 0' }}>{props.h2}</h2>
            <p style={{ font: '400 1.042vw Roboto', textAlign: 'justify', padding: '0 30px 0 30px' }} >{props.p}</p>
        </div>
    )
}


class Training extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            studButstat: 'active',
            instButstat: 'nonactive',
            backgroundSt: '#0B6E4F',
            colorSt: 'white',
            borderSt: 'none',
            backgroundInst: 'white',
            colorInst: 'black',
            borderInst: '1px solid black',
            display: 'flex',
            displayText: studentText,
            h2width: [{ one: '11.83vw', two: '14.07vw', three: '31.85vw', four: '15.5vw' }],
            shortInstrcution: shortlistStudent,
            longInstruction: [],
            button:'No More Details for Students',
            url: 'https://www.youtube.com/embed/X6E_eK0FFkQ'

        }
        this.colorSwitcher = this.colorSwitcher.bind(this);
    }


    colorSwitcher = (event) => {

        if (event.target.id === 'instructor') {
            this.setState({
                studButstat: 'nonactive',
                instButstat: 'active',
                backgroundSt: 'white',
                colorSt: 'black',
                borderSt: '1px solid black',
                backgroundInst: '#0B6E4F',
                colorInst: 'white',
                borderInst: 'none',
            })
        }
        else {
            this.setState({
                studButstat: 'active',
                instButstat: 'nonactive',
                backgroundSt: '#0B6E4F',
                colorSt: 'white',
                borderSt: 'none',
                backgroundInst: 'white',
                colorInst: 'black',
                borderInst: '1px solid black'
            })
        }
        
    }
    switcherInst = (event) => {
        this.setState({
            studButstat: 'nonactive',
            instButstat: 'active',
           
            idswitcher: 'number-two-instructor',
            h2width: [{ one: '31.85vw', two: '22.52vw', three: '16vw', four: '16vw' }],
            displayText: instructorText,
            shortInstrcution: shortlistInstructor,
            longInstruction: longlistInstructor,
            button: 'Show More Details',
            url:'https://www.youtube.com/embed/mOx2JtRTGgU'
        })
        this.fadingSwitcher('instructor')
        
        this.colorSwitcher(event)
    }
    switcherStud = (event) => {
        this.setState({
            studButstat: 'active',
            instButstat: 'nonactive',
            idswitcher: 'number-two',
            display:'flex',
            h2width: [{ one: '11.83vw', two: '14.07vw', three: '31.85vw', four: '16vw' }],
            displayText: studentText,
            shortInstrcution: shortlistStudent,
            longInstruction: [],
            button:'No More Details for Students',
            url:'https://www.youtube.com/embed/X6E_eK0FFkQ'
        })
         this.fadingSwitcher('student')
        
        this.colorSwitcher(event)
    }
    
    fadingSwitcher = (id)=>{
        if (id==='student'){
            
            $('studentCard').css('display', 'block')
            $('#studentCard').fadeIn(500)
        }
        else{
            $('studentCard').css(')display', 'none')
            
            $('#studentCard').fadeOut(300)
           
        }
    }

    render() {
        
        return (
            <main>
                <h1 style={{ font: '600 4.43vw Roboto', width: '44.52vw',textAlign: 'center', margin: '5% auto 0 auto'}}>TRAINING & COMPETITION</h1>
                <p style={{ width: '57.35vw', font: '400 1.82vw Roboto', margin: '5% auto 2% auto', textAlign: 'center' }}>Every semester, thousands participants  from over 90 countries join the X-Culture competition. They compete, collaborate, learn the challenges and best practices of international business consulting.</p>

                <div className='center sticky'>
                    <button style={{ background: this.state.backgroundSt, border: this.state.borderSt, outline:'none', color: this.state.colorSt, margin: '0 1.30vw 0 0' }} className='switcherButton' id='student' onClick={this.switcherStud}>STUDENT</button>
                    <button style={{ background: this.state.backgroundInst, border: this.state.borderInst, outline:'none', color: this.state.colorInst, margin: '0 0 0 1.30vw' }} id='instructor'className='switcherButton' onClick={this.switcherInst}> INSTRUCTOR </button>
                </div>
                <FragmentPlayer width='1130px' height='636px' title='Training video' url={this.state.url} />

                
                <div id='studentCard' className='center' >
                    <StudentCard margin='0 5.39vw 0 0' h2='Affiliated Students' p={affiliatedStudent} />
                    <StudentCard margin='0 0 0 5.39vw' h2='Unaffiliated Professionals'p={unAffiliatedProfessional} />
                </div>
            

                <section className='centerList'>

                    <StepsCard number='01' id='number-one' numberbckg='#00A9E7' h2width={this.state.h2width[0].one} h2={this.state.displayText[0].title} p={this.state.displayText[0].text} />
                    <StepsCard number='02' id='number-two' numberbckg='#B9D67B' h2width={this.state.h2width[0].two} h2={this.state.displayText[1].title} p={this.state.displayText[1].text} />
                    <StepsCard number='03' id='number-three' numberbckg='#EC1B31' h2width={this.state.h2width[0].three} h2={this.state.displayText[2].title} p={this.state.displayText[2].text} />
                    <StepsCard number='04' id='number-four' numberbckg='#F4E634' h2width={this.state.h2width[0].four} h2={this.state.displayText[3].title} p={this.state.displayText[3].text} />


                    <h2 style={{ font: '500 3.5vw Roboto', margin: '10vw 0 3vw 0', textAlign: 'center' }} >HOW IT WORKS</h2>

                    <h3 className='center-text' style={{ width: '50vw' }} >DETAILED STEPS OF WHAT YOU WILL DO AS A STUDENT OR
                        AS AN INSTRUCTOR</h3>
                    <HowItWorksCard id='HIW-1' h4='In Short' listItems={this.state.shortInstrcution} />
                    <AccordeonCard menuButtonTitle={this.state.button} listItems={this.state.longInstruction} />
                    <button onClick="location.href='https://uncg.qualtrics.com/jfe/form/SV_a4CxtDdoWK5DvaQ';" style={{ background: 'orange', display:'block', border: 'none', outline:'none', borderRadius:'0.5vw', width: 'auto',
                        height: 'auto', margin: '5vw auto 0 auto' }}><h3 style={{color: 'black', font: '600 2.08vw Roboto', margin: '0', padding: '0.9vw'}}>INSTRUCTOR<br/> APPLY HERE</h3> </button>

                </section>

            </main>
        )

    }
}

export default Training;
