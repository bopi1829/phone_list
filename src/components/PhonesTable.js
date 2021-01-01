/**
 * @author Bopi1829
 * Licence
 * Composant PhonesTable
 */

import React ,{Component} from 'react';
import PhoneRow from './PhoneRow';
import PhonesCategory from './PhonesCategory';

class PhonesTable extends Component {
    constructor(props) {
        super(props);
        //console.log("PhonesTable", props.phones)

    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        let phonesBrand;
        const rows = [];
        this.props.phones.forEach(phone => {
            //console.log('Phones', phone.modele)
            if (phone.modele.toLowerCase().indexOf(filterText) === -1 && phone.marque.toLowerCase().indexOf(filterText) === -1) {
                return;
            }   

            if (inStockOnly && !phone.stocked) {
                return;
            }

            if (phone.marque !== phonesBrand) {
                rows.push(<PhonesCategory marque = {phone.marque}/>)
            }
            rows.push(<PhoneRow key = {phone.modele} phone = {phone}/>)
            phonesBrand = phone.marque;
        });
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Couleur</th>
                            <th>Memoire</th>
                            <th>Prix</th>
                        </tr>
                    </thead>
                    {rows}
                </table>
                
                
            </div>
        )
    }
}

export default PhonesTable;