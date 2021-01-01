/**
 * @author Bopi1829
 * Licence
 * Composant FilterablePhonesTable
 */

 import React ,{Component} from 'react';
 import SearchCompo from './SearchCompo';
 import PhonesTable from './PhonesTable';

 class FilterablePhonesTable extends Component {
    constructor(props) {
        super(props);
        console.log("Filterable", props.phones)
        this.state = {
             filterText : "",
             inStockOnly : false
        }
    }

    handleSearchPhoneTextChange = (e) => {
        console.log('Search parent :', e)
        this.setState({filterText : e})
    }

    handleinStockChange = (e) => {
        console.log('Checkbox parent :', e)
        this.setState({inStockOnly : e})
    }

    render() {
        return(
            <div>
                FilterablePhonesTable
                 <SearchCompo
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                    handleSearchPhoneTextChange = {this.handleSearchPhoneTextChange}
                    handleinStockChange = {this.handleinStockChange}
                />           
                <PhonesTable 
                    phones = {this.props.phones}
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                />
            </div>
        )
    }
 }

export default FilterablePhonesTable;