import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="home">
      <nav className="nav">
        <h1>CareFinder</h1>
        <div className="alignav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/FindHospital">Find Hospital</Link>
            </li>
          </ul>
        </div>
        <div className="btn">
          <Link to="./Login">
            <button>Log In</button>
          </Link>

          <Link to="/Signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </nav>
      ,
      <div className="second">
        <div className="homebody">
          <div className="firstdiv">
            <h1>Find the nearest hospital to you and make an appointment</h1>
            <h2>
              Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!{" "}
            </h2>
            <Link to="./FindHospital">
              {" "}
              <button>GET STARTED</button>
            </Link>
            <p>Learn more</p>
          </div>
          <div>
            <img src="../Rectangle1.png" className="rect1" alt="hospital" />
          </div>
        </div>
        <div className="seconddiv">
          <p>Find the nearest hospital</p>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
          <button>Search</button>
        </div>
      </div>
      <div className="thirddiv">
        <div>
          <img src="../Rectangle7.png" className="rect2" alt="hospital" />
        </div>
        <div>
          <img src="../Rectangle8.png" className="rect3" alt="hospital" />
        </div>
        <div className="thirdchild">
          <h1>Welcome to</h1>
          <h2>CareFinder</h2>
          <p>
            Carefinder is a platform where users can serach for hospitals in
            their areas, export hospitals details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <button>OUR SERVICES</button>
        </div>
      </div>
      <div className="fourthdiv">
        <div className="fth fth1">
          <i class="fas fa-hospital-alt"></i>
          <h2>Search Hospitals</h2>
          <p>Effortlessly Find The Best Hospital Near You</p>
        </div>
        <div className="fth fth2">
          <i class="fas fa-user-md"></i>
          <h2>Search Doctors</h2>
          <p>Find The Best Doctors In Your Area</p>
        </div>
        <div className="fth fth3">
          <i class="fas fa-user-friends"></i>
          <h2>Connect With Others</h2>
          <p>Connect With Others And Share Valuable Resources</p>
        </div>
        <div className="fth fth4">
          <i class="fas fa-ambulance"></i>
          <h2>Emergency</h2>
          <p>Find The Nearest Hospital In Case Of Emergency</p>
        </div>
      </div>
      <div className="fifthdiv">
        <div className="child1">
          <h1>How It works</h1>
          <div className="child2">
            <div className="child3">
              <div className="child3i">
                <img
                  src="../ellipse9.png"
                  className="ellipse9"
                  alt="hospital"
                />
                <h3>Find Hospital</h3>
                <p>
                  Find the best hospitals and doctors near you, our efficient
                  search engine provides you with the best results
                </p>
              </div>
              <div className="child3ii">
                <img src="../ellipse10.png" alt="hospital" />
                <h3>Save or share hospitals</h3>
                <p>
                  Carefinder allows users to save and share the list of
                  hospitals with others. Users can share the information via
                  email or by generating a shareable link
                </p>
              </div>
              <div className="child3iii">
                <img src="../ellipse11.png" alt="hospital" />
                <h3>Book Appointment</h3>
                <p>Book appointment easily by inputing correct detils</p>
              </div>
              <div className="child3iv">
                <img src="../ellipse12.png" alt="hospital" />
                <h3>Make a visit</h3>
                <p>
                  Appointment confirmed, then make a visit to your selected
                  hospitals o doctors
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sixthdiv">
          <div className="sixthdivi">
            <h1>QUALIFIED DOCTORS</h1>
            <div className="sixthdiv1">
              <div className="imgdesign">
                <img src="../Ellipse14.png" alt="hospital" />
                <h3>Dr Cole Ben</h3>
                <p>Pediatrician</p>
                <p>Goodwill Hospital</p>
              </div>
              <div className="imgdesign">
                <img src="../Ellipse15.png" alt="hospital" />
                <h3>Dr Lisa Dan</h3>
                <p>Pediatrician</p>
                <p>Goodwill Hospital</p>
              </div>
            </div>
            <div className="sixthdiv2">
              <div className="imgdesign">
                <img src="../Ellipse16.png" alt="hospital" />
                <h3>Dr Kate Miles</h3>
                <p>Pediatrician</p>
                <p>Goodwill Hospital</p>
              </div>
              <div className="imgdesign">
                <img src="../Ellipse17.png" alt="hospital" />
                <h3>Dr steve Robinson</h3>
                <p>Pediatrician</p>
                <p>Goodwill Hospital</p>
              </div>
            </div>
          </div>
          <div className="sixthdivii">
            <button>Book an Appointment</button>
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Choose Hospital" />
            <input type="text" placeholder="Choose Department" />
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="text" placeholder="Select Date" />
            <input type="text" placeholder="Select Time" />
            <button>Book Appointment Now</button>
          </div>
        </div>
        <div className="seventhdiv">
          <p>Testimonials</p>
          <h1>What Our Users Say</h1>
        </div>
        <div className="seventhdivi">
          <div className="seventhchild">
            <p>
              Finding the right hospital has never been easier! With this
              website, I was able to locate a nearby hospital quickly and
              efficiently. The search feature is user-friendly, and it provided
              me with all the essential information I needed. Highly recommended
            </p>
            <img src="../Ellipse13iii.png" alt="hospital" />
            <p>Sarah M.</p>
          </div>
          <div className="seventhchild">
            <p>
              I can’t express how grateful i am for carefinder website. When i
              needed urgent medical care while travelling, it helped me locate
              the nearest hospital in a matter of seconds. The accurate results
              and detailed directions saved me valuable time and ensured i
              received the care i needed
            </p>
            <img src="../Ellipse13ii.png" alt="hospital" />
            <p>John D.</p>
          </div>
          <div className="seventhchild">
            <p>
              I recently moved to a new city and had no idea where to go for
              medical assistance, my friend shared me some hospital details
              using the carefinder website. It made my life easier, i was able
              to fine reputable hospitals near me effortlessly. The website’s is
              user friendly interface and comprehnsive search gave me peace of
              mind. I highly recommend.
            </p>
            <img src="../Ellipse13i.png" alt="hospital" />
            <p>Emilly T.</p>
          </div>
        </div>
        <div className="lastdiv">
          <div className="lastdivi">
            <h3>CareFinder</h3>
            <p>
              Plot 42, Akinza Street, <br />
              Victoria island, Lagos. <br />
              +2349167351788
            </p>
          </div>
          <div className="lastdivi">
            <h3>About Us</h3>
            <p>
              News & Media <br /> Contact Us <br /> Privacy Policy <br /> Terms
            </p>
          </div>
          <div className="lastdivi">
            <h3>Quick Links</h3>
            <p>
              My account <br /> Book an appointment <br /> Library{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
