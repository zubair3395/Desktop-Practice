import React from 'react'

export default function Home() {
  return (
    <div className='main-container'>
      <div className="navbar">
        <div className="left">
            <div>
            <img className='logo' src="/images/logo.png" alt="Logo" />
            </div>
          
          <div className="product">
            <img className='product-item1' src="/images/menu.png" alt="Menu" />
           <select className='product-item2'> 
                <option className='option-product'>Products</option>
                <option className='option-product'>Option 2</option>
                <option className='option-product'>Option 3</option>
            </select>
          </div>
        </div>
        <div className="right">
            <p className='nav-text'>Ecosystem</p>
            <p className='nav-text'>Community</p>
            <p className='nav-text'>BLOG</p>
            <p className='nav-text'>FQA</p>
            <button className='register'>Register</button>
            <button className='launch-App'>Launch App</button>
        </div>
      </div>
      <hr className='horizontal'/>
      <div className="main-text">
         <h1 className='community'>Welcome to the Era of  <br />
          <strong>Community Capitalism</strong>
          </h1>
          <p className='economy'>Kompwnd is creating an economy that works for <br />
           community wellness and self sustainability</p>
       <div className="btn">
        <button className='lunch'>Lunch App</button>
        <button className='more'>Read More</button>
       </div>
      </div>
      <hr className='horizontal'/>
      <div className="details">
        <div className="users">
          <h1 className='price'>5K+</h1>
        <p className='detail-text'>Total Users</p>
        </div>
        <div className="users">
          <h1 className='price'>$1.2M+</h1>
          <p className='detail-text'>Investment</p>
        </div>
        <div className="users">
          <h1 className='price'>$1.3M+</h1>
          <p className='detail-text'>Circulating Supply</p>
        </div>
        <div className="users">
          <h1 className='price'>$1.2M+</h1>
          <p className='detail-text'>Payout</p>
        </div>
        <div className="users">
          <h1 className='price'>$2.3M+</h1>
          <p className='detail-text'>Burning</p>
        </div>
      </div>
      <hr className='horizontal'/>
    </div>
  )
}
