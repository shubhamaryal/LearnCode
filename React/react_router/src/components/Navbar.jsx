import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src="https://res.cloudinary.com/vistaprint/images/c_scale,w_448,h_448,dpr_2/f_auto,q_auto/v1705580343/ideas-and-advice-prod/en-us/adidas/adidas.png?_i=AA" alt="" />
        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Get started</button>
    </div>
  )
}

export default Navbar