import React, { useState, useCallback, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import constant from "../../utils/constant";
import ProductModel from "../../model/product_model";
import styles from "./product_style";
import ProductItemComponent from "../components/product_item/product_item_component";
import CategoryFilterStyle from "../components/category_filter/category_filter_component";
import { setProducts } from "../../store/slices/productSlice";

const ProductView = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.product.products);
  const selectedCategory = useSelector(
    (state: any) => state.category.selectedCategory
  );

  useEffect(() => {
    console.log("Selected Category in ProductView:", selectedCategory);
    const fetchData = async () => {
      const response = await axios.get(`${constant.baseUrl}/products`);
      const products: ProductModel[] = response.data.products.filter((item: any) => item.category === selectedCategory||selectedCategory==="").map(
        (item: any) => ({
          id: item.id ?? Math.random(),
          title: item.title ?? "",
          price: item.price ?? 0,
          description: item.description ?? "",
          rating: item.rating ?? 0,
          category: item.category ?? "",
          image: item.thumbnail ?? "",
        })
      );
      console.log("Fetched Products:", products);

      dispatch(setProducts(products));
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <View style={styles.body}>
      <CategoryFilterStyle></CategoryFilterStyle>
      <FlatList
        style={styles.container}
        data={data}
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductItemComponent key={item.id} data={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductView;
