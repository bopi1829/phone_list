/**
 * @author Bopi1829
 * Licence
 * Composant PhoneRow
 */

import React ,{Component} from 'react';

class PhoneRow extends Component {
    constructor(props) {
        super(props);
        console.log("PhoneRow : ", props.phone)
    }

    render() {

        let marque;
        if(this.props.phone.stocked) {
            marque = <span style = {{color : 'green'}}>{this.props.phone.marque}</span>;
        } else {
            marque = <span style = {{color : 'red'}}>{this.props.phone.marque}</span>
        }
        
        let modele;
        if(this.props.phone.stocked) {
            modele = <span style = {{color : 'green'}}>{this.props.phone.modele}</span>;
        } else {
            modele = <span style = {{color : 'red'}}>{this.props.phone.modele}</span>
        }

        let couleur;
        if(this.props.phone.stocked) {
            couleur = <span style = {{color : 'green'}}>{this.props.phone.couleur}</span>;
        } else {
            couleur = <span style = {{color : 'red'}}>{this.props.phone.couleur}</span>
        }

        let capacite;
        if(this.props.phone.stocked) {
            capacite = <span style = {{color : 'green'}}>{this.props.phone.capacite}</span>;
        } else {
            capacite = <span style = {{color : 'red'}}>{this.props.phone.capacite}</span>
        }

        let prix;
        if(this.props.phone.stocked) {
            prix = <span style = {{color : 'green'}}>{this.props.phone.prix}</span>;
        } else {
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