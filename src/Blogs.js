import React from "react";
import {Link} from 'react-router-dom'
import {Button,Nav,Navbar,Form,Container} from 'react-bootstrap'

function Blogs(){
    return(
        <div>
           
                {/* header start */}
                <Navbar expand="lg" className="navbar">
            <Container fluid>
                <Navbar.Brand href="#"><img src="image/lo.jpg" alt="" id='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px'}}
                    navbarScroll
                >
                <Link className='text1' to="/home">Home</Link>
                    <Link className='text1' to="/about">About</Link>
                    <Link className='text1' to="/Product">Product</Link>
                    <Link className='text1' to="/Category">Category</Link>
                    {/* <Link className='text1' to="/review">Review</Link> */}
                <Link className='text1' to="/Blogs">Blogs</Link>
                <Link className='text1' to="/login">Login</Link>
                <Link className='text1' to="/signup">Signup</Link>
                    
                </Nav>
         
            <Form className="d-flex">
            <i className='bx bxs-cart icons'></i>
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="success ">Search</Button>
            </Form>
            </Navbar.Collapse>
            </Container>
            </Navbar>

                {/* header end */}
                {/* meddle start */}
               <div className="blogsim">
                   <img src="image/womendressshop.jpg"  alt=""  className="blogsph"/> 
                 </div>
                  <div className="blogspara">  
                   <h1>WELCOME To Women Wear Store </h1>
                   <p>Establishments Primarily engaged in the retail sale of a general line of women's ready-to-wear clothing.
                     This industry also includes establishments primarily engaged in the specialized retail sale 
                     of women's coats, suits, and dresses. </p>
                     <ol>
                      <li>Bridal shops, except custom-retail</li>
                      <li>Clothing, readyto-wear: women's-retail</li>
                      <li>Dress shop-retail</li>
                      <li>Matrenity shops-retail</li>
                      <li>Ready-to-wear stores women's-retail</li>
                    
                     </ol>
                  </div>

                  <div className="blogspara">
                   <h1>Welcome To Men Shoes Store </h1>
                   <p>Establishments Primarily engaged in the retail sale of men's footwear, including athletic footwear.
                     These establishments frequently carry accessory line. 
                     of women's coats, suits, and dresses. </p>
                     <ol>
                     <li>Athletic shoe stores-retail</li>
                     <li>Footwear stores-retail</li>
                     <li>Shoe stores-retail</li>
                     
                     </ol>
                 </div>
                  <div className="blogsim">
                  <img src="image/shoes shop.jpg"  alt=""  className="blogsph"/> 
                  
                  </div>

                  <div className="blogsim">
                  <img src="image/sandel shop.jpg"  alt=""  className="blogsph"/> 
                 </div>
                  <div className="blogspara">
                  <h1>Welcome To Women Shoes Store </h1>
                  <p>Establishments Primarily engaged in the retail sale of men's footwear, including athletic footwear.
                     These establishments frequently carry accessory line. 
                     of women's coats, suits, and dresses. </p>
                     <ol>
                      <li>Athletic shoe stores-retail</li>
                      <li>Footwear stores-retail</li>
                      <li>Shoe stores-retail</li>
                     </ol>
                  </div>

                  <div className="blogsim">
                  <h1>Welcome To Women Winter Dresses  </h1>
                  <p>Establishments Primarily engaged in the retail sale of men's footwear, including athletic footwear.
                     These establishments frequently carry accessory line. 
                     of women's coats, suits, and dresses. </p>
                     <ol>
                      <li>Athletic shoe stores-retail</li>
                      <li>Footwear stores-retail</li>
                      <li>Shoe stores-retail</li>
                     </ol>
                 
                 </div>
                  <div className="blogspara">
                  <img src="image/wintershop.jpg"  alt=""  className="blogsph"/> 
                  </div>

                  <div className="blogsim">
                  <img src="image/makeupshop.jpg"  alt=""  className="blogsph"/> 
                 </div>
                  <div className="blogspara">
                  <h1>Welcome To Women Beauty shop  </h1>
                  <p>Establishments Primarily engaged in the retail sale of men's footwear, including athletic footwear.
                     These establishments frequently carry accessory line. 
                     of women's coats, suits, and dresses. </p>
                     <ol>
                      <li>Athletic shoe stores-retail</li>
                      <li>Footwear stores-retail</li>
                      <li>Shoe stores-retail</li>
                     </ol>
                  </div>


                {/* meddle end */}
                 {/*start footer */}

     <footer id='footer'>
        <div className='footer'>
          <h2 id='h2'>COUNTACT US</h2>
          <p  className='a2'>Email<a href='' className='a2'>aradhyaverma532@gmail.com</a></p>
          <p  className='a2'>Phone:<a href='' className='a2'>+91 8865349863</a></p>
          <p  className='a2'>Location:<a href='' className='a2'>Some House,2-B Ballia;221717 UP India</a></p>
        </div>
        <div className='footer'>
          <h2 id='h2'>MY ACCOUNT</h2>
          <a className='a2'>Privacy policy</a><br/><br/>
          <a href='' className='a2'>Terms & Conditions </a><br/><br/>
          <a href='' className='a2'>Terms & Shipping Policy </a><br/><br/>
          <a href='' className='a2'>Exchange / Return </a><br/><br/>

        </div>
        <div className='footer'>
          <h2 id='h2'>SHOP</h2>
          <a href=''className='a2'>Man</a><br/><br/>
          <a href=''className='a2'>Woman</a><br/><br/>
          <a href=''className='a2'>Kid</a><br/><br/>
          <a href=''className='a2'>Shopes & Bags</a><br/><br/>
          <a href=''className='a2'>Kitechan Appllances</a><br/><br/>
        </div>
        <div className='footer'>
          <h3 id='h2'>GET TO KNOW US</h3>
          <a href=''className='a2'>About Us</a><br/><br/>
          <a href=''className='a2'>Careers</a><br/><br/>
          <a href=''className='a2'>Press Releases</a><br/><br/>

        </div>
        <div className='footer'>
          <h2 id='h2'>HELP</h2>
          <a href=''className='a2'>Track Your Order</a><br/><br/>
          <a href=''className='a2'>Frequently Asked Question</a><br/><br/>
          <a href=''className='a2'>Returns</a><br/><br/>
          <a href=''className='a2'>Cancellation</a><br/><br/>
          <a href=''className='a2'>Payment</a><br/><br/>
          <a href=''className='a2'>Customer Care</a><br/><br/>

        </div>
     </footer>
     <div className="footer-icons">
          <div className="icon-foot icn"><i className="bi bi-facebook"></i>
          <i className="bi bi-whatsapp icn"></i>
          <i className="bi bi-twitter icn"></i>
          <i className="bi bi-instagram icn"></i>
          <i className="bi bi-github icn"></i>
         </div>
     </div>
   
     {/*end footer */}
           
        </div>
    );
}
export default Blogs;