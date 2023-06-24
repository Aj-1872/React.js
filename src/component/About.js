import React from 'react'
import { useState } from 'react'

export default function About() {
    
  const [myStyle, setMyStyle] = useState(
     {
        color:'white',
        backgroundColor:'black',
        border:'2px solid white '
        
    })
    
    const [btnText, setBtnText] = useState('light')

    const mode =()=>{
        if(myStyle.color==='white'){
            setMyStyle(
                {
                   color:'black',
                   backgroundColor:'white'
                })

                setBtnText('dark');
        }
        else{
            setMyStyle(
                {
                   color:'white',
                   backgroundColor:'black'
                })
                setBtnText('light');

        }
    }



  return (
    <div className='container' style={myStyle}>

    <h2 className='m-2'>About us</h2>
   <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

<button onClick={mode} style={myStyle} type="button" className="btn btn-primary m-2">{btnText}</button>

    </div>
  )
}
