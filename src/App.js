import './App.css';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card"
import {imagen1,imagen2,imagen3} from "./assets/img"
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header title= "Galería Animmales" />
      <Card url={imagen1} title="Oso Polar" description="Carnívoro"/>
      <Card url={imagen2} title="Oso Panda" description="Herbívoro"/>
      <Card url={imagen3} title="Panda Rojo" description="Omnívoro"/>
      <Footer text="Galería de imagenes de osos"/>
    </div>
  );
}

export default App;
