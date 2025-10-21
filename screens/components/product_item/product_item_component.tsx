import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ProductModel from "../../../model/product_model";
import styles from "./product_item_style";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";

const ProductItemComponent = ({ data }: { data: ProductModel }) => {
  const currentRole = useSelector((state: any) => state.role.role);
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
      {currentRole !== "ADMIN" && (
        <View style={styles.rating}>
          <Text>{data.rating}</Text>
        </View>
      )}
      {currentRole === "ADMIN" && (
        <TouchableOpacity style={styles.deleteBtn} onPress={() => console.log("Delete pressed")}>
          <Feather name="trash-2" size={24} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductItemComponent;
