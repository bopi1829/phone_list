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
     }

     render() {
         return(
             <div style = {{"backgroundColor": "blue"}}>
                 FilterablePhonesTable
                 <SearchCompo/>           
                 <PhonesTable phones = {this.props.phones}/>
             </div>
         )
     }
 }

 export default FilterablePhonesTable;