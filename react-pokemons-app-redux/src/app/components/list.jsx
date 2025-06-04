import { memo } from "react";

function List({ items, renderItem }) {
  return (
    <>
      {items.map((item) => renderItem(item))}
    </>
  );
}

export default memo(List);

// export default memo(List, (prevProps, nextProps) => {
//   // Compare the length of items to determine if a re-render is necessary
//   return prevProps.items === nextProps.items;
// });