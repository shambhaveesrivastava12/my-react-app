import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#161616':'white',
        // border:'2px solid',
        // borderColor:'white'
    }
    
    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    // eslint-disable-next-line no-unused-vars
    // const  toggleStyle = () =>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    return (
      <div className="container" style={myStyle}>
      <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <b>Workflow</b>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body"  style={myStyle}>
            This app helps you analyze your text efficiently, be it counting number of words or characters, or converting it to uppercase or lowercase, or even reversing it!
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <b>Ease of use</b>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            Its a very simple app, and can be used by anyone, even a beginner! Thus is suitable for writing words with limits. It help cout words in pdf document, essays, books etc. It works fine in any web browser like Mozilla Firefox, Chrome, Edge.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <b>Made of ReactJS</b>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            This app is made using ReactJS, and is a part of my learning process of ReactJS.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div> */}
      </div>
    )
}

