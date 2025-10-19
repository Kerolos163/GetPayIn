import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import constant from "../../../utils/constant";
import CategoryModel from "../../../model/category_model";
import styles from "./category_filter_style";

const CategoryFilterStyle = () => {
  const [data, setData] = useState<CategoryModel[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `${constant.baseUrl}/products/categories`
        );
        const categories: CategoryModel[] = response.data.map((item: any) => ({
          slug: item.slug ?? "",
          name: item.name ?? "",
        }));
        // console.warn("Categories Data👉", categories);
        setData(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryPress = (slug: string) => {
    setSelectedCategory(slug);
    console.log("Selected Category Slug:", selectedCategory);
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
