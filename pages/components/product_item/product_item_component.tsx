import React from "react";
import { View, Text, Image } from "react-native";
import ProductModel from "../../../model/product_model";
import styles from "./product_item_style";

const ProductItemComponent = ({ data }: { data: ProductModel }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text style={styles.title}> {data.title}</Text>
        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
          {data.description}
        </Text>
        <Text style={styles.price}>{data.price} $</Text>
      </View>
    </View>
  );
};

export default ProductItemComponent;
