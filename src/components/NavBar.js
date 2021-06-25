import React from 'react'
import CartWidget  from './CartWidget';

function NavBar() {
	
  return (

    <div style={{width:'100%',height:'100px', background:'red',color:'white'}}>
	 <nav class="navbar navbar-expand-sm navbar-light bg-light">
		 <ul class="navbar-nav">
		  <li class="nav-item">
			<a class="nav-link" href="#">Pizzas</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Bebidas</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Sandwichs</a>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#"><CartWidget/></a>
		  </li>            
		</ul>
	  </nav>
	   
    </div>
  )
}

export default NavBar;
