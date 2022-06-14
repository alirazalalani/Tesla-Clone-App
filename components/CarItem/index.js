import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faGear,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu/index";
const CarItem = () => {
  const [unlock, setUnlock] = useState(false);
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/background.png")}
        style={styles.bgImage}
      />
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faGear} size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>LalaMobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* batterySection */}
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/* status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      {/* ControIcons */}
      <ScrollView>
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon icon={faFan} size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon icon={faKey} size={24} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUnlock(!unlock);
            }}
          >
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                icon={unlock ? faUnlock : faLock}
                size={24}
                color="white"
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <Menu />
      </ScrollView>
    </View>
  );
};

export default CarItem;
