import AppAffichage from './page/AppAffichage';
import Liste from './page/Carburant';
import InsertionBoiteDeVitesse from './page/BoiteDeVitesse';
import InsertionLieu from './page/Lieu';
import InsertionMarque from './page/Marque';
import ListeDesLieux from './page/SelectLieu';
import Login from './component/Login';
import InsertionCategorie from './component/InsertionCategorie';
import ListeCarburant from './page/ListeCarburant';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListeAnnonce } from './component/ListeAnnonce';
import { ListeFavorie } from './component/ListeAnnonceFavorie';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/> }></Route>
          <Route path='/insertionModel' element={ <AppAffichage /> }></Route>     {/* Insertion model */}
          <Route path='/InsertionCarburant' element={ <Liste /> }></Route>
          <Route path='/InsertionBoiteDeVitesse' element={ <InsertionBoiteDeVitesse /> }></Route>
          <Route path='/InsertionLieu' element={ <InsertionLieu /> }></Route>
          <Route path='/InsertionMarque' element={ <InsertionMarque /> }></Route>
          <Route path='/SelectLieu' element={ <ListeDesLieux /> }></Route>
          <Route path='/insertionCategorie' element = {<InsertionCategorie/> }></Route>
          <Route path='/ListeCarburant' element = {<ListeCarburant/> }></Route>
          <Route path='/ListeFavorie' element = {<ListeFavorie/> }></Route>
          <Route path='/ListeAnnonce' element = {<ListeAnnonce/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
