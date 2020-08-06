import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

function Favorites() {
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>

        </View>
    )
}

export default Favorites;