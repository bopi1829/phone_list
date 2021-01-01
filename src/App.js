import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FilterablePhonesTable from './components/FilterablePhonesTable';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const PHONES = [];
    PHONES.push({marque: 'Apple', modele: 'Iphone X', couleur: 'Argent', capacite: '256 Go', prix: "449 €", stocked: true})
    PHONES.push({marque: 'Apple', modele: 'Iphone 7', couleur: 'Doré Rose', capacite: '256 Go', prix: "229 €", stocked: true})
    PHONES.push({marque: 'Samsung', modele: 'Galaxy S20', couleur: 'Bleu', capacite: '128 Go', prix: "449 €", stocked: false})
    PHONES.push({marque: 'Xiaomi', modele: 'Mi 10', couleur: 'Noir', capacite: '256 Go', prix: "539 €", stocked: false})    
    PHONES.push({marque: 'Huawei', modele: 'P10 Plus', couleur: 'Noir', capacite: '128 Go', prix: "329 €", stocked: false})    
    PHONES.push({marque: 'Huawei', modele: 'Mate 20 Pro', couleur: 'Blanc', capacite: '128 Go', prix: "479 €", stocked: true})    
    PHONES.push({marque: 'Asus', modele: 'ROG Phone 2', couleur: 'Noir', capacite: '128 Go', prix: "729 €", stocked: false})    
    PHONES.push({marque: 'Google', modele: 'Pixel 4', couleur: 'Blanc', capacite: '64 Go', prix: "519 €", stocked: true})    
    
    return (
      <div className = "App">
        <header className = "App-header">
        <FilterablePhonesTable phones = {PHONES}/>
        </header>
      </div>
    );
  }
}
 
export default App;