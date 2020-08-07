import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


import styles from './style';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: number;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}



const TeacherItem: React.FunctionComponent<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorites] = useState(favorited);

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone${teacher.whatsapp}`)
    }

    async function handleToggleFavorite(){
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        
        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorites(false); 
        } else {
            favoritesArray.push(teacher);

            setIsFavorites(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source = {{uri: teacher.avatar}}
                    />

                <View style={styles.profileInfo}>
                <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={styles.bio}>{teacher.bio}</Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Price/Hour {'   '}
                    <Text style={styles.priceValue}>{teacher.cost}</Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleToggleFavorite} 
                    style={[
                        styles.favoriteButton,
                        isFavorited ? styles.favorited : {},
                    ]}
                >
                    {isFavorited
                        ? <Image source={unfavoriteIcon}></Image> 
                        : <Image source={heartOutlineIcon}></Image>
                    }
                </RectButton>

                <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                    <Image source={whatsappIcon}></Image>
                    <Text style={styles.contactButtonText}>Contact</Text>
                </RectButton>
            </View>
        </View>
    );
}


export default TeacherItem;