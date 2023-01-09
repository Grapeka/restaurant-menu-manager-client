import React, { useState, useRef, useCallback } from 'react';
import AppPage from '../../layouts/appPage/AppPage';
import { IMenu } from '../../types/menu';
import FoodTable from '../../components/foodTable/FoodTable';
import { store } from '../../redux/store';
import { useMenuSearch } from '../../hooks/useMenuSearch';

type Props = {};

export default function Home(props: Props) {
  const state = store.getState();
  const merchant = state.merchant;
  const token = state.auth;
  // console.log(merchant);
  // console.log(token);

  const [pageNumber, setPageNumber] = useState(1);
  const { menus, hasMore, loading } = useMenuSearch(pageNumber);

  const observer: React.MutableRefObject<IntersectionObserver | undefined> =
    useRef();
  const lastBookElementRef: React.RefCallback<HTMLDivElement | null> =
    useCallback(
      (node: HTMLDivElement | null) => {
        if (loading) return;
        if (observer.current) {
          console.log('disconnect');
          observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasMore) {
            console.log('visible');
            setPageNumber((prevPageNumber) => prevPageNumber + 1);
          }
        });
        if (node) {
          console.log('observe');
          observer.current.observe(node);
        }
      },
      [loading, hasMore]
    );

  return (
    <AppPage>
      <FoodTable menus={menus} lastBookElementRef={lastBookElementRef} />
      <div>{loading && 'Loading...'}</div>
    </AppPage>
  );
}
