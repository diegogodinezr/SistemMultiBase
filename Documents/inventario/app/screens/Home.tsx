import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Product } from '../screens/model/Product';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../App';
import LocalDB from '../screens/persistance/localdb';

type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
    navigation: HomeScreenProps;
    route: HomeScreenProps;
};

function Home ({navigation}:HomeProps): React.JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);
    const productItem = ({item}: {item: Product}) => (
        <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetails', {product: item})}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'column', flexGrow: 9}} >
                    <Text style={styles.itemTitle}>{item.nombre}</Text>
                    <Text style={styles.itemDetails}>Precio: ${item.precio.toFixed(2)}</Text>
                </View>
                <Text 
                style={[
                    styles.itemBadge, 
                    item.currentStock < item.minStock ? styles.itemBadgeError : null,
                ]}>
                    {item.currentStock}
                </Text>
            </View>
            
        </TouchableOpacity>
    );

    const styles = StyleSheet.create({
        productItem: {
            padding: 12,
            borderBottomWidth: 1,
            borderBottomColor: '#c0c0c0',
            backgroundColor: 'white',
        },
        itemTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            textTransform: 'uppercase',
        },
        itemDetails: {
            fontSize: 16,
            opacity:0.7,
        },
        itemBadge: {
            fontSize: 24,
            backgroundColor: '#c0c0c0',
            padding: 8,
            borderRadius: 8,
            alignSelf: 'center',
        },
        itemBadgeError: {
            color: 'red',
        },
    });

    useEffect(() => {
        navigation.addListener('focus', async () => {
            const db = await LocalDB.connect();
            db.transaction(async tx => {
                tx.executeSql(
                    `SELECT * FROM productos;`,
                    [],
                    (_, res) => {
                        let prods = [];
                        for (let i = 0; i < res.rows.length; i++) {
                            prods.push(res.rows.item(i));
                        }
                        setProducts(prods);
                    },
                    error => console.error({error}),
                );
            });
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <FlatList
                data={products}
                renderItem={productItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );

    
}

export default Home;
