import './App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import {Button,Nav,Navbar,Form,Container} from 'react-bootstrap'





function Main() {
    return (
  <>
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
            <Button variant="primary " className='me-2'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  {/* header end */}

  
    <Carousel>
      <Carousel.Item  className='img'>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="/image/wel.jpg" alt='image'/> 
        {/* <Carousel.Caption>
          <h1 className='text-dark'>60 %  off on all Clothing Brands</h1>
          <p className='text-dark'>Offer valid for 16th of May</p>
          <Link className='text1' to="/Product"><Button variant="outline-warning">Shopnow</Button></Link>
        </Carousel.Caption> */}

      </Carousel.Item>
      <Carousel.Item>
      <img src="/image/wel3.jpg" alt='image'/> 
      <Carousel.Caption>
          <h1 className='text-success'>30%  off on all MakeUp Brands</h1>
          <p className='text-primary'>Offer valid for 16th of May</p>
          <Link className='text1' to="/Product"><Button variant="warning">Shopnow</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="image/wel2.jpg" alt='image'/> 
      <Carousel.Caption>
      <h1 className='text-dark'>60 %  off on all Clothing Brands</h1>
          <p className='text-primary'>Offer valid for 16th of May</p>
          <Link className='text1' to="/Product"><Button variant="warning">Shopnow</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
     
       
    </Carousel>
    <br/>

  
    <div className='manfasion'>Man Fashion</div>

    <CardGroup >
      <Card >
        <Card.Img variant="top" src="image/Mp.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Shirt</Card.Title>
          <Card.Text>
            <a href='' className='aa'>
            Prexacreation Men Solid Formal Light Marron Shirt
            </a><br/>
            <span>12$</span> <br/>
            {/* <span>⭐⭐⭐⭐</span> */}
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>

          
          </Card.Text>
         
        </Card.Body>
        
      </Card>
      <Card className='shoesimg'>
        <Card.Img variant="top" src="image/shoes.jpg" className='im zoom' />
        <Card.Body>
          <Card.Title>Shoes</Card.Title>
          <a href='' className='aa'>
          BROWN DERBY SHOES 80449 RAIN
          </a><br/>
          <span>12$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        

      </Card>
      <Card>
        <Card.Img variant="top" src="image/boot.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Men Boot</Card.Title>
          <a href='' className='aa'>
          Pair of African Field Boots 'the Road King' in Tan Leather For Sale at ...
  
          </a><br/>
          <span>12$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card >
        <Card.Img variant="top" src="image/shirt1.jp.png"  className='im zoom' />
        <Card.Body>
         
          <a href='' className='aa'>
              Men blazer
          </a><br/>
          <span>15$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '}  
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
    </CardGroup >

  {/* ====================================================== */}
  <div className='manfasion'>Woman Fashion</div>
  <CardGroup >
      <Card  className='hov'>
        <Card.Img variant="top" src="image/blazer.jpg"  className='im zoom'/>
        <Card.Body>      
          <a href='' className='aa'> 
          Woman Blazer Formal
          </a>
          <br/>
          <span>12$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card className='shoesimg'>
        <Card.Img variant="top" src="image/shirtwomen.jpg" className='im zoom' />
        <Card.Body>
          <Card.Title>T-Shirt</Card.Title>
          <a href='' className='aa'>
          Glidan Ladies Heavy Cotton 100% Cotton long sleeve t-shirt
          </a>  <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="image/shute.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Patiala Suit</Card.Title>
          <a href='' className='aa'>
           Phulkari Punjabi suits, Patiala Salwar Suits, Patiala suit Designs
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="image/sandals.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Sandel </Card.Title>
          <a href='' className='aa'>
           Sandel for Women, The Best Option FOR women
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
    </CardGroup >
  {/* ========================================================= */}
    <Card  className='img' >
      <Card.Header></Card.Header>
      <Card.Body >
      <Card className="text-center ">
        <Card.Img variant="top" src="image/watch.jpg"   className='imgW'/>
      </Card>
       
      </Card.Body>
    
    </Card >
    {/*=======================================================  */}
    <div className='manfasion'>Watch</div>
    <CardGroup >
      <Card  className='hov'>
        <Card.Img variant="top" src="image/watch.jpg.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Swiss track Analog Watch</Card.Title>
          <a href='' className='aa'>
           Swiss track analog watch-for Men & Women STT-6
          </a><br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card className='shoesimg'>
        <Card.Img variant="top" src="image/watch2.jpg" className='im zoom' />
        <Card.Body>
          <Card.Title>Men watch</Card.Title>
          <a href='' className='aa'>
           Preamium brand -Analogue Men's Watch (Black Dial Multi colored Strap)
          </a><br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="image/watch3.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Analog Watch</Card.Title>
          <a href='' className='aa'>
           Forvi Impex Avio series Analog Watch - For Boys new avo gold modern corporatin Analog Watch
          </a><br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="image/watch4.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Luxry Men Women Watch</Card.Title>
          <a href='' className='aa'>
            Fashion Lovers Style DEsign Watches Top brand Luxary Men Women Watch
          </a><br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
    </CardGroup >

    {/* ========================================================= */}
    <div className='manfasion'>Clock</div>
    <CardGroup >
      <Card  className='hov'>
        <Card.Img variant="top" src="image/clock1.jpeg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Wall Clock</Card.Title>
          <a href='' className='aa'>
            R&P ENTEPRISE Analog 65cm X 35 cm Wall Clock (Black, Red, Without Glass, Standerd)
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card className='shoesimg'>
        <Card.Img variant="top" src="image/clock2.jpeg" className='im zoom' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <a href=''className='aa'>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '}  
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="image/clock5.jpeg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Pendulum Wall Clock</Card.Title>
          <a href='' className='aa'>
           Three Secondz Analog 52cm X 31cm Wall Clock(Brown, Without Glass,Pendulum)
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '}  
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card  className='hov'>
        <Card.Img variant="top" src="image/clock6.jpeg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Standard Wall Clock</Card.Title>
          <a href='' className='aa'>
          APPISHOPY Analog 31 cm X 24 cm Wall Clock(Multicolor, With Glass,Standard)
          
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '}  
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
    </CardGroup >
    {/* ************************second slider**************************** */}
    
  
    <Carousel data-bs-theme="dark" className='card3'>
      <Carousel.Item className='card3'>
        <img
          className="d-block "
          src="image/sli4.jpg.jpg"
          alt="First slide"
          style={{height:500}}
          
        />
          <Carousel.Caption>
          <h1 className='text-dark'>60 %  off on all Clothing Brands</h1>
          <p className='text-dark'>Offer valid for 16th of May</p>
          <Link className='text1' to="/Product"><Button variant="outline-warning">Shopnow</Button></Link>
        </Carousel.Caption>
      
      
      </Carousel.Item>
      <Carousel.Item className='card3'>
       
        <img
          className="d-block "
          src="image/sli3.jpg.jpg"
          alt="Second slide"
          style={{height:500}}
        />
          <Carousel.Caption>
          <h1 className='text-dark'>60 %  off on all Clothing Brands</h1>
          <p className='text-dark'>Offer valid for 16th of May</p>
          <Link className='text1' to="/Product"><Button variant="outline-warning">Shopnow</Button></Link>
        </Carousel.Caption>
    
       
      </Carousel.Item>
      <Carousel.Item className='card4'>
        <img
          className="d-block "
          src="image/sli.jpg.jpg"
          alt="Third slide"
          style={{height:450}}
        />
          <Carousel.Caption>
          <h1 className='text-dark'>60 %  off on all Clothing Brands</h1>
          <p className='text-dark'>Offer valid for 16th of May</p>
          <Link className='text1' to="/Product"><Button variant="outline-warning">Shopnow</Button></Link>
        </Carousel.Caption>
       
      </Carousel.Item>
    </Carousel>
     {/* ========================================================= */}
     <div className='manfasion'>Kid Fashion</div>
     <CardGroup >
      <Card  className='hov'>
        <Card.Img variant="top" src="image/boykid2.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title></Card.Title>
          <a href='' className='aa'>
           Boy Faison
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card className='shoesimg'>
        <Card.Img variant="top" src="image/lidfroke5.jpg.jpg" className='im zoom' />
        <Card.Body>
          <Card.Title></Card.Title>
          <a href=''className='aa'>
            Froke for Girl
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="image/kid3.jpeg"  className='im zoom'/>
        <Card.Body>
          <Card.Title></Card.Title>
          <a href='' className='aa'>
          Party wear Dresses 
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '}  
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card  className='hov'>
        <Card.Img variant="top" src="image/kidfroke4.jpg.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title></Card.Title>
          <a href=''className='aa'>
              Girl froke (10 year)
          </a> <br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
    </CardGroup >
    {/* **************************************************** */}
     
      {/* ========================================================= */}
      <div className='manfasion'>Beauty Products</div>
    <CardGroup >
      <Card  className='hov'>
        <Card.Img variant="top" src="image/makeup.jpg.jpeg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Eyeshadow</Card.Title>
          <a href='' className='aa'>
           SKINPLUS eyeshadoe Palette 150G(multicolor)
          </a><br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card className='shoesimg'>
        <Card.Img variant="top" src="image/beuty1.jpeg" className='im zoom' />
        <Card.Body>
          <Card.Title>Eyeconic Makeup kit</Card.Title>
          <a href='' className='aa'>
           Lakeme Ananyas Eyeconic Makeup Kit (Kajal, Ligqid Eyeliner, Curling Mascara, 15g)
          </a><br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '}  
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="image/makeup3.jpg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Cosmetics Storage Box</Card.Title>
          <a href='' className='aa'>
           Exegin Enteriprise Cosmetics Organizer Protable Drawer costmetic
           StorageBox Waterproof make-up organizer(Color May Vary)
           Acrylonitrille Butadiene Styrene Acrylc
          </a><br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i>
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '}  
            <button className='btnA'>Add To Cart</button>
        </Card.Body>
        
      </Card>
      <Card  className='hov'>
        <Card.Img variant="top" src="image/makeup4.jpeg"  className='im zoom'/>
        <Card.Body>
          <Card.Title>Valhalla Combo Makeup</Card.Title>
          <a href=''className='aa'>
           Valhalla 12 iteam makeup combo fixer compact poweder concealer
           serum lipstick.
          </a><br/>
          <span>13$</span> <br/>
          <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-heart"></i> 
            <Button variant="outline-primary" className='btnA'>Buy Now</Button>{' '} 
            <button className='btnA'>Add To Cart</button> 
            <i className='bi bi-like'></i> 
        </Card.Body> 
      </Card>
    </CardGroup >
    {/* **************************************************** */}
  
    {/* start middel */}
    <slider>
    <div id='slider1'>
      <div className='slider1'>
        <img src="image/sari1.jpg" alt="" className='imgS'></img>
        <a href='#'>
          
        </a>
      </div>
      <div className='slider1'>
      <img src="image/shirt1.jp.png" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/boykid2.jpg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/froke.jpg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/womenfrok1.jpeg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/womensute1.jpg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/sandel3.jpeg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/sandel4.jpeg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/saree2.jpg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/top2.jpg.jpg" alt="" className='imgS'></img> 
      </div>
      <div className='slider1'>
      <img src="image/shirt7.jpg.jpg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/shirt4.jpg.jpg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/shitt5.jpg.jpg" alt="" className='imgS'></img>
      </div>
      <div className='slider1'>
      <img src="image/top1.jpg.jpg" alt="" className='imgS'></img>
      </div>
    </div>
    
    </slider>

    {/* end middel */}
     
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
     


    
       </>
     );
   }
  export default Main;