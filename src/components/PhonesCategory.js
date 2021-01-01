/**
 * @author Bopi1829
 * Licence
 * Composant PhonesCategory
 */

import React ,{Component} from 'react';

class PhonesCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <th colSpan = "2">{this.props.marque}</th>
            </tr>
        )
    }
}

export default PhonesCategory;