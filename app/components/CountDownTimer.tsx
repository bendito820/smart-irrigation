import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Text from "./AppText";

interface TimerModalProps {
  modalVisible: boolean;
  setModalVisible: any;
}

export default function CountDownTimer() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Pressable
      onPress={() => setModalVisible(!modalVisible)}
      style={styles.container}
    >
      <TimerModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View
        style={{ width: 28, alignItems: "center", justifyContent: "center" }}
      >
        <MaterialCommunityIcons name="timer" size={24} color={"#b3b3b3"} />
      </View>
      <Text style={[styles.text]}>Temporizador</Text>
      <Pressable style={[styles.button]} onPress={() => setModalVisible(true)}>
        <MaterialCommunityIcons
          name="chevron-down"
          size={24}
          color={"#b3b3b3"}
        />
      </Pressable>
    </Pressable>
  );
}

const TimerModal = ({ modalVisible, setModalVisible }: TimerModalProps) => {
  const timeOptions: {
    label: string;
    value: number;
  }[] = [
    { label: "15 min", value: 15 * 1000 },
    { label: "30 min", value: 30 * 1000 },
    { label: "1 h", value: 60 * 1000 },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Cancelar</Text>
          </Pressable>
          <ScrollView style={{ width: "100%", paddingVertical: 32 }}>
            {timeOptions.map(({ value, label }) => (
              <Pressable
                key={value.toString()}
                onPress={() => setModalVisible(!modalVisible)}
                style={styles.modalPressable}
              >
                <Text style={styles.modalText}>{label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(34,36,40,1)",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 22,
  },
  text: { fontSize: 14, letterSpacing: 1, color: "#b3b3b3", fontWeight: "400" },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(34,36,40,1)",
    borderRadius: 20,
    paddingVertical: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: 500,
    borderColor: "#b3b3b3",
    borderWidth: 0.3,
    zIndex: -1,
    gap: 42,
  },
  button: {
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  textStyle: {
    color: "red",
    fontWeight: "400",
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 16,
    letterSpacing: 1,
  },
  modalText: {
    textAlign: "center",
  },
  modalPressable: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderColor: "#fff",
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
  },
});
