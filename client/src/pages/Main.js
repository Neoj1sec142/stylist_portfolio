const oops = require('../assets/oops.png')

const Main = () => {
    return(
        <div className="container">
            <br></br>
            <div className="card">
                <br></br>
                <h1>Licensed Cosmotologist</h1>
                <br></br>
                <img src={oops} id='main-img' alt='nopic'/>
                <br></br>
                <p>
                    Welcome to my portfolio!! Cosmotology is my passion and 
                    helping others achieve their dream look is what drives me.
                    Please reach out if you have any questions.
                </p>
            </div>
        </div>
    )
}
export default Main