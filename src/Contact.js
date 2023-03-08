import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <h3>Contact</h3>
      <form target="_blank" action="https://formsubmit.co/Alexcwolf5@gmail.com" method="POST">
    <div class="form-group">
      <div className="form-row">
        <div class="col">
          <input type="text" name="name" placeholder=" Name" required/>
        </div>
        <div class="col">
          <input type="email" name="email" placeholder="Email Address" required/>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Send</button>
  </form>
    </div>
  )
}

export default Contact