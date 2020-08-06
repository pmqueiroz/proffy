import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

import styles from './style';

function Favorites() {

    return (
        <View style={styles.container}>
            <PageHeader title='My favorites Proffys'/>
        </View>
    );
}

export default Favorites;