import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

const ServiceDetail = (props) => {
    const handlePage = (e) => {
        props.setPageState(false)
    }
    return(
        <Container fluid>
            <br></br>
            <Card>
                <br></br>
                <Row>
                    <Card.Title>{props.style.style}</Card.Title>
                </Row>
                <Row>
                    <Card.Title>{props.style.description}</Card.Title>
                </Row>
                <button className='btn btn-outline-light' onClick={handlePage}>Back to Services</button>
                <br></br>
            </Card>
        </Container>
    )
}

export default ServiceDetail