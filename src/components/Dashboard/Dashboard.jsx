import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddPetForm from '../AddPetForm/AddPetForm';
import PetList from '../PetList/PetList';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <AddPetForm />
                <PetList />
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

// export default connect(putStateOnProps)(Dashboard);
export default Dashboard;