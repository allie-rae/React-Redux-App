import React from 'react'
import { connect } from 'react-redux'
import { getCatFact } from '../actions'

const GenerateFact = (props) => {
    console.log(props)
    return <>
        <button onClick={(e) => e.preventDefault(), getCatFact()}>
            Generate Fact
        </button>
        {props.isFetching && <p>Loading your cat fact...</p>}
        <ul>{props.catFact.map(fact => <li>{fact.text}</li>)}</ul>
    </>
}

const mapStateToProps = state => {
    return {
        catFact: state.catFact,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCatFact })(GenerateFact);