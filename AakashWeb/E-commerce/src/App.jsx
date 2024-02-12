import "./App.css";
import Hero from "./components/hero";
import Header from "./components/Header";
import Features from "./components/features";
import Product from "./components/Product";
import Banner from "./components/Banner";
import Pro from "./Pro_container";
import Footer from "./components/Footer";
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
  let Pro_ = [
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
          <Pro content={Pro_}></Pro>
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
      <Footer></Footer>
    </>
  );
}

export default App;
