import FProduct from "./FinalProduct";
function Product({ ArrayProduct }) {
  return (
    <>
      {ArrayProduct.map((items) => (
        <FProduct
          Name={items.Name}
          Brand={items.Brand}
          Price={items.Price}
        ></FProduct>
      ))}
    </>
  );
}
export default Product;
