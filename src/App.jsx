import './App.css'
import Caixa from "./componentes/Caixa"
import Botao from "./componentes/Botao"
import Etiqueta from "./componentes/Etiqueta"


function App() {

  return (
    <>
      Aula de componentes

      <Etiqueta texto ="Texto enviado"/>
      <Etiqueta texto ="Texto enviado"/>

      <Caixa />
      <Botao />

    </>
  )
}

export default App
