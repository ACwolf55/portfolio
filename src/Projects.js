import React from 'react'

export const Projects = () => {
  return (
    <div className='projects'>


{/* if your looking at this and like why didnt he make Project of seraparate components instead of reapeating his code?
well... you know... idk lol I might do that hhaha */}

<h3>Personal Projects</h3>

<div className='project'>
  <h2><a href='https://pkmteambuilder.xyz/' target="_blank">Pokemon Team Builder</a></h2>
  
      <a href='https://github.com/ACwolf55/dawg_sports' target="_blank" className='github-div'>
      <img src='./github.png' className='github-logo' onClick={()=>window.open('https://pkmteambuilder.xyz/')}>
      </img>
        <p>click to check out code~</p>
      </a>
    
  <img src='./pkm-team-builer-scn.png' id='site-scrn'></img>
  <p></p>
</div>

<div className='project'>
<h2><a href='https://ac-market.shop/' target="_blank">AC-2-Market</a></h2>
<a href='https://github.com/ACwolf55/dawg_sports' target="_blank" className='github-div'>
      <img src='./github.png' className='github-logo' onClick={()=>window.open('https://ac-market.shop/')}>
      </img>
        <p>click to check out code~</p>
      </a>
  <img src='./AC-Market-srcn.png' id='site-scrn' onClick={()=>window.open('https://ac-market.shop/')}></img>
  <p></p>

</div>


<div className='project'>
  <h2><a href='https://dawgsports.xyz/' target="_blank">Dawg Sports</a></h2>
    <a href='https://github.com/ACwolf55/dawg_sports' target="_blank" className='github-div'>
      <img src='./github.png' className='github-logo' onClick={()=>window.open('https://dawgsports.xyz/')}>
      </img>
        <p>click to check out code~</p>
      </a>
      <img src='./dawg-sports-scnshot.png' id='site-scrn' onClick={()=>window.open('https://ac-market.shop/')}></img>
  <p></p>
</div>

{/* <div className='project'>
  <h2>Overlap.lol</h2>
    <h2>https://www.overlap.lol/</h2>
  <p></p>
    
</div>

<div className='project'>
  <h2>MyVcard</h2>
    <h2>https://myvcard.lol/</h2>
  <p></p>
    
</div> */}

    </div>
  )
}
