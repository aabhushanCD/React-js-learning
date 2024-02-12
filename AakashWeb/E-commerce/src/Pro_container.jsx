function Pro({ content }) {
  return (
    <>
      {content.map((item, index) => (
        <div className="pro" key={index}>
          <img src={`./img/products/n${index + 1}.jpg`} alt="" />
          <div className="des">
            <span>{item.Brand}</span>
            <h5>{item.Name}</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>{item.Price}</h4>
          </div>
          <a href="#" className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      ))}
    </>
  );
}

export default Pro;
