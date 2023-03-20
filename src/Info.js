import React from 'react'

const Info = () => {
  return (
    <section>
        <div className='main-stack'>

          
  
        <div className='techs'>
          <h3>Front-end</h3>
        <img src='./HTML-CSS-logo.png' className='tech-logo'></img>
        <img src='./react-logo.png' className='tech-logo'></img>
          </div>  

      <div className='tech'>
        <h3>Backend</h3>
       <img src='./express-js.png' className='tech-logo'></img>
</div>

    <div className='techs'>
      <h3>Database</h3>
       <img src='./mongoDB-logo.png' className='tech-logo'></img>
       <img src='./postgresSQL-logo.png' className='tech-logo'></img>
    </div>    
        </div>
        <div className='divider'></div>
        {/* <div style={{border: "2px solid #92c3f8", height: "200px"}}></div>
         */}

<div className='other-tech'>
<div className='techs'>
      <h3>other Tech / Learning </h3>
       <img src='./vue-logo.png' className='tech-logo-other'></img>
       <img src='./python-logo.png' className='tech-logo-other'></img>
       <img src='./csharp-logo.png' className='tech-logo-other'></img>
    </div>  
</div>
    </section>
  )
}

export default Info