import "./intro.css"
import Me from "../../images/me.png"
function Intro() {
    return (
        <div className="i">
            <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Stiffy Navales</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">System Administrator</div>
                        <div className="i-title-item">IT Specialist</div>
                        <div className="i-title-item">Technical Support Engr.</div>
                        <div className="i-title-item">Photo Editor</div>
                    </div> 
                </div>
                <p className="i-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veritatis facere distinctio eos perferendis mollitia, dicta tempora est porro sed laboriosam provident maxime laudantium quos quidem magnam suscipit aliquam ad voluptas voluptatibus cum dignissimos? Sint.</p>
                </div>
                </div> 
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
         </div> 
        </div>
    )
}

export default Intro
