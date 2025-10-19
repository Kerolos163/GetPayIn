import React from "react";
import { View, Text, Image } from "react-native";
import ProductModel from "../../../model/product_model";
import styles from "./product_item_style";

const ProductItemComponent = ({ data }: { data: ProductModel }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text>{data.title}</Text>
        <Text>{data.price}</Text>
      </View>
    </View>
  );
};

export default ProductItemComponent;
