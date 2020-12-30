/**
 * @author Bopi1829
 * Licence
 * Composant SearchCompo
 */

import React ,{Component} from 'react';


class SearchCompo extends Component {
    constructor(props) {
        super(props);
    }

    handleSearchPhoneTextChange = (e) => {
        console.log('Search :',e.target.value)
    }

    handleinStockChange = (e) => {
        console.log('Checkbox :' ,e.target.checked)
    }

    render() {
        return(
            <div style ={{"backgroundColor": "red"}}>
                <input type = "text"
                    placeholder = "search"
                    onChange = {this.handleSearchPhoneTextChange}
                />
                <input type = "checkbox"
                    onChange = {this.handleinStockChange}
                />
                {' '}
                Produit en stock seulement
            </div>
        )
    }
}

export default SearchCompo;