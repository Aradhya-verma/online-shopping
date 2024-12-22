import React from 'react';
import { Link } from 'react-router-dom';
import {Button,Nav,Navbar,Form,Container} from 'react-bootstrap'

function Winter(){
    return (
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
          <Link className='text1' to="/blogs">Blogs</Link>
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
            <div className='product'>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='image/jacket.jpg' />
                    <p className='proim'>Price:1000Rs</p>
                    
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <button className='btnA'>Add To Cart</button>
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '} 
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='image/jacket10.jpg' />
                    <p className='proim'>Price:15000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\jacket7.jpg' />
                    <p className='proim'>Price:4000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='image/jacket3.jpg' />
                    <p className='proim'>Price:5000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
        </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='image/jacket8.jpg' />
                    <p className='proim'>Price:1500Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button> 
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='image/Jacket2.jpg' />
                    <p className='proim'>Price:800Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\Jacket15.jpg' />
                    <p className='proim'>Price:1400Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\jacket13.jpg' />
                    <p className='proim'>Price:3000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='image/jacket14.jpg' />
                    <p className='proim'>Price:2000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>View More</Button>{' '} 
            <button className='btnA'>Add To Cart</button> 
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='image/jacket9.jpg' />
                    <p className='proim'>Price:25000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\jacket16.jpg' />
                    <p className='proim'>Price:3500Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\jacket19.jpg' />
                    <p className='proim'>Price:2000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
        </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\jacket21.jpg' />
                    <p className='proim'>Price:4000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>View More</Button>{' '}
            <button className='btnA'>Add To Cart</button> 
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\jacket20.jpg' />
                    <p className='proim'>Price:1000Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='/image/jacket22.jpg' />
                    <p className='proim'></p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='/image/jacket23.jpg' />
                    <p className='proim'>Price:1999Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='/image/jacket24.jpg' />
                    <p className='proim'>Price:999Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button> 
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='/image/jacket25.jpg' />
                    <p className='proim'>Price:3999Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='/image/jacket26.jpg' />
                    <p className='proim'>Price:1599Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='/image/jacket28.jpg' />
                    <p className='proim'>Price:2990Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
        </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\jacket30.jpg' />
                    <p className='proim'>Price:499Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button> 
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='\image\jacket29.jpg' />
                    <p className='proim'>Price:599Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='/image/jacket31.jpg' />
                    <p className='proim'>Price:600Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
                </div>
                <div className='pro zoom'>
                    <img style={{height:"300px"}} src='/image/jacket33.jpg' />
                    <p className='proim'>Price:599Rs</p>
                    <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary"  style={{width:"120px"}} className='btnA'>Buy Now</Button>{' '}
            <button className='btnA'>Add To Cart</button>
        </div>


                </div>
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

export default Winter;