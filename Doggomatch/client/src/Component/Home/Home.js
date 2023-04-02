// import logo from './logo.svg';
import biz from '../../images/bizinsider.png'
import dog from '../../images/dog-img.jpg'
import iphone from '../../images/iphone6.png'
import lady from '../../images/lady-img.jpg'
import Login from '../Login/Login'
import "./Home.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/authContext'
import axios from 'axios'
import React, { useContext, useEffect, useState } from "react";

// import dog from './images/dog-img.jpg'
// import dog from './images/dog-img.jpg'
// import dog from './images/dog-img.jpg'


function Home() {


    const { currentUser, logout } = useContext(AuthContext);

    const [dogs,setDogs]= useState([])

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
      };
const getString = (desc) =>{
  var trimmedString = getText(desc).substring(0, 230);
return trimmedString;
}

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`/dogs`);
            console.log(res.data);
    
            setDogs(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, []);

      console.log(dogs)
const objj = [...dogs]


    let doggy= JSON.parse(localStorage.getItem("dog"))
    console.log(doggy)

    localStorage.setItem("dogs", JSON.stringify(dogs));

    let obj= JSON.parse(localStorage.getItem("dogs"))
    console.log(obj)


    return (
        <div className='completeContainer'>
            {/* <meta charSet="utf-8" />
    <title>TinDog</title>
    <link rel="stylesheet" href="css/styles.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossOrigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Edu+QLD+Beginner&family=Montserrat:ital,wght@0,400;0,900;1,500;1,800;1,900&display=swap"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    /> */}
            <section id="title">
                {/* <Login/> */}
                <div className="container-fluid1">
                    {/* Nav Bar */}
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="#">
                            AniMatch
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#pricing">
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link aaa" href="#myDogs">
                                        My Dogs
                                    </a>
                                </li>

                                <Link className="nav-link" to="/adddog">
                                    <button className="log">                  Add Your Dog
                                    </button>

                                </Link>
                                <li>
                                    {/* <Link to ="/login" className="nav-link">Login</Link> */}
                                    {currentUser != null ? (
                                        <span onClick={logout}><button className="log logoutt">LOGOUT</button>
                                        </span>
                                    ) : (
                                        <Link className="nav-link" to="/login">
                                            <button className="log">LOGIN</button>
                                        </Link>
                                    )}
                                </li>
                                <a className=" username  " href="#">
                                    {currentUser?.username}
                                </a>
                                <li className="nav-item dropdown" />
                            </ul>
                        </div>
                    </nav>
                    {/* Title */}
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="hah1">
                                Meet new and interesting dogs nearby.
                                <icon>
                                    {/* fa-brands not working maybe some prblem with cdn */}
                                    {/* <button
                  type="button"
                  className="btn btn-dark btn-lg download_button"
                >
                  <i className="fa-brands fa-apple" /> Download
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg download_button"
                >
                  <i className="fa-brands fa-windows" /> Download
                </button> */}
                                </icon>
                            </h1>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="title-image"
                                src={iphone}
                                alt="iphone-mockup"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Features */}
            <section id="features">
                <div className="row">
                    <div className="feature-box col-lg-4">
                        <i className="fa-solid fa-handshake-angle fa-6x icon" />
                        <h3>Easy to use.</h3>
                        <p>So easy to use, even your dog could do it.</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="fa fa-solid fa-circle-info fa-6x icon" />
                        <h3>Elite Clientele</h3>
                        <p>We have all the dogs, the greatest dogs.</p>
                    </div>
                    <div className="feature-box col-lg-4">
                        <i className="fa fa-bullseye fa-6x icon" />
                        <h3>Guaranteed to work.</h3>
                        <p>Find the love of your dog's life or your money back.</p>
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <section id="testimonials">
      <div
        id="testimonial-control"
        className="carousel slide"
        data-ride="carousel"
        data-interval={3000}
        data-pause="hover"
      >
        <div className="carousel-inner">
            {console.log(dogs)}

            <div className="carousel-item active c1">
                <h2>
                  {
                  getString(dogs[0]?.desc)}
                </h2>
                <img
                  className="testimonials-image"
                  src={`../upload/${dogs[0]?.img}`} 

                  alt="dog-profile"
                />
                {/* <div className='abc'>Breed - husky</div> */}
                <div className='abc'>Age - 13</div>
                <div>
                <button type="button" class="btn btn-primary">Connect</button>

                </div>

                {/* <em>Beverly, Illinois</em> */}
              </div>
        {dogs
            // .slice(pagination.start, pagination.end)
            .filter(function (posts) {
              return posts?.breed==doggy?.breed && doggy?.uid != posts?.uid  ;
            })
            // .slice(pagination.start, pagination.end)
            
            // .filter((item)=>keys.some((key)=>item[key].toLowerCase().includes(query)))
            .map((post) => (
              <>
              {/* <div>hsdih</div> */}
                <div className="carousel-item c1">
                   <div> <h2>
                      {getString(post?.desc)}
                    </h2>
                <img
                  className="testimonials-image"
                  src={`../upload/${post?.img}`}
                  alt="dog-profile"
                />
                <div className='abc'>Breed - {post?.breed}</div>
                <div className='abc'>Age - {post?.age}</div></div>
                <div>
                <button type="button" class="btn btn-primary m-4">Connect</button>

                </div>
              </div>
              </>
            // <div>hii</div>
            ))}


          {/* <div className="carousel-item  c1">
            <h2>
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img
              className="testimonials-image"
              src={lady}
              alt="dog-profile"
            />
            <em>Beverly, Illinois</em>
          </div> */}
          
        </div>
        <a
          className="carousel-control-prev"
          href="#testimonial-control"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </a>
        <a
          className="carousel-control-next"
          href="#testimonial-control"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </a>
      </div>
      {/* Press */}
      <section id="press">
        {/* <img className="press-loop" src={biz} alt="tc-logo" /> */}
        {/* <img className="press-loop" src={dog} alt="tnw-logo" /> */}
        {/* <img
          className="press-loop"
          src="images/bizinsider.png"
          alt="biz-insider-logo"
        />
        <img
          className="press-loop"
          src="images/mashable.png"
          alt="mashable-logo"
        /> */}
      </section>
    </section>





            {/* Pricing */}
            <section id="pricing">
                <div className="name">
                    <h2 style={{ color: "red" }}>A Plan for Every Dog's Needs</h2>
                    <p>Simple and affordable price plans for your and your dog.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 pricing-column">
                        <div className="card">
                            <div className="card-header">
                                <h3>Free</h3>
                            </div>
                            <div className="card-body">
                                <h2 className="price-box">Free</h2>
                                <p>5 Matches Per Day</p>
                                <p>10 Messages Per Day</p>
                                <p>Unlimited App Usage</p>
                            </div>
                            <div className="card-footer">
                                <button
                                    className="btn btn-lg btn-block btn-outline-dark"
                                    type="button"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 pricing-column">
                        <div className="card">
                            <div className="card-header">
                                <h3>Pro</h3>
                            </div>
                            <div className="card-body">
                                <h2 className="price-box">$49 / mo</h2>
                                <p>100 Matches Per Day</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                            </div>
                            <div className="card-footer">
                                {/* <button className="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button> */}
                                <button
                                    className="btn btn-lg btn-block btn-outline-dark"
                                    type="button"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pricing-column">
                        <div className="card">
                            <div className="card-header">
                                <h3>Pro Plus</h3>
                            </div>
                            <div className="card-body">
                                <h2 className="price-box">$99 / mo</h2>

                                <p>Unlimited Matches</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                            </div>
                            <div className="card-footer">
                                {/* <button className="btn btn-lg btn-block btn-dark" type="button">
                Sign Up
              </button> */}
                                <button
                                    className="btn btn-lg btn-block btn-outline-dark"
                                    type="button"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to Action */}



