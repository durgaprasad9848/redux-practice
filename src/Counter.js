import { connect } from "react-redux";
import React from "react";

function incrementCounter(num){
    return{
        type: 'INCREMENT',
        num : num
    }
}

function decreaseCounter(num){
    return{
        type: 'DECREASE',
        num : num
    }
}

function incrementCounterBy2(){
    return{
        type: 'INCREMENTBY2'
    }
}

function decrementCounterBy2(){
    return{
        type: 'DECREMENTBY2'
    }
}
 


function Counter(props){

    function incrementClick(){
        props.incrementCounter(5);
    }

    function decreaseClick(){
        props.decreaseCounter(1);
    }

    function incrementby2(){
        props.incrementCounterBy2();
    }

    function decrementby2(){
        props.decrementCounterBy2();
    }

    return(<div>
        <p>{props.count}</p>
        <button onClick={incrementClick}>Increment</button>
        <button onClick={decreaseClick}>Decrease</button>
        <button onClick={incrementby2}>IncrementBy2</button>
        <button onClick={decrementby2}>DecrementBy2</button>
    </div>);

}

function mapStateToProps(state){
    return{
        count: state.count
    }
}

const mapDispatchToProps = {
    incrementCounter,
    decreaseCounter,
    incrementCounterBy2,
    decrementCounterBy2
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Counter);