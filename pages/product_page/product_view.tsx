import React, { useState, useCallback, useEffect } from "react";
import { View, FlatList } from "react-native";
import axios from "axios";
import constant from "../../utils/constant";
import ProductModel from "../../model/product_model";
import styles from "./product_style";
import ProductItemComponent from "../components/product_item/product_item_component";

const ProductView = () => {
  const [data, setData] = useState<ProductModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${constant.baseUrl}/products`);
      const products: ProductModel[] = response.data.products.map(
        (item: any) => ({
          id: item.id ?? 0,
          title: item.title ?? "",
          price: item.price ?? 0,
          description: item.description ?? "",
          rating: item.rating ?? 0,
          category: item.category ?? "",
          image: item.thumbnail ?? "",
        })
      );
      setData(products);
      // console.warn("Products Data👉", data);
    };
    fetchData();
  }, []);

  return (
    <FlatList
      style={styles.body}
      data={data}
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={2}
      renderItem={({ item }) => (
        <ProductItemComponent key={item.id} data={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ProductView;
