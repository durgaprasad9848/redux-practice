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
 


function Counter(props){

    function incrementClick(){
        props.incrementCounter(5);
    }

    function decreaseClick(){
        props.decreaseCounter(1);
    }

    return(<div>
        <p>{props.count}</p>
        <button onClick={incrementClick}>Increment</button>
        <button onClick={decreaseClick}>Decrease</button>
    </div>);

}

function mapStateToProps(state){
    return{
        count: state.count
    }
}

const mapDispatchToProps = {
    incrementCounter,
    decreaseCounter
}

export default connect(mapStateToProps,
    mapDispatchToProps)(Counter);