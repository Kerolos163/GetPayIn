import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import constant from "../../../utils/constant";
import CategoryModel from "../../../model/category_model";
import styles from "./category_filter_style";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native";
import { AutoLockContext } from "../../../context/AutoLockContext";
import { useContext } from "react";
import {
  setSelectedCategory,
  setCategories,
} from "../../../store/slices/categorySlice";

const CategoryFilterStyle = () => {
  const { resetAutoLock } = useContext(AutoLockContext);
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state: any) => state.category.selectedCategory
  );

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${constant.baseUrl}/products/categories`
  //       );
  //       const categories: CategoryModel[] = response.data.map((item: any) => ({
  //         slug: item.slug ?? "",
  //         name: item.name ?? "",
  //       }));
  //       // console.warn("Categories Data👉", categories);
  //       dispatch(setCategories(categories));
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };
  //   fetchCategories();
  // }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(
        `${constant.baseUrl}/products/categories`
      );
      const categories: CategoryModel[] = response.data.map((item: any) => ({
        slug: item.slug ?? "",
        name: item.name ?? "",
      }));
      dispatch(setCategories(categories));
      return categories;
    },
  });
  if (isLoading) return <ActivityIndicator></ActivityIndicator>;

  const handleCategoryPress = (slug: string) => {
    if (slug === selectedCategory) {
      dispatch(setSelectedCategory(""));
    } else {
      dispatch(setSelectedCategory(slug));
    }
    resetAutoLock();
  };

  return (
    <FlatList
      style={styles.FlatListStyle}
      data={data}
      horizontal={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(item) => item.slug}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleCategoryPress(item.slug)}>
          <Text
            style={[
              styles.categoryItem,
              {
                backgroundColor:
                  item.slug === selectedCategory ? "#009C94" : "white",
                color: item.slug === selectedCategory ? "white" : "black",
              },
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryFilterStyle;
