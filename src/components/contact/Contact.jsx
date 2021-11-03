import "./contact.css"
import Phone from "../../images/phone.png"
import Email from "../../images/email.png"
import Address from "../../images/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

function Contact() {
    const formRef = useRef()
    const [done, setDone]= useState(false)
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
       e.preventDefault();
       emailjs.sendForm('service_xgqcr5a', 
       'template_i9lrswj', 
       formRef.current, 
       'user_AoaMZAjqGeXueVASojeZh'
       )


       .then((result) => {
           console.log(result.text);
           setDone(true)
       }, 
       (error) => {
           console.log(error.text);
       });
    }


    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's Discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" /> +046 02458 654
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" /> stiffynavales@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" /> Silang, Cavite
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum necessitatibus fugiat nulla?
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" required/>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" required/>
                        <textarea style={{backgroundColor: darkMode && "#333"}} name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                        <button>Submit</button>
                        {done && " Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
