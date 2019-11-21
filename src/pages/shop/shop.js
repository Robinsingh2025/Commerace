import React, { useState } from 'react';
import shopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/preview';
export default function ShopPage() {
  const [collection, setCollection] = useState(shopData);

  return (
    <div className='shop-page'>
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
