import React from 'react'
import TextListCard from '../Components/Cards/TextListCard'

let mainIdea1 = 'It takes about a 100 hours to develop a good publishable research paper. The problem is that we never can find those 100 hours.'
let mainIdea2 = ' At a research hackathon, we lock ourselves in a conference room at a quiet university campus, phones off, laptops on, and do nothing but research for several days.'
let mainIdeaList = [
    "A very clearly defined paper idea",
    "A polished study design",
    "Initial set of results",
    "Initial draft of the paper",
    "Most importantly, new friends/co-authors – after a few days of sharing meals, research ideas, and fun, you’ll feel like you’ve known these people forever."
];
let empty = []
let hackatonSteps = [
    "X-Culture collects tons of data.",
    "Researchers interested in international HR/OB come to the research xackathon and",
    "Intensively brainstorm ideas for papers based on the data,",
    "Get feedback on the ideas,",
    "Select the most promising ones,",
    "Present and critique them,",
    "Debate research designs and share suggestions,",
    "Form co-author teams,",
    "Run preliminary tests,",
    "Present preliminary results and get more feedback and suggestions,",
    "Finalize the story to be told in the paper,",
    "Put together a detailed paper outline or even the first very rough draft.",
    "All while devoting enough time for socializing and forming strong personal and professional connections,",
    "Go home with a paper idea, a co-author(s), initial results, and main points already typed up.",
    "Then spend the next few months finishing up the paper in time for the AIB or AOM conference, and then to a journal shortly after."
];
let preWebinar = [
    "Meet-and-greet",
    "Review of available data",
    "Review of papers already in development",
    "Initial brainstorming of possible paper ideas"
];
let day1 = [
    "Arrival, Welcome Dinner",
    "Review of paper ideas proposed earlier",
    "More brainstorming of paper ideas",
    "Anyone interested in working together as co-authors?",
    "Homework: Decide which paper(s) you’re gong to work on"
];
let day2S1 = [
    "Promising idea?",
    "Where could it be published?",
    "If I were a reviewer, I’d like/not like/expect to see in this paper",
    "Ideas for improvement?",
    "Working alone or forming co-author teams?",
    "AUDIENCE: Feedback, suggestions"
];
let day2s2 = [
    "What are the most promising paper ideas from those discussed earlier?",
    "Hypotheses?",
    "Model specification? Predictors? Outcomes? Moderators? Mediators?",
    "Best data analysis tools?",
    "Expected findings?",
    "Best way to present the results?",
    "AUDIENCE: Feedback, suggestions"
];
let day2s3 = [
    "Working individually and with IT to extract the necessary data for the study",
    "Finalizing the list of variables",
    "Checking and cleaning data."
];
let day3s1 = [
    "Work alone or in co-author teams",
    "Initial simple tests (correlations, mean differences, regressions, etc.)",
    "Clarifying issues with the data if needed",
    "If technical questions arise, get help from more skilled statisticians",
    "If multi-author team, while one starts running the test, others may start working on paper outline, search for literature"
];
let day3s2 = [
    "Hypotheses and tests",
    "Available data",
    "Preliminary results",
    "Challenges encountered, solutions considered",
    "AUDIENCE: Feedback, suggestions"
];
let day3s3 = [
    "More sophisticated tests (regressions, etc.)",
    "Clarifying issues with the data if needed",
    "If technical questions arise, get help from more skilled statisticians",
    "If multi-author team, while one starts running the test, others may start working on paper outline, search for literature"
];
let day4s1 = [
    "Present refined results",
    "Challenges encountered? Possible solutions?",
    "AUDIENCE: Feedback, suggestions"
];
let day4s2 = [
    "Work alone or in co-author teams",
    "Continue with the data analysis",
    "“Put on paper” the preliminary results",
    "Develop paper outline",
    "If multi-author team, while one running tests, others may be polishing the paper outline, adding content to the paper"
];
let day4s3 = [
    "Work alone or in co-author teams",
    "Continue with the data analysis",
    "“Put on paper” the preliminary results",
    "Develop paper outline",
    "If multi-author team, while one running tests, others may be polishing the paper outline, adding content to the paper"
];
let day4s4 = [
    "Present refined results",
    "Challenges encountered? Possible solutions?",
    "AUDIENCE: Feedback, suggestions"
];
let galaDinner = [
    "Final quick presentations of the work done",
    "Most Promising Paper Award"
];
let day58 = [
    "Relocate to the “main” conference (the X-Culture research hackathons are organized right before the major conferences, such as AIB or AOM)",
    "While doing the usual “conference stuff” continue working on the research paper started at the hackathon",
    "Those who work in co-author teams tend to have daily meetings between conference presentations and continue working on the paper"
];
const Hackaton = () => {
    return (
        <div>
            <h1 style={{
                font: '600 4.43vw Roboto',
                width: '44.52vw',
                textAlign: 'center',
                margin: '5% auto 0 auto'
            }}>HACKATON</h1>

            <section style={{ display: 'block' }} >
                <p style={{ width: '55vw', font: '400 1.82vw Roboto', margin: '5% auto 2% auto', textAlign: 'justify' }}>{mainIdea1}</p>
                <p style={{ width: '55vw', font: '400 1.82vw Roboto', margin: '5% auto 2% auto', textAlign: 'justify' }}>{mainIdea2}</p>

                <button className='applybutton'><a href='https://x-culture.org/xackathon-2020-vancouver/' target='_blank'><h3 className='applytext'>APPLY FOR HACKATON</h3></a> </button>

                <h2 style={{ font: '600 1.5vw Roboto', margin: '5vw auto 0 auto' }} >Main Idea</h2>
                <TextListCard ptext='Start with brainstorming paper ideas, then on to research design, simple data analysis, results, draft. Every few hours present what you have, get feedback from peers, go work some more, present, get feedback, repeat. Same time commitment and cost as a conference, but you go home with:' listItems={mainIdeaList} />

                

                <h2 style={{ font: '600 1.5vw Roboto', margin: '5vw auto 0 auto' }} >The Research Xackathon, Step-By-Step</h2>
                <TextListCard listItems={hackatonSteps} margin='0.6vw 0 0 0' />

                <h2 style={{ font: '600 1.5vw Roboto', margin: '5vw auto 0 auto' }} >Typical Program</h2>
                <TextListCard ptext='Pre-xackathon webinar' margin='0.6vw 0 0 0' listItems={preWebinar} />
                <TextListCard ptext='Day 1' margin='0.6vw 0 0 0' listItems={day1} />
                <TextListCard ptext='Day 2' font='600 1.5vw Roboto' margin='0.6vw 0 0 0' listItems={empty} children={<>
                    <TextListCard ptext='Session 1: Presentation of paper ideas, discussion:' listItems={day2S1} />
                    <TextListCard ptext='Session 2: Study design, criticism, defense:' listItems={day2s2} />
                    <TextListCard ptext='Session 3 (all afternoon): Data preparation:' listItems={day2s3} />
                </>
                } />
                <TextListCard ptext='Day 3' font='600 1.5vw Roboto' margin='0.6vw 0 0 0' listItems={empty} children={<>
                    <TextListCard ptext='Session 1 (all morning): Initial data analysis and tests:' listItems={day3s1} />
                    <TextListCard ptext='Session 2: Presentations of the initial results:' listItems={day3s2} />
                    <TextListCard ptext='Session 3: Continue data analysis and tests:' listItems={day3s3} />
                </>
                } />
                <TextListCard ptext='Day 4' font='600 1.5vw Roboto' margin='0.6vw 0 0 0' listItems={empty} children={<>
                    <TextListCard ptext='Session 1: Presentation of the refined results, feedback:' listItems={day4s1} />
                    <TextListCard ptext='Session 2: Further data analysis and putting it all on paper:' listItems={day4s2} />
                    <TextListCard ptext='Session 3: Further data analysis and putting it all on paper:' listItems={day4s3} />
                    <TextListCard ptext='Session 4: Presentation of the refined results, feedback:' listItems={day4s4} />
                    <TextListCard ptext='Gala Dinner and Closing Ceremony' listItems={galaDinner} />
                </>
                } />
                <TextListCard ptext='Day 5-8' font='600 1.5vw Roboto' listItems={day58} />

                <h2 style={{ margin: '3vw auto 2vw auto' }} >ATTENDEES</h2>
                
                <p>Our experience shows that the optimal group size is 10-12 people. It is large enough to have a diversity of skills and ideas and form 3-5 co-author teams, yet small enough to be managed as one group. All the people can still gather up around one table. Everyone can meet everyone and talk to everyone.</p>
                <p>The research hackathons are of the greatest value to researchers interested in publishing, who already have the necessary research skills, but have not worked out routines that make them highly productive publishing machines.

                These could be mid-career already experienced but still very research active academics, junior faculty and talented Ph.D. students.

                We will try to invite editors of relevant journals.</p>
            </section>
        </div>

    )
}

export default Hackaton;