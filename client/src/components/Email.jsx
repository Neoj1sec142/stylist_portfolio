import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
const Email = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMAPLATE_ID",
            form.current,
            "YOUR_USER_ID"
        )
        .then(res => console.log(res.text))
        .catch(err => console.log(err, "Email Error"))
    }


    return(
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='user_name' />
                <label>Email</label>
                <input type='email' name="user_email" required />
                <label>Message</label>
                <textarea name='message' required />
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}

export default Email