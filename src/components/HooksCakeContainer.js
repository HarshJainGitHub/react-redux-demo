import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const noOfCakes = useSelector( state => state.cake.noOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>(Using Hooks) No of Cakes - {noOfCakes}</h2>
            <button onClick={ () => dispatch(buyCake())} >Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;
