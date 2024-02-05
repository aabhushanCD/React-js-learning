function FProduct({ Name, Brand, Price }) {
  return (
    <>
      <div class="pro">
        <img src="./img/products/f1.jpg" alt="" />
        <div class="des">
          <span>{Brand}</span>
          <h5>{Name}</h5>
          <div class="star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <h4>{Price}</h4>
        </div>
        <a href="#" class="cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </>
  );
}
export default FProduct;
