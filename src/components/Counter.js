import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <div>
            <p>Clicked : {props.count}</p>
            <button onClick={() => {
                props.dispatch({ type: 'INCREMENT' })
            }}>tambah</button>
            <button onClick={() => {
                props.dispatch({ type: 'DECREMENT' })
            }}>kurang</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter);