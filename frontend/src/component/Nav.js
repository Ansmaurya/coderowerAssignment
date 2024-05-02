import React from 'react'
import { Link} from 'react-router-dom';

 function Nav() {
  return (
    <div className="nav-ul">
        <h1>Hi There</h1>

        <ul>
        <li><Link to="/">Product<Link/></Link></li>
        {/* <li><Link to="/product">Product<Link/></Link></li> */}
        <li><Link to="/update">Update Product<Link/></Link></li>
      
                </ul>
    </div>
  )
}
export default Nav;