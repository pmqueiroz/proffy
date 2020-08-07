import React, { useState, useEffect } from 'react';
import { View, Image, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './style';

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import api from '../../services/api';

function Landing() {
    const { navigate } = useNavigation();

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    function hadleNavigateToGiveClassesPage(){
        navigate('GiveClasses');
    }

    function hadleNavigateToStudyPage(){
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>

            <Text style={styles.title}>
                Welcome, {'\n'}
                <Text style={styles.titleBold}>What do you want to do?</Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={hadleNavigateToStudyPage}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Study</Text>
                </RectButton>

                <RectButton 
                    onPress={hadleNavigateToGiveClassesPage} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Teach</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total of {totalConnections} connections made {' '}
                <Image source={heartIcon}/>
            </Text>
        </View>


    )
}

export default Landing;