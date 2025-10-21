import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import constant from "../../utils/constant";
import ProductModel from "../../model/product_model";
import styles from "./product_style";
import ProductItemComponent from "../components/product_item/product_item_component";
import CategoryFilterStyle from "../components/category_filter/category_filter_component";
import { setProducts } from "../../store/slices/productSlice";
import NetInfo from "@react-native-community/netinfo";
import HeaderView from "../components/app_header/header_view";
import { useRoute } from "@react-navigation/native";
import NoConnectionView from "../components/no_connection/no_connection_view";
import { useQuery } from "@tanstack/react-query";
import { AutoLockContext } from "../../context/AutoLockContext";
import { useContext } from "react";

const ProductView = () => {
  const { resetAutoLock } = useContext(AutoLockContext);
  const route = useRoute();
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: any) => state.category.selectedCategory
  );
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? false);
    });
  }, [isConnected, selectedCategory]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: async () => {
      const response = await axios.get(`${constant.baseUrl}/products`);
      const products: ProductModel[] = response.data.products
        .filter(
          (item: any) =>
            item.category === selectedCategory || selectedCategory === ""
        )
        .map((item: any) => ({
          id: item.id ?? Math.random(),
          title: item.title ?? "",
          price: item.price ?? 0,
          description: item.description ?? "",
          rating: item.rating ?? 0,
          category: item.category ?? "",
          image: item.thumbnail ?? "",
        }));

      dispatch(setProducts(products));
      return products;
    },
  });

  // if (!isConnected) return <NoConnectionView></NoConnectionView>;

  if (isLoading) return <ActivityIndicator></ActivityIndicator>;

  if (isError)
    return (
      <View style={styles.body}>
        <Text style={styles.errorText}>Error loading products</Text>
      </View>
    );

  return (
    <View style={styles.body}>
      <HeaderView></HeaderView>
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
        onTouchStart={resetAutoLock}
      />
    </View>
  );
};

export default ProductView;
