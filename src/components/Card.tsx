import React from 'react';
import {Image, StyleSheet, View, Text, ImageSourcePropType} from 'react-native';
import {theme} from '../theme/theme';

interface Props {
  bgUrl: string;
  logo: ImageSourcePropType;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({bgUrl: uri, logo, title, description}) => {
  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
      <View style={styles.cardContent}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black100,
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    opacity: 0.75,
  },
  logo: {
    height: 80,
    width: 159,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },
  title: {
    color: theme.colors.white,
    opacity: 0.9,
    fontWeight: '700',
    fontSize: 28,
    marginVertical: 4,
  },
  description: {
    color: theme.colors.white,
    opacity: 0.6,
    fontWeight: '400',
    fontSize: 14,
  },
});

export default Card;
