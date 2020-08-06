import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './style';

function TeacherList() {

    return (
        <View style={styles.container}>
            <PageHeader title='These are the available proffys.'/>
        </View>
    );
}

export default TeacherList;