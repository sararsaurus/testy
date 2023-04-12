export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <p>{props.product.description}</p>
    </div>
  );
}
