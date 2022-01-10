import React from 'react'
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>No Of IceCream - {props.noOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("mapStateToProps IceCream "+JSON.stringify(state));
    return {
        noOfIceCream: state.iceCream.noOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
