import { useState, useEffect } from 'react';
import { IMenu } from '../types/menu';
import axios from 'axios';

export const useMenuSearch = (pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [menus, setMenus] = useState<IMenu[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;
    axios({
      method: 'POST',
      url: `http://localhost:8000/menu/page`,
      data: {
        page: pageNumber,
      },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setMenus((prevMenus: any) => {
          return [...new Set([...prevMenus, ...res.data.menuItems])];
        });
        console.log(res.data.menuItems);
        console.log(res.data.menuItemsCount);

        setHasMore(res.data.menuItems.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [pageNumber]);

  return { loading, menus, hasMore, error };
};
