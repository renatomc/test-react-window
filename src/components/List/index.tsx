import React, { useState, useEffect } from 'react';
import { FixedSizeGrid } from 'react-window';
import { Items } from '../../dtos/items';
import { getList } from '../../services/list';

import { Container } from './styles';

const List: React.FC = () => {
  const [list, setList] = useState<Items[]>([] as Items[]);

  useEffect(() => {
    async function getListItems() {
      const items: Items[] = await getList();
      setList(items);
    }
    getListItems();
  }, []);

  const Line = ({ columnIndex, rowIndex, style, data }: any) => {
    const item = data[rowIndex];
    const itemCollum = Object.values(item);
    const value = itemCollum[columnIndex] as string | number;

    return (
      <div style={style}>
        <span>{value}</span>
      </div>
    );
  };

  return (
    <Container>
      <FixedSizeGrid
        height={900}
        width={900}
        columnCount={6}
        rowCount={list.length}
        rowHeight={50}
        itemData={list}
        columnWidth={150}
      >
        {Line}
      </FixedSizeGrid>
    </Container>
  );
};

export default List;
