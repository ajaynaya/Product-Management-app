const ProductItem = ({ product, onDelete, onEdit }) => {
    return (
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button onClick={() => onEdit(product.id)}>Edit</button>
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    );
  };
  
  export default ProductItem;