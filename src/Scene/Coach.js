import React from 'react'
import FragmentPlayer from '../Components/FragmentPlayer'
import TextListCard from '../Components/Cards/TextListCard'
import {Accordion, Badge, Card} from 'react-bootstrap/';
import AccordeonCard from '../Components/Cards/AccordeonCard';

let week1= [
    "Module 1. The X-Culture Project: Purpose, History, Method, Vision",
    "Module 2. The X-Culture Coaching Program: Purpose, History, Method, Vision"
];
let week2 = [
    "Module 3. Known GVT Problems and Best Practices",
    "Module 4. Managing GVTs",
    "Module 5. Free-Riding in GVTs",
    "Module 6. Principles of crowdsourcing and global virtual collaboration"
];
let week3 = [
    "Module 7. The Art of Effective Feedback",
    "Module 8. Team Counseling",
    "Module 9. Managing Conflict in Project Teams",
    "Module 10: Organizing and leading webinars and discussion groups",
    "Module 11. Gamification of work design"
];

let week4 = [
    "Module 12. Online Collaboration Tools",
    "Module 13. Academic Referencing Styles",
    "Module 14. Plagiarism",
    "Module 15: The Basics of International Business",
    "Module 16: Effective presentation: public speaking and written analytic summaries"
];
let practical2=[
    "Coaching several global virtual teams participating in the X-Culture competition",
    "Providing feedback on the weekly deliverables submitted by the current X-Culture teams",
    "Organizing and leading instructional webinars",
    "Facilitating discussion and quality improvement discussion groups",
    "Development of training materials",
    "Participating in weekly experience-exchange online conferences with other Coaching Program trainees",
    "Preparing analytic executive summaries for corporate clients",
    "Serving as a judge of work of others, including being a member of the Award Committee that selects the X-Culture Competition winners"
];
let practical3 = [
    "After the global virtual teams complete the project, based on their observations and newly acquired understandings, the Coaches will write reflection reports that summarize their experiences, things they’ve learned, and advice they would give to international team members, managers, and coaches on how to improve the effectiveness of and training for global virtual teams.",
    "The authors of the most insightful reflection papers will be offered an opportunity and the necessary support of our experienced professors to further develop their work into publishable research papers. The best reports will be presented at scholarly conferences and turned into practical guides for managers of global virtual teams."
];
const Coach = () =>{
    return (
        <main>
             <h1 style={{
                    font: '600 4.43vw Roboto',
                    width: '44.52vw',
                    textAlign: 'center',
                    margin: '5% auto 0 auto'
                }}>COACH</h1>
                <p style={{
                    width: '57.35vw',
                    font: '400 1.82vw Roboto',
                    margin: '5vw auto 3vw auto',
                    textAlign: 'center'
                }}>Best X-Culture students from earlier semesters become coaches and mentors to the new generation of X-Culture students.

                The Coaches acquire skills and experiences even many seasoned managers don’t have. Skills and experiences employers want.</p>
                <section style={{display:'block'}} >
                <FragmentPlayer url='https://www.youtube.com/embed/RhxAeXXaL04' />
                <h2 style={{ font: '500 3.5vw Roboto', margin: '10vw 0 3vw 0', textAlign: 'center' }} >HOW IT WORKS</h2>
                    <h3 style={{textAlign: 'center', margin:'0 0 0 0'}} >Hard work on Real problems</h3>
                <Accordion defaultActiveKey="0" style={{ margin: '5vw auto 0 auto' }}>
                    <Accordion.Toggle as={Badge} variant="link" eventKey="0" style={{ color: 'black', cursor: 'pointer', margin: '0 0 0 0', background: 'none', border: 'none' }}>
                        <h4>Phase 1: Theoretical Training (4 weeks)</h4>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body style={{ padding: '0 0 0 5vw' }}>
                            <TextListCard ptext='Week 1: X-Culture' listItems={week1} />
                        <TextListCard ptext='Week 2: Anatomy of GVTs' listItems={week2} />
                        <TextListCard ptext='Week 3: Managing and Coaching GVTs' listItems={week3} />
                    <   TextListCard ptext='Week 4: Technologies and Knowledge for GVT-Based IB Consulting' listItems={week4} />
                        </Card.Body>
                    </Accordion.Collapse>

                </Accordion>
                <AccordeonCard menuButtonTitle='Phase 2: Practical Training (10 weeks)' listItems={practical2} />
                <AccordeonCard menuButtonTitle='Phase 3: Reflection and Research (4 weeks)' listItems={practical3} />
                 </section>
        </main>
    )
}

export default Coach;