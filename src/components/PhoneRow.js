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
        return(
            <tr>
                <td>Apple</td>
                <td>Iphone X</td>
                <td>Argent</td>
                <td>256 Go</td>
                <td>449 €</td>
            </tr>
        )
    }
}

export default PhoneRow;