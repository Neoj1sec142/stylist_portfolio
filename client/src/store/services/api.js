import axios from "axios";

const Client = axios.create({
    // baseURL: 'http://localhost:8000',
    baseURL: 'https://meredith-harmon-portfolio.herokuapp.com/',
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
})

export default Client