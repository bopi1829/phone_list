/**
 * @author Bopi1829
 * Licence
 * Composant SearchCompo
 */

import React ,{Component} from 'react';


class SearchCompo extends Component {
    constructor(props) {
        super(props);
        console.log("filterText", this.props.filterText)
        console.log(this.props.inStockOnly)
    }

    handleSearchPhoneTextChange = (e) => {
        //console.log('Search :',e.target.value)
        this.props.handleSearchPhoneTextChange(e.target.value)
    }

    handleinStockChange = (e) => {
        //console.log('Checkbox :' ,e.target.checked)
        this.props.handleinStockChange(e.target.checked)
    }

    render() {
        return(
            <div>
                <input type = "text"
                    text = {this.props.filterText}
                    placeholder = "search"
                    onChange = {this.handleSearchPhoneTextChange}
                />
                <input type = "checkbox"
                    checked = {this.props.inStockOnly}
                    onChange = {this.handleinStockChange}
                />
                {' '}
                Produit en stock seulement
            </div>
        )
    }
}

export default SearchCompo;