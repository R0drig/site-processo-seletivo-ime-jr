
import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "./proatividade.css";

const Proatividade= () =>{
    return(
        <>
        <div className="imageProatividade">

        
        <a href="/">Home</a>
        <a href="/coragem">Coragem</a>
        
            <TypeWriterEffect textStyle={{fontSize:"15px",
        textAlign:"center",width:"600px",marginLeft:"350px",paddingTop:"150px",fontFamily:'red-hat-display'}}
        typeSpeed={25}
            text="A proatividade não é necessária para o ambiente funcionar, mas ela é extremamente importante 
            ao que tange desenvolvimento e produtividade. Ela permite que faça se mais tarefas além do esperado buscando uma melhora no produto
            e melhor crescimento na carreira e dentro da empresa. Isso por si só ja diz o porquê seria importante no mercado de trabalho não como mandatória mas como o mais como o termo."/>

        </div>
        </>
    )
}

export default Proatividade