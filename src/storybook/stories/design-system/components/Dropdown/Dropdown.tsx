import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type DropdownProps = {
  label?: string;
  placeholder?: string;
  options: string[];
  selected?: string;
  onSelect?: (value: string) => void;
};

export const Dropdown = ({
  label,
  placeholder = '선택',
  options,
  selected,
  onSelect,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selected || '');

  const handleSelect = (option: string) => {
    setValue(option);
    onSelect?.(option);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.dropdownWrapper}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setOpen(!open)}
        >
          <Text style={[styles.selectedText, !value && styles.placeholder]}>
            {value || placeholder}
          </Text>
          <Ionicons
            name={open ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#555"
          />
        </TouchableOpacity>

        {open && (
          <View style={styles.optionList}>
            <ScrollView
              nestedScrollEnabled={true}
              style={styles.scrollView}
              showsVerticalScrollIndicator={true}
            >
              {options.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.optionItem,
                    index === options.length - 1 && styles.lastOptionItem,
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

/*----------------------- Styles ------------------------*/

const styles = StyleSheet.create({
  container: { width: '100%', marginVertical: 8 },
  label: { marginBottom: 6, fontSize: 14, color: '#2A2A2E', fontWeight: 600 },
  dropdownWrapper: {
    position: 'relative',
    zIndex: 999,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#F4F4F5',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  selectedText: { fontSize: 15, color: '#111', fontWeight: 500 },
  placeholder: { color: '#0d0c0c', fontWeight: 500 },
  optionList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: '#A1A1AA',
    borderRadius: 8,
    marginTop: 4,
    backgroundColor: '#fff',
    zIndex: 1001,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    maxHeight: 200,
  },
  scrollView: {
    maxHeight: 200,
  },
  optionItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#A1A1AA',
  },
  lastOptionItem: {
    borderBottomWidth: 0,
  },
  optionText: { fontSize: 15, color: '#2A2A2E' },
});

export default Dropdown;
