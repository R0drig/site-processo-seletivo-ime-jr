
import React from "react";
import TypeWriterEffect from "react-typewriter-effect"
import "./transparencia.css"

const Transparencia = () =>{
    return(
        <>
        <div className="imageTransparencia">
            
        
        <a href ="/">Home</a>
        <a href="/proatividade">Proatividade</a>
        <TypeWriterEffect 
        textStyle={{fontSize:"15px",
        textAlign:"center",width:"600px",marginLeft:"350px",paddingTop:"150px",fontFamily:'red-hat-display'}}
        typeSpeed={25}
        text=" A transparência é necessária em todas as situações, é importante comunicar todas suas ações em todos os momentos principalmente quando se 
        está em um ambiente de trabalho onde todos estão em projetos iguais então a comunicação do que está fazendo, onde se está trabalhando é necessário,ainda como 
        ferramenta mais necessária é a comunicação dos resultados.Dito isso podemos ver a qualidade da transparencia, sem ela não é possível localizar erros da raiz do problema
        podendo se ter problemas maiores no futuro devido a falta dela causando grandes dores de cabeça" />
        </div>
        </>
    )
}

export default Transparencia