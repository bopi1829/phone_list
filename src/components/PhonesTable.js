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
        console.log("PhonesTable", props.phones)

    }

    render() {

        const rows = [];
        this.props.phones.forEach(phone => {
            console.log('Phones', phone.modele)
            rows.push(<PhoneRow key = "1" phone = {phone}/>)
        });
        //rows.push(<PhoneRow key = "1"/>);
        //rows.push(<PhoneRow key = "2"/>);
        
        return(
            <div style ={{"backgroundColor": "purple"}}>
                <table>
                    <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Couleur</th>
                            <th>Memoire</th>
                            <th>Prix</th>
                        </tr>
                    {rows}
                </thead>
                </table>
                {/**
                <PhonesCategory/>
                <PhoneRow/> 
                */}
                
            </div>
        )
    }
}

export default PhonesTable;