import React  from "react";
import "./bomhumor.css";
import TypeWriterEffect from 'react-typewriter-effect';

const BomHumor = () =>{
return(
    <>
    <div className="image">
        
        <a href="/">Home</a>
        <a href="/transparencia">Transparencia</a>
        <TypeWriterEffect 
        textStyle={{fontSize:"15px",
        textAlign:"center",width:"600px",marginLeft:"350px",paddingTop:"150px",fontFamily:'red-hat-display'}}
        typeSpeed={25}
        text="Bom humor é uma competência muito importante no quesito de Comunicação,
         é necessário em todo tipo de ambiente até mais no empresarial que todos estejam bem com os outros independentemente da situação.No ambiente 
         serão encontrados diversos desafios que necessitam do apoio do time inteiro, sendo assim lidar bem com as pessoas sempre com uma comunicação harmoniosa
         é um dos principais fatores de um projeto ser produtivo e feito com qualidade.

         "
        />

    </div>
    

    </>
)

}

export default BomHumor