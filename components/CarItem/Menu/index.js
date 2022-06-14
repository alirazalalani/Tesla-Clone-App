import {
  
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight, faMusic } from "@fortawesome/free-solid-svg-icons";
import items from "./item";

const Menu = () => {
  return (
    <View style={styles.menuItem}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.menuRow}>
              <FontAwesomeIcon icon={item.icon} size={24} color={"white"} />
              <View style={styles.menuTextBox}>
                <Text style={styles.menuText}>{item.title}</Text>
                {item.subTitle && (
                  <Text style={styles.subTitle}>{item.subTitle}</Text>
                )}
              </View>
              <FontAwesomeIcon
                icon={faChevronRight}
                size={24}
                color={"#4D4D4E"}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Menu;
