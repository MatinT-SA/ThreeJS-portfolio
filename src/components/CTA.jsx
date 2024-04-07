import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Wanna add to projects above? <br className='sm:block hidden' />Send me a direct message</p>
        <Link to='/contact' className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA