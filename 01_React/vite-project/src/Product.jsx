const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {

  // 바로 map 돌려도 가능
  // 꼭 유니크한 키가 필요하다.
  return (
    <ul>
      {products.map(product => (
      <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
  // const listItems = products.map(product =>
  //   <li key={product.id}>
  //     {product.title}
  //   </li>
  // );
  
  // return (
  //   <ul>{listItems}</ul>
  // );
}
