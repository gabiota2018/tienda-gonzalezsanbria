import React from 'react'
import CartWidget  from './CartWidget';

function NavBar() {
	
  return (

    <div style={{width:'100%',height:'65px', background:'red',color:'white', textAlign:'center'}}>

		 <ul style={{listStyleType:'none'}}>
		  <li style={{float:'left', paddingRight:'10%',paddingLeft:'35%'}}>
			<a style={{color:'white'}} href="#">Pizzas    </a> 
		  </li>
		   <li style={{float:'left', paddingRight:'10%'}}>
			<a style={{color:'white'}}href="#">Bebidas</a>
		  </li>
		  <li style={{float:'left', paddingRight:'10%'}}>
			<a style={{color:'white'}}href="#">Sandwichs</a>
		  </li>
		    <li style={{float:'left', paddingLeft:'15%'}}>
			<a href="#"><CartWidget/></a>
		  </li>            
		</ul>

	   
    </div>
  )
}

export default NavBar;
