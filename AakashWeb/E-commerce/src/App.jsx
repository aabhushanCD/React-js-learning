import "./App.css";
import Hero from "./components/hero";
import Header from "./components/Header";
import Features from "./components/features";
import Product from "./components/Product";
import Banner from "./components/Banner";
import Pro from "./Pro_container";
function App() {
  let arrayProduct = [
    {
      Name: "Polo T-Shitr",
      Price: "Rs.10000",
      Brand: "Addidas",
    },
    {
      Name: " T-Shitr",
      Price: "Rs.100",
      Brand: "Addidas",
    },
    {
      Name: "Polo T",
      Price: "Rs.1000",
      Brand: "Addidas",
    },
    {
      Name: "Polo",
      Price: "Rs.10000",
      Brand: "Addidas",
    },
    {
      Name: "Shitr",
      Price: "Rs.10000",
      Brand: "Addidas",
    },
    {
      Name: "loT",
      Price: "Rs.10",
      Brand: "Addidas",
    },
    {
      Name: "Polo T-Shitr",
      Price: "Rs.10000",
      Brand: "Addidas",
    },
    {
      Name: "Polo T-Shitr",
      Price: "Rs.10000",
      Brand: "Addidas",
    },
  ];

  return (
    <>
      <Header></Header>

      <Hero></Hero>
      <section id="feature" class="section-p1">
        <Features></Features>
        <Features></Features>
        <Features></Features>
        <Features></Features>
      </section>
      <section id="product1" class="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="pro-container">
          <Product ArrayProduct={arrayProduct}></Product>
        </div>
      </section>

      <Banner></Banner>
      <section id="product1" class="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="pro-container">
          <Pro></Pro>
          <Pro></Pro>
          <Pro></Pro>
          <Pro></Pro>
          <Pro></Pro>
          <Pro></Pro>
          <Pro></Pro>
          <Pro></Pro>
        </div>
      </section>

      <section id="sm-banner" class="section-p1">
        <div class="banner-box">
          <h4>Crazy deals</h4>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button class="white">Learn More</button>
        </div>
        <div class="banner-box banner-box2">
          <h4>spring summer</h4>
          <h2>upcomming seasons</h2>
          <span>The best classic dress is on sale at cara</span>
          <button class="white">Collection</button>
        </div>
      </section>

      <section id="banner3">
        <div class="banner-box">
          <h2>SEASON SALE</h2>
          <h3>Winter Collection -50 % OFF</h3>
        </div>
        <div class="banner-box banner-box2">
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <h3>Spring / Summer 2024</h3>
        </div>
        <div class="banner-box banner-box3">
          <h2>T-SHIRTS</h2>
          <h3>New Trendy Prints</h3>
        </div>
      </section>

      <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and
            <span>special offers.</span>
          </p>
        </div>
        <div class="form">
          <input type="text" placeholder="Your email address" />
          <button class="normal">Sign Up</button>
        </div>
      </section>

      <footer class="section-p1">
        <div class="col">
          <img class="logo" src="./img/logo.png" alt="" />
          <h4>Contact</h4>
          <p>
            <strong>Address: </strong> 562 Wellington Road, Street 32, San
            Fransisco
          </p>
          <p>
            <strong>Phone: </strong> +01 2222 365 /(+91) 01 2345 6789
          </p>
          <p>
            <strong>Hours: </strong> 10:00 - 18:00, Mon - Sat
          </p>
          <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-x-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-pinterest-p"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div class="col">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="col">
          <h4>My Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
        </div>
        <div class="col install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div class="row">
            <img src="./img/pay/app.jpg" alt="" />
            <img src="./img/pay/play.jpg" alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src="./img/pay/pay.png" alt="" />
        </div>

        <div class="copyright">
          &copy 2024. cara - HTML CSS Ecommerce Project
        </div>
      </footer>
    </>
  );
}

export default App;
