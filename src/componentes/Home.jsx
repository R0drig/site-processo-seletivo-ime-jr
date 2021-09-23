import TypeWriterEffect from 'react-typewriter-effect';
import "./home.css"




const Home =(props)  =>{
    return(
        <>
        

        <div>
 <h3><TypeWriterEffect
            textStyle={{textAlign:"center",}}
            startDelay={0}
            cursorColor="white"
            text={props.texto}
            typeSpeed={50}
            /></h3>

        <ol>
            <li>
                <a href="/bomhumor">
                    <TypeWriterEffect
                        startDelay ={4500}
                        cursorColor="white"
                        typeSpeed={50}
                        text="Bom Humor"
                        />
                </a>
            </li>
            <li>
                <a href="/transparencia">
                    <TypeWriterEffect
                        startDelay ={5500}
                        cursorColor="white"
                        typeSpeed={50}
                        text="Transparência"
                        />
                </a>
            </li>
            <li>
                <a href="/proatividade">
                    <TypeWriterEffect
                        startDelay ={6500}
                        cursorColor="white"
                        typeSpeed={50}
                        text="Proatividade"
                        />
                </a>
            </li>
            <li>
                <a href="/coragem">
                    <TypeWriterEffect
                        startDelay ={7500}
                        cursorColor="white"
                        typeSpeed={50}
                        text="Coragem"
                        />
                </a>
            </li>
        </ol>
        <TypeWriterEffect
        textStyle={{marginLeft:"32%",}} 
        startDelay={8250}
        cursorColor="white"
        typeSpeed={50}
        text="Clique em um dos itens para saber mais"/>
        </div>
        </>
            )}


export default Home