import React from 'react'

export default function About(){
  return (
      <>
    
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        ABOUT THE APPLICATION
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the Text UTils APP.</strong>  Here you can change the text from uppercase to lower case and vice vera 
        can copy the text. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

      
    
    </>
  )
};


