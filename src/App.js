import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './componentes/Home'
import BomHumor from './componentes/bomHumor/BomHumor'
import Coragem from './componentes/Coragem/Coragem'
import Transparencia from './componentes/transparencia/Transparencia'
import Proatividade from './componentes/Proatividade/Proatividade'

const App =() =>{
  return(
    <>
    <Router>
      <Route path="/" exact render={() =>{return(<Home 
      texto="Por que as Competências a Seguir são Importantes para o Mercado de Trabalho?"
      />)}}/>
      <Route path="/bomhumor" exact render ={() =>{return(
        <BomHumor />
      )}} />
      <Route path="/coragem" exact render={()=>{return(<Coragem />)}} />  
      <Route path="/proatividade" exact render={()=>{return(<Proatividade />)}} />
      <Route path="/transparencia" exact render={()=>{return(<Transparencia />)}} />
    </Router>
    </>
  )
}

export default App;
