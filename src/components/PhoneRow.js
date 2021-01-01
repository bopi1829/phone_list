/**
 * @author Bopi1829
 * Licence
 * Composant PhoneRow
 */

import React ,{Component} from 'react';

class PhoneRow extends Component {
    constructor(props) {
        super(props);
        //console.log("PhoneRow : ", props.phone)
    }

    render() {

        let marque;
        let modele;
        let couleur;
        let capacite;
        let prix;
        
        if(this.props.phone.stocked) {
            marque = <span style = {{color : 'green'}}>{this.props.phone.marque}</span>;
            modele = <span style = {{color : 'green'}}>{this.props.phone.modele}</span>;
            couleur = <span style = {{color : 'green'}}>{this.props.phone.couleur}</span>;
            capacite = <span style = {{color : 'green'}}>{this.props.phone.capacite}</span>;
            prix = <span style = {{color : 'green'}}>{this.props.phone.prix}</span>
        } else {
            marque = <span style = {{color : 'red'}}>{this.props.phone.marque}</span>;
            modele = <span style = {{color : 'red'}}>{this.props.phone.modele}</span>;
            couleur = <span style = {{color : 'red'}}>{this.props.phone.couleur}</span>;
            capacite = <span style = {{color : 'red'}}>{this.props.phone.capacite}</span>;
            prix = <span style = {{color : 'red'}}>{this.props.phone.prix}</span>
        }
        
        return(
            <tr>
                <td>{marque}</td>
                <td>{modele}</td>
                <td>{couleur}</td>
                <td>{capacite}</td>
                <td>{prix}</td>
            </tr>
        )
    }
}

export default PhoneRow;