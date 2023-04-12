export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <p>{props.product.description}</p>
      <form>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
          Price: $ <input defaultValue={props.product.price} name="price" type="text" />
          Image: <input defaultValue={props.product.image} name="image" type="text" />
          Description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>
        <button type="submit">Update product</button>
      </form>
    </div>
  );
}
