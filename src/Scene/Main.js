import React from 'react';
import '../styles/Main.scss';
import FragmentPlayer from '../Components/FragmentPlayer.js';
import logo from '../Images/logo.png';
import imgbusiness from '../Images/imgbusiness.png';
import imgtraining from '../Images/imgtraining.png';
import imgresearch from '../Images/imgresearch.png';

const Sector = props => {
    return (
        <section id={props.id}
            style={{
                display: 'block',
                width: '100vw',
                height: props.height,
                color: props.color,
                marginTop: props.marginTop,
                background: props.background
            }}>
                <span className='sectionContainer'>
                    {props.children}
                </span>
                
        </section>
    )
}

const TextChildren = props =>{
    return (
        <div className='textContainer' style={{margin:props.marginblock}} >
                    <h1 style={{
                margin: '0',
                font: '600 4.43vw  Roboto',
                width: props.width,
                height:'auto',
                paddingTop: '3vw',
                textAlign: 'left'
            }}>{props.h1}</h1>

                <p dangerouslySetInnerHTML={{ __html: props.p }}
                style={{
                    font: '400 1.82vw Roboto',
                    textAlign: 'justify',
                    width: '40.35vw',
                    marginTop:'2vw'
                }}></p>
                </div>
                
    )
}
const ImageChildren = props =>{
    return (
            <div className='imgContainer' style={{width:props.width, margin: props.margin}}>
                    <img src={props.src} className='mainPageImage' width={props.widthImg} height='auto' style={{display: 'block', margin: props.marginImg}} ></img>
                <a href={props.link} 
                style={{textDecoration: 'none', 
                color:'inherit', 
                display: 'block', 
                margin: '2vw auto 1vw auto'
                  }} >
                    <p style={{font: '400 1.82vw Roboto',textAlign: props.textAlign }} >Learn More...
                    </p>
                </a>
            </div>
    )
}

const Main = () => {

    return (
        <main>
            <section id='banner'>
                <div className='mct1'>
                    <div className='mct2'>
                        <img src={logo}></img>
                        <h1>CULTURE</h1>
                        <p>We unite business and education. And much more...</p>
                    </div>
                </div>
                <FragmentPlayer url="https://www.youtube.com/embed/DfNUz2qlQkY" />
            </section>

            <Sector id='training' display='block'
                height='36.49vw'
                color='white'
                marginTop='7.82vw'
                background='#002366'>    
                <ImageChildren src={imgtraining} widthImg='60%' marginImg='4.95vw 0 0 auto' textAlign='end' link='/training' />
                <TextChildren width='45.56vw' h1='TRAINING & COMPETITION' p="Every semester, thousands participants  from over 90 countries join the X-Culture competition.
               <br/><br/>They compete, collaborate, learn the challenges and best practices of international business consulting." />
            </Sector>
            <Sector id='business' display='block'
                height='40.14vw'
                color='black'
                marginTop='0'
                background='#FA9F42'
               >
                <TextChildren marginblock='0 0 0 11vw' width='42.25vw' h1='BUSINESS SOLUTIONS' p='Companies present their business challenges. Thousands of amateurs and professionals develop their solutions.
               <br/><br/>If there is something good for your business out there, they will find it and bring it to you.' />
               <ImageChildren src={imgbusiness} widthImg='80%' link='/business' marginImg='4.95vw 7vw 0 0' textAlign='start' />
               </Sector>
             <Sector id='research' display='block'
                height='36.49vw'
                color='white'
                marginTop='0'
                background='#0B6E4F'>
                    <ImageChildren src={imgresearch} widthImg='80%' link='/research' marginImg='4.95vw 0 0 auto' textAlign='end' />
                    <TextChildren width='45.56vw' h1='RESEARCH' p="Observing thousands of people in hundreds of global virtual teams every semester presents a unique research platform.
               <br/><br/> We will consider collecting new data or incorporating new experimental conditions for most interesting research proposals." />
            
                </Sector>
            <Sector id='support' display='block'
                
                height='60.53vw'
                color='black'
                marginTop='0'
                background='#FDE74C'
                width='26.95vw'
                margin='0 auto 0 auto'
                fonth1='600 4.43vw Roboto'
                paddingTop='5.21vw'
               
                textAlignh1='center'
                fontp='400 35px Roboto'
                marginLeft='46.14vw'
            ><h1 style={{ font: '600 4.43vw  Roboto', margin:'3vw auto 2vw auto'}} >SUPPORTED BY</h1></Sector>
            

        </main>

    )


}


export default Main