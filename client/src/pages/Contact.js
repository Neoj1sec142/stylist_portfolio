import { Card, Container, Row } from "react-bootstrap"

const Contact = () => {
    return(
        <Container fluid>
            <br></br>
            <Card>
            <br></br>
                <Row>
                    <Card.Title style={{textDecoration: 'underline'}}>Contact Information</Card.Title>
                    <br></br>
                    <button className="btn btn-outline-dark"
                            style={{width: '60%', marginRight: '20%', marginLeft: '20%'}}>Download Resume</button>
                </Row>
                <br></br>
                <Row>
                    <Card.Text>Meredith Swanson</Card.Text>
                </Row>
                <Row>
                    <Card.Text>meredithswanson96@yahoo.com</Card.Text>
                </Row>
                <Row>
                    <Card.Text>(630) 636-8155</Card.Text>
                </Row>
                <br></br>
            </Card>
        </Container>
    )
}

export default Contact