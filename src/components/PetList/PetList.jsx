// owner
// pet
// breed
// color
// checked-in
// actions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetListItem from '../PetListItem/PetListItem';

class PetList extends Component {

    // componentDidMount() {
    //     this.props.dispatch({ type: 'GET_PETS' });
    // }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>owner</th>
                            <th>name</th>
                            <th>breed</th>
                            <th>color</th>
                            <th>checked-in</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.getPetsReducer.map(pet => {
                            return (
                            <PetListItem id="pet.id" key={pet.id} pet={pet} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return (
        {
            reduxState
        }
    )
}

export default connect(putStateOnProps)(PetList);