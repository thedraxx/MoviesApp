import React from 'react'
import { Movie } from '../../interfaces/MovieInterface';
import { View, Text, FlatList } from 'react-native';
import Cards from '../Card/Cards';
import { Container, CustomText } from './style';

interface Props {
    title?: string;
    movies: Movie[]
}

const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <Container title={title}>
            {
                title &&   <CustomText>{title}</CustomText>
            }
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <Cards movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    )
}

export default HorizontalSlider