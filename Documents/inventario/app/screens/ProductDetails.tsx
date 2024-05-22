import React, { useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Product } from "./model/Product";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../app';

export type Params = {
    product: Product;
};

export type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'ProductDetails'>;
    route: RouteProp<RootStackParamList, 'ProductDetails'>;
};

function ProductDetails({route}: Props): React.JSX.Element {
    const [product, setProduct] = React.useState<Product>();
    useEffect(() => {
        setProduct(route.params.product);
    }, [route]);
    return (
        <SafeAreaView>
            <View>
                <Text>{product?.nombre}</Text>
                <Text>{product?.precio}</Text>
                <Text>{product?.minStock}</Text>
                <Text>{product?.currentStock}</Text>
                <Text>{product?.maxStock}</Text>
            </View>
        </SafeAreaView>
    );
}

export default ProductDetails;