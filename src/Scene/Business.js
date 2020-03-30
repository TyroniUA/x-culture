import React from 'react'
import '../styles/Business.scss'
import FragmentPlayer from '../Components/FragmentPlayer'
import CreatingListCard from '../Components/Cards/CreatingListCard'
import StepsCard from '../Components/Cards/StepsCard'
import AccordeonCard from '../Components/Cards/AccordeonCard'
import TextListCard from '../Components/Cards/TextListCard'

let businessText = [{title: 'RECEIVE CREATIVE IDEAS', text: 'Thousands of MBA and business students from around the world will offer you their solutions. Tomorrow, they’ll graduate and command hefty salaries. Today, they’ll work for you as part of their coursework'},
{title: 'ENTER NEW MARKETS', text: 'X-Culture participants come from 90+ countries. They will find the most promising markets for your product, develop your market entry strategy, and help you find local partners and retailers'},
{title: 'PROMOTE YOUR PRODUCTS', text: 'Promote your products among hundreds and thousands of those who could be your clients or partners tomorrow.' },
{title: 'RECRUIT TALENT', text: 'You need the best? We identify the best, based on objective performance data no job interview or resume can ever provide.'}, 
{title: 'TRAIN EMPLOYEES', text: 'We can help with training in international teamwork, virtual collaboration tools, and dealing with cultural and time-zone differences.'}]
let h2width= [{ one: '18vw', two: '14.07vw', three: '20vw', four: '10vw' }];

let consultance = 'Experts wrote the Encyclopedia Britannica, and it ruled for 250 years. Then amateurs wrote Wikipedia. On Who Want’s to be Millionaire, “Call the expert” helpline results in 57% accuracy. “Ask the audience” gives 94% accuracy. There will be always a need for experts. However, on some tasks crowds consistently outperform experts.'
let crowd= [
    "Crowd-creation. A large diverse crowd beats an expert at generating ideas. The crowd has access to more pools of knowledge, more networks, more sources of inspirations. Crowds have more ideas and leads to work with.",
    "Crowd-labor. Who are your global competitors? How do they run their businesses? .Sure an expert can google thousands of sites in dozens of languages and get you the answers. But a crowd will get you better answers faster.",
    "Crowd-prediction. What’s the best price for a given market? What the best design? Ask a crowd and their average prediction will be more accurate than the prediction made by an expert.",
    "Crowd-outreach. Need to find local distributors? Test demand in dozens of new markets? Using a crowd to solve your problem is like sending thousands of ants to search for food. If there is something good out there, they will find it."
];
let level1= [
    "You contact us to talk about your business. We tell you about X-Culture.",
    "If we can help, you become an X-Culture partner.",
    "Thousands of students around the world work on solving your challenge.",
    "The students also reach out to local distributors and try to get you contracts in their markets.",
    "We organize two, one-hour live webinars.",
    "First, you tell more about your business and answer students’ questions.",
    "Later, students present their preliminary results to you and you provide feedback.",
    "We send you the reports and contract leads identified by the students."
];
let level2= [
    "The teams that authored the best ideas collaborate with business professors and experienced consultants.",
    "They further develop the ideas and prepare a professional report, strategy, product design, or other requested deliverable."
];
let level3= [
    "We further strengthen the team with subject experts.",
    "They implement the solution and help you take your company to the next level."
];
let sampleChallenge = [
    "Mercedes-Benz: How do we design a truck for developing countries?",
    "Home Depot: How do we improve our .com services?",
    "Louis Vuitton: Where should we open our next store and what store design would be most appealing to the customers there?",
    "Caffè Vergnano: How to build a global coffee house network?",
    "Polaris Industries: How to grow the sales of snowmobiles in Asia?",
    "Hard Rock International: How do we make our restaurants, hotels and casinos more appealing to young people?"
];
let pricing1= [
    "Thousands (not dozens or hundreds) bright young professionals",
    "A highly diverse crowd to ensure a greater variety of ideas",
    "A geographically dispersed crowd to ensure access to local knowledge anywhere on the planet"
];
let pricing2= [
    "Large company: $20,000",
    "Medium company: $10,000",
    "Medium company: $5,000",
    "Startup: $1,000"
];

