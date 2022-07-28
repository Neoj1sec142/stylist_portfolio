import { Card, Container, Row } from "react-bootstrap"
import {useState} from 'react'
import ServiceDetail from "../components/ServiceDetail"

const Services = () => {
    const [pageState, setPageState] = useState(false)
    const [style, setStyle] = useState({
        style: '',
        description: ''
    })
    const formStyle = (e) => {
        if(e.target.value === 'Baylage'){
            setStyle({...style, [e.target.name]: e.target.value, description: 'Baylage Description'})
            console.log(style, "Style")
            setPageState(true)
        }else if(e.target.value === 'Toning'){
            setStyle({...style, [e.target.name]: e.target.value, description:'Toning description'})
            console.log(style, "Style")
            setPageState(true)
        }else if(e.target.value === 'Styling'){
            setStyle({...style, [e.target.name]: e.target.value, description:'Styling description'})
            console.log(style, "Style")
            setPageState(true)
        }else if(e.target.value === 'Cuts'){
            setStyle({...style, [e.target.name]: e.target.value, description:'Cut description'})
            console.log(style, "Style")
            setPageState(true)
        }else if(e.target.value === 'Foiling'){
            setStyle({...style, [e.target.name]: e.target.value, description:'Foiling description'})
            console.log(style, "Style")
            setPageState(true)
        }
    }
    if(pageState === false){
        return(
            <Container fluid>
                <br></br>
                <Card style={{ marginLeft: '10%', marginRight: '10%', width: '80%'}}>
                    <br></br>
                    <Row style={{textDecoration: 'underline'}}>
                        <Card.Title>Services</Card.Title>
                    </Row>
                    <br></br>
                    <Row>
                        <button 
                            name='style'
                            value='Baylage' 
                            className="btn btn-outline-light"
                            style={{
                                marginLeft: '20%',
                                marginRight: '20%',
                                width: '60%'}}
                            onClick={(e) => formStyle(e)}
                            > Baylage</button>
                    </Row>
                    <br></br>
                    <Row>
                        <button
                            name='style'
                            value='Toning' 
                            className="btn btn-outline-light"
                            style={{
                                marginLeft: '20%',
                                marginRight: '20%',
                                width: '60%'}}
                            onClick={(e) => formStyle(e)}
                            >Toning</button>
                    </Row>
                    <br></br>
                    <Row>
                        <button
                            name='style'
                            value='Styling' 
                            className="btn btn-outline-light"
                            style={{
                                marginLeft: '20%',
                                marginRight: '20%',
                                width: '60%'}}
                            onClick={(e) => formStyle(e)}
                            >Styling</button>
                    </Row>
                    <br></br>
                    <Row>
                        <button
                            name='style'
                            value='Cuts' 
                            className="btn btn-outline-light"
                            style={{
                                marginLeft: '20%',
                                marginRight: '20%',
                                width: '60%'}}
                            onClick={(e) => formStyle(e)}
                            >Hair Cuts</button>
                    </Row>
                    <br></br>
                    <Row>
                        <button
                            name='style'
                            value='Foiling' 
                            className="btn btn-outline-light"
                            style={{
                                marginLeft: '20%',
                                marginRight: '20%',
                                width: '60%'}}
                            onClick={(e) => formStyle(e)}
                            >Foiling</button>
                    </Row>
                    <br></br>
                </Card>
            </Container>
        )
    }else if(pageState === true){
        return(
            <ServiceDetail style={style} pageState={pageState} setPageState={setPageState}/>
        )
    }
}
export default Services