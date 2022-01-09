import React from 'react'
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {
    console.log("props "+ JSON.stringify(props));
    return (
        <div>
            <h2>No Of Cakes - {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {  
    console.log("mapStateToProps called",JSON.stringify(state));
    return {
        noOfCakes: state.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    console.log("mapDispatchToProps Called",dispatch);
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
