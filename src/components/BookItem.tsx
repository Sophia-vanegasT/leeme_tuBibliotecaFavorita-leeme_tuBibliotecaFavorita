import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface BookItemProps {
  title: string;
  author: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const BookItem: React.FC<BookItemProps> = ({ title, author, isFavorite, onToggleFavorite, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onToggleFavorite}>
          <Text style={styles.favorite}>{isFavorite ? '★' : '☆'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  favorite: {
    fontSize: 20,
    marginRight: 10,
  },
  edit: {
    marginRight: 10,
    color: 'blue',
  },
  delete: {
    color: 'red',
  },
});

export default BookItem;