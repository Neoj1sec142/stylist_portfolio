import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

const ServiceDetail = (props) => {
    const handlePage = (e) => {
        props.setPageState(false)
    }
    return(
        <Container fluid>
            <br></br>
            <Card style={{ marginLeft: '10%', marginRight: '10%', width: '80%'}}>
                <br></br>
                <Row>
                    <Card.Title>{props.style.style}</Card.Title>
                </Row>
                <Row>
                    <Card.Title>{props.style.description}</Card.Title>
                </Row>
                <button className='btn btn-outline-light' style={{marginLeft: '20%',marginRight: '20%',width: '60%'}} onClick={handlePage}>Back to Services</button>
                <br></br>
            </Card>
        </Container>
    )
}

export default ServiceDetail