import React from 'react'
import { buyCake } from '../redux';
import { connect } from 'react-redux';
import { useState } from 'react';

function CakeContainer(props) {
    const [Number, setNumber] = useState(1)
    return (
        <div>
            <input type="number" value={Number} onChange={(event) => setNumber(event.target.value)} />
            <button onClick={ () => props.buyCake(Number)}>Buy {Number} Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (Number) => dispatch(buyCake(Number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