{/* Added Dogs */}



            <section id="testimonials myDogs">
            <div id='myDogHeading'>
                    My Dogs
                </div>
                
      <div
        id="testimonial-control"
        className="carousel slide"
        data-ride="carousel"
        data-interval={3000}
        data-pause="hover"
      >
        
        <div className="carousel-inner myDogs" id='myDogs'>
            {console.log(dogs)}

            {/* <div className="carousel-item active c1">
                <h2>
                  {
                  getString(dogs[0]?.desc)}
                </h2>
                <img
                  className="testimonials-image"
                  src={`../upload/${dogs[0]?.img}`} 

                  alt="dog-profile"
                />
                <div>Breed - husky</div>
                <div>Age - 13</div>
                <div>
                <button type="button" class="btn btn-primary">Connect</button>

                </div>

              </div> */}
        {dogs
            // .slice(pagination.start, pagination.end)
            .filter(function (posts) {
              return currentUser?.id == posts.uid  ;
            })
           
            .map((post) => (
              <div className='onedog'>
              {/* <div>hsdih</div> */}
                <div className="">
                   <div> <h2>
                      {/* {getString(post?.desc)} */}
                    </h2>
                <img
                  className="testimonials-image"
                  src={`../upload/${post?.img}`}
                  alt="dog-profile"
                />
                <div className="detail">
                <div >
                <div>Breed - {post?.breed}</div>
                <div>Age - {post?.age}</div></div >
                </div>
                </div>
                <div>
                {/* <button type="button" class="btn btn-primary">Connect</button> */}

                </div>
              </div>
              </div>
            // <div>hii</div>
            ))}


          {/* <div className="carousel-item  c1">
            <h2>
              My dog used to be so lonely, but with TinDog's help, they've found
              the love of their life. I think.
            </h2>
            <img
              className="testimonials-image"
              src={lady}
              alt="dog-profile"
            />
            <em>Beverly, Illinois</em>
          </div> */}
          
        </div>
        <a
          className="carousel-control-prev"
          href="#testimonial-control"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </a>
        <a
          className="carousel-control-next"
          href="#testimonial-control"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </a>
      </div>
      {/* Press */}
      <section id="press">
        {/* <img className="press-loop" src={biz} alt="tc-logo" /> */}
        {/* <img className="press-loop" src={dog} alt="tnw-logo" /> */}
        {/* <img
          className="press-loop"
          src="images/bizinsider.png"
          alt="biz-insider-logo"
        />
        <img
          className="press-loop"
          src="images/mashable.png"
          alt="mashable-logo"
        /> */}
      </section>
    </section>


            {/* Footer */}
            <section id="cta">
                <div className="card card-footer">
                    {/* <h5 class="card-header">Find the True Love of Your Dog's Life Today.</h5> */}
                    <div className="card-body">
                        <h3>Find the True Love of Your Pet's Life Today.</h3>
                        {/* <h5 class="card-title">Special title treatment</h5> */}
                        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}


                        {/* <button type="button" className="btn btn-dark btn-lg download_button">
            <i className="fa-brands fa-apple" /> Download
          </button>
          <button type="button" className="btn btn-dark btn-lg download_button">
            <i className="fa-brands fa-windows" /> Download
          </button> */}
                    </div>
                </div>
            </section>
            <footer id="footer">
                {/* <p>© Copyright TinDog</p> */}
            </footer>
        </div>

    );
}

export default Home;