const Business =()=>{
  return (
            <main>
              <h1 style={{
                    font: '600 4.43vw Roboto',
                    width: '44.52vw',
                    textAlign: 'center',
                    margin: '5% auto 0 auto'
                }}>BUSINESS SOLUTIONS</h1>
                <p style={{
                    width: '57.35vw',
                    font: '400 1.82vw Roboto',
                    margin: '5% auto 2% auto',
                    textAlign: 'center'
                }}>5,000 MBA & business students, 150 universities
                , 90 countries
                6 continents working on your business challenge.</p>
                
                <FragmentPlayer url='https://www.youtube.com/embed/JYlPklAWB6c'/>
                <section className='centerList'>
                <StepsCard number='01' id='number-one' numberbckg='#00A9E7' h2width={h2width[0].one} h2={businessText[0].title} p={businessText[0].text} />
                <StepsCard number='02' id='number-two' numberbckg='#B9D67B' h2width={h2width[0].two} h2={businessText[1].title} p={businessText[1].text} />
                <StepsCard number='03' id='number-three' numberbckg='#EC1B31' h2width={h2width[0].three} h2={businessText[2].title} p={businessText[2].text} />
                <StepsCard number='04' id='number-four' numberbckg='#F4E634' h2width={h2width[0].four} h2={businessText[3].title} p={businessText[3].text} />
                <StepsCard number='05' id='number-five' numberbckg='#831BEC' h2width={h2width[0].four} h2={businessText[3].title} p={businessText[3].text} />
                </section>
                
                <button onClick="location.href='https://uncg.qualtrics.com/jfe/form/SV_a4CxtDdoWK5DvaQ';" style={{ background: 'orange', display:'block', margin:'5VW auto 0 auto', border: 'none', outline:'none', borderRadius:'0.5vw', width: 'auto',
                        height: 'auto', color: 'black' }}><h3 style={{color: 'black', font: '600 2.08vw Roboto', margin: '0', padding: '0.9vw'}}>APPLY AS BUSINESS</h3> </button>
                <section style={{display: 'block'}}>
                    <h3 className='centertext'> Professional Consultants Or Crowd-Sourcing?</h3>
                    <h4 className='centertext margintext'>Crowds eat experts for breakfast</h4>
                    <p >{consultance}</p>
                    <TextListCard ptext='There will be always a need for experts. However, on some tasks crowds consistently outperform experts.' listItems={crowd}/>

                    <h2 style={{ font: '500 3.5vw Roboto', margin: '10vw 0 3vw 0', textAlign: 'center' }} >HOW IT WORKS</h2>
                    <h3 className='centertext'  >A small step for you. A giant leap for your business.</h3>
                    <AccordeonCard menuButtonTitle='Level 1' listItems={level1} />
                    <AccordeonCard menuButtonTitle='Level 2' listItems={level2} />
                    <AccordeonCard menuButtonTitle='Level 3' listItems={level3} />
                    <CreatingListCard h4='Previous Challenges' listItems={sampleChallenge} />
                    <h4 style={{margin: '3vw 0 2vw 0'}} >Other Partners</h4>
                    <p>Sykes (USA, call centers), Innospark (Lithuania, educational toys), Me Late Chocolate (Colombia, chocolate), JCB (UK, tractors, excavators), Forcier (USA, research in war zones), Trasluz (Spain, children’s clothing), Sacona (India, 5D gaming stations and flight simulators); Daffodils Gaming (Ghana, board games), Gramedia (Indonesia, newspapers and TV), Odyseed (Belgium, indoor greenhouses), Pontafola d’Oro (Italy, shoes), UniCheck (Ukraine, plagiarism detection software), Plastic Revolutions (USA, recycling plants)</p>
                    <h2 style={{ font: '500 3.5vw Roboto', margin: '10vw 0 3vw 0', textAlign: 'center' }} >SUGGESTED PRICING</h2>
                    <p>Hiring a class of business students to work on your project is not cheap.
                        Most business schools charge $5,000 to $30,000 for a class of MBA students of up to 100 people.
                        It makes sense: once these people get their BS and MBA degrees, they will cost a lot more to hire.</p>
                    <TextListCard ptext='X-Culture offers a number of advantages over a regular class of students:' listItems={pricing1}/>
                    <TextListCard ptext='Suggested pricing for one semester of Level 1 partnership:' listItems={pricing2}/>
                    <p>The partnership fee can be reduced for companies from developing countries or companies with a particularly interesting challenge.
                        Level 2 and Level 3 partnership fee set individually depending on the complexity of the case.</p>
                </section>
            
            </main>
             )
        
    
}

export default Business;