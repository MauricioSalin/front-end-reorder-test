import * as useProduct from '../index';

import { act } from '@testing-library/react';
import { data } from '../../../data/products.json';
import { renderHook } from '@testing-library/react-hooks';

const mockFetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data,
      }),
  }),
) as jest.Mock;

const mockConsoleError = jest
  .spyOn(console, 'error')
  .mockImplementation() as jest.Mock;

const setupFetchMock = (behavior: 'resolve' | 'reject' = 'resolve') => {
  if (behavior === 'resolve') {
    global.fetch = mockFetch;
  } else {
    global.fetch = mockConsoleError;
  }
};

beforeAll(() => {
  global.fetch = mockFetch;
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe('useProduct hook', () => {
  it('should fetch and return product data correctly', async () => {
    setupFetchMock('resolve');

    const { result, waitForNextUpdate } = renderHook(() =>
      useProduct.default(),
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.products).toHaveLength(20);
  });

  it('should handle selecting an item', async () => {
    setupFetchMock('resolve');

    const { result, waitForNextUpdate } = renderHook(() =>
      useProduct.default(),
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);

    const selectedItem = result.current.products[4];

    await act(async () => {
      await result.current.handleSelectItem(selectedItem);
    });

    await waitForNextUpdate();

    expect(result.current.selectedProduct.identifier).toEqual(
      selectedItem.identifier,
    );
    expect(result.current.products[0].identifier).toEqual(
      result.current.selectedProduct.identifier,
    );
  });

  it('should handle selecting an item with related products', async () => {
    setupFetchMock('resolve');

    const { result, waitForNextUpdate } = renderHook(() =>
      useProduct.default(),
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);

    const selectedItem = result.current.products[8];

    await act(async () => {
      await result.current.handleSelectItem(selectedItem);
    });

    await waitForNextUpdate();

    expect(selectedItem.parent_identifier).toEqual(
      result.current.products[2].parent_identifier,
    ); // check business rule (selecting first, listed below)

    expect(result.current.products).toHaveLength(20); // in this case, we know that there are more than 20 options in the mock data
  });

  it('should handle clearing items', async () => {
    setupFetchMock('resolve');

    const { result, waitForNextUpdate } = renderHook(() =>
      useProduct.default(),
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    await act(async () => {
      await result.current.handleClearItems();
    });

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.products).toHaveLength(20);
    expect(result.current.products[0]).toEqual(result.current.selectedProduct);
  });

  it('should handle mock data fetch error', async () => {
    setupFetchMock('reject');

    const { result, waitForNextUpdate } = renderHook(() =>
      useProduct.default(),
    );

    await waitForNextUpdate();

    expect(result.current.products).toHaveLength(0);
    expect(result.current.loading).toBe(false);
  });
});
