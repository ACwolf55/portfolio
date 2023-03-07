import React,{useEffect} from 'react'
import $ from 'jquery';

const Arrows = () => {


    useEffect(() => {
        $(window).bind("scroll",function() {
            if($(window).scrollTop() > 130) {
                $(".doublearrows").fadeOut(50)
            } else {
                $(".doublearrows").show()
            }
        })
    }, [])
    


  return (
    <div className='doublearrows'>

        <img src='./bluearrow.png' className='bluearrows'></img>
        <img src='./bluearrow.png' className='bluearrows'></img>

    </div>
  )
}

export default Arrows