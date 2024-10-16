import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface DropDownProps {
  values: string[];
  setFieldValue: (value: string) => void;
  qTitle: string;
  opValues: string[];
}

export const DropDownComponent = ({ values, setFieldValue, qTitle, opValues }: DropDownProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(values[0]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setFieldValue(value);
    setModalVisible(false);
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{qTitle}</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={globalStyles.picker}>
        <Text>{selectedValue || "Seleccione una opción"}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
            <FlatList
              data={opValues}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)} style={{ paddingVertical: 10 }}>
                  <Text style={{ flexWrap: 'wrap' }}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20 }}>
              <Text style={{ textAlign: 'center', color: 'blue' }}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
