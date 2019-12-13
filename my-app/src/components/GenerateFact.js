import React from 'react';
import { connect } from 'react-redux';
import { getCatFact } from '../actions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import '../App.css';

const GenerateFact = (props) => {
    console.log("generateFact props", props)
    return <>
        <div className="wrapper">
            {props.isFetching && <><Spinner animation="border" /> <br /> <br /></>}
            {!props.isFetching && props.catFact &&
                <Card bg="secondary" text="white" style={{ width: '18rem' }} className="center">
                    <Card.Header><i class="fas fa-cat"></i></Card.Header>
                    <Card.Body>
                        <Card.Title>Random Cat Fact:</Card.Title>
                        <Card.Text>
                            {props.catFact}
                        </Card.Text>
                    </Card.Body>
                </Card>}
            <Button onClick={(e) => {
                e.preventDefault();
                props.getCatFact()
            }}
                variant="outline-dark">
                Generate Fact
        </Button>
        </div>
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