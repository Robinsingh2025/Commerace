import React, { useState } from "react";

import Shopdata from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

export default function ShopPage() {
  const [collection, setCollection] = useState(Shopdata);

  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}
