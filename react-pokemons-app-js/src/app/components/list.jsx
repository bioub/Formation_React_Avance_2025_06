export default function List({ items, renderItem }) {
  return (
    <>
      {items.map((item) => renderItem(item))}
    </>
  );
}