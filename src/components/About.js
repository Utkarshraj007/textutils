import React, { useState } from 'react'
export default function About(){
    const[myStyle,setMyStyle]=useState({
         color:"black",
        backgroundColor:'white'
    })
    const [btnText, setbtnText] = useState("Enable Dark Mode")
    const toggleStyle=()=>{
        if(myStyle.color === 'black')
        {
            setMyStyle({
                 color:"white",
                backgroundColor:'black',
                border:'1px solid white'
            })
            setbtnText("Enable Light Mode");
        }
        else{
             setMyStyle({
                     color:"black",
                    backgroundColor:'white'
                })
                setbtnText("Enable Dark Mode");
        }
         
    }
  return (
    <div className='container' style={myStyle}>
    <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze the text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtls gives you wat to analze your text quickly and efficiently.Be it changing the text to uppercase or lowercase 
        or copying the text to clipboard,clearing the text area and so on.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Easy to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        It is a free character counter tool.We can count the no of characters, word and sentences.So it becomes very convenient to use it in our day to day life.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatibility</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This web tool can work on any browser.It is compatible on any browser like chrome,firefox,safari and so on.
      </div>
    </div>
  </div>
</div>
<div className="container my-2">
<button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btnText}</button>
</div>

    </div>
  )
}
