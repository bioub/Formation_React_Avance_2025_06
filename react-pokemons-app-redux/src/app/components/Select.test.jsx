import { afterEach, expect, test, vi } from 'vitest';
import Select from './Select';
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

test('Select component renders', () => {
  render(
    <Select
      items={['Item 1', 'Item 2', 'Item 3']}
      value="Item 2"
      onSelected={() => {}}
    />
  );

  // expect(screen.queryByText('Item 2')).not.toBeNull();
  // expect(screen.queryByText('Item 2')).toBeInTheDocument();
  expect(screen.queryByText('Item 2')).toBeVisible();
});

test('Select component menu opens', () => {
  render(
    <Select
      items={['Item 1', 'Item 2', 'Item 3']}
      value="Item 2"
      onSelected={() => {}}
    />
  );

  fireEvent.click(screen.getByText('Item 2'));
  expect(screen.queryByText('Item 1')).toBeVisible();
  expect(screen.queryAllByText('Item 2')[1]).toBeVisible();
  expect(screen.queryByText('Item 3')).toBeVisible();
});

test('Select component calls onSelected', () => {
  const onSelectedMock = vi.fn();

  render(
    <Select
      items={['Item 1', 'Item 2', 'Item 3']}
      value="Item 2"
      onSelected={onSelectedMock}
    />
  );

  fireEvent.click(screen.getByText('Item 2'));
  fireEvent.click(screen.getByText('Item 1'));

  expect(onSelectedMock).toHaveBeenCalledTimes(1);
  expect(onSelectedMock).toHaveBeenCalledWith('Item 1');
});

// import { createRoot } from 'react-dom/client';
// import { act } from 'react-dom/test-utils';

// test('Select component works', () => {
//   const rootElement = document.createElement('div');
//   document.body.appendChild(rootElement);

//   const root = createRoot(rootElement);

//   act(() => {
//     root.render(
//       <Select
//         items={['Item 1', 'Item 2', 'Item 3']}
//         value="Item 2"
//         onSelected={() => {}}
//       />
//     );
//   });

//   const selectedElement = rootElement.querySelector('.selected');
//   expect(selectedElement).not.toBeNull();
//   expect(selectedElement.textContent).toBe('Item 2');
// });
