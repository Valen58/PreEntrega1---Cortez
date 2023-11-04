import NavBar from './NavBar/NavBar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
function App() {

  return (
    <>
    <header id="header">
    <div id="marca"> <a href="" >BLM</a></div>
    <NavBar></NavBar>
    </header>
    <ItemListContainer greeting={"¡Bienvenido a BLM!"}/>
    </>
  )
}

export default App
