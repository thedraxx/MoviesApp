import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../../interfaces/creditsInterface';
import { MovieFull } from '../../interfaces/MovieInterface';
import { ContainerAverage, Genres, NumberAverage } from './style';

interface Props {
    movieFull: MovieFull
    cast: Cast[]
}

const MovieDetail = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* {Detalles} */}
            <View>
                <ContainerAverage>
                    <Icon name="star-outline" color="gray" size={16} />
                    <NumberAverage>{movieFull.vote_average}</NumberAverage>
                    
                    <Genres>
                         - {movieFull.genres.map(g => g.name).join('-')}
                    </Genres>

                </ContainerAverage>
            </View>


            {/* Casting */}

            <Text>{movieFull.title}</Text>

        </>

    )
}

export default MovieDetail