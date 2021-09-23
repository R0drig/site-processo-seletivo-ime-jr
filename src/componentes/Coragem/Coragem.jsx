import React from "react";
import TypeWriterEffect from "react-typewriter-effect"
import "./coragem.css"

const Coragem = () =>{
    return(
        <>
        <div className="imageCorage">
        <a href ="/">Home</a>
        <a href="/bomhumor">Bom Humor</a>
        <TypeWriterEffect 
        textStyle={{fontSize:"15px",
        textAlign:"center",width:"600px",marginLeft:"350px",paddingTop:"150px",fontFamily:'red-hat-display'}}
        typeSpeed={25}
        text="A Coragem é um atributo que se mostra no aprendizado e evolução, é muito mais pessoal que de um time.
        Ela é trazida ao incorporar novas ferramentas, tecnologias e conhecimentos, caracteristicas que agregam inovação e forçam mudanças.
        Isso visto de um ponto de vista empresarial é mais que importante para não ficar atrás da concorrência e incentivar o desenvolvimento pessoal 
        e o da empresa."
        />
        

        </div>
        </>
    )
}

export default Coragem