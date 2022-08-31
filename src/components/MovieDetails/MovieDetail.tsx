import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../../interfaces/creditsInterface';
import { MovieFull } from '../../interfaces/MovieInterface';
import { ContainerAverage, Genres, NumberAverage, TextOverview, TextInfo } from './style';
import currencyFormatter from "currency-formatter";
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

            {/* Plot */}

            <TextInfo style={{color:'black'}}>Overview</TextInfo>

            {/* Casting */}
            <TextOverview>{movieFull.overview}</TextOverview>

            <TextInfo style={{color:'black'}}>Budget</TextInfo>
            {/* Budget */}
            <Text>
            {
                movieFull.budget === 0 ? <Text>N/A</Text> : currencyFormatter.format(movieFull.budget,{code:'USD'})
            }

            
            </Text>

        </>

    )
}

export default MovieDetail