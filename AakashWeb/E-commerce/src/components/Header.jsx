export default function Header() {
  return (
    <>
      <section id="header">
        <a href="#">
          <img src="./img/logo.png" alt="" />
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a class="active" href="index.html">
                Home
              </a>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <a href="blog.html">Blog</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li id="lg-bag">
              <a href="cart.html">
                <i class="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
            <a href="#" id="close">
              <i class="fa-solid fa-xmark"></i>
            </a>
          </ul>
        </div>
        <div id="mobile">
          <i class="fa-solid fa-bag-shopping"></i>
          <i id="bar" class="fa-solid fa-bars"></i>
        </div>
      </section>
    </>
  );
}
