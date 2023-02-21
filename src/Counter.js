import { connect,useSelector,useDispatch } from "react-redux";
import React from "react";

// function incrementCounter(num){
//     return{
//         type: 'INCREMENT',
//         num : num
//     }
// }

// function decreaseCounter(num){
//     return{
//         type: 'DECREASE',
//         num : num
//     }
// }

// function incrementCounterBy2(){
//     return{
//         type: 'INCREMENTBY2'
//     }
// }

// function decrementCounterBy2(){
//     return{
//         type: 'DECREMENTBY2'
//     }
// }
 


function Counter(){
    const dispatch = useDispatch();
    const count = useSelector(state=>state.count);


    const incrementHandler = () =>{
            dispatch({type:'IncrementBy5'});
    };

    const decrementHandler = () =>{
            dispatch({type:'Decremenenby5'});
    };






    // function incrementClick(){
    //     props.incrementCounter(5);
    // }

    // function decreaseClick(){
    //     props.decreaseCounter(1);
    // }

    // function incrementby2(){
    //     props.incrementCounterBy2();
    // }

    // function decrementby2(){
    //     props.decrementCounterBy2();
    // }

    return(<div>
        <p>{count}</p>
        <button onClick={incrementHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decremenenby5</button>
       
    </div>);

}

// function mapStateToProps(state){
//     return{
//         count: state.count
// //     }
// }

// const mapDispatchToProps = {
//     incrementCounter,
//     decreaseCounter,
//     incrementCounterBy2,
//     decrementCounterBy2
// }

export default  Counter;