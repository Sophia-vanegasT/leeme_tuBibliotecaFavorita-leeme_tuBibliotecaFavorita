import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Léeme – Tu Biblioteca Favorita</Text>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Leídos</Text>
                <Button title="Ver libros leídos" onPress={() => navigation.navigate('Library')} />
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>En lectura</Text>
                <Button title="Ver libros en lectura" onPress={() => navigation.navigate('Library')} />
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Por leer</Text>
                <Button title="Ver libros por leer" onPress={() => navigation.navigate('Library')} />
            </View>
            <Button title="Agregar un libro" onPress={() => navigation.navigate('Library')} />
            <Button title="Buscar un libro" onPress={() => navigation.navigate('Library')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default HomeScreen;