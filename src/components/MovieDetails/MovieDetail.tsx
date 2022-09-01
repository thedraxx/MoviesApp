import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../../interfaces/creditsInterface';
import { MovieFull } from '../../interfaces/MovieInterface';
import { ContainerAverage, Genres, NumberAverage, TextOverview, TextInfo, ContainerCast } from './style';
import currencyFormatter from "currency-formatter";
import Casting from '../Casting/Casting';
import { FlatList } from 'react-native-gesture-handler';

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

            <TextInfo style={{ color: 'black' }}>Overview</TextInfo>

            <TextOverview>{movieFull.overview}</TextOverview>

            <TextInfo style={{ color: 'black' }}>Budget</TextInfo>
            {/* Budget */}
            <Text>
                {
                    movieFull.budget === 0 ? <Text>N/A</Text> : currencyFormatter.format(movieFull.budget, { code: 'USD' })
                }
            </Text>



            {/* Casting */}

            <ContainerCast>
            <TextInfo style={{ color: 'black' }}>Casting</TextInfo>
                <FlatList 
                    style={{marginTop:10, height:60}}
                    data={cast}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=> <Casting actor={item} /> }
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                />
            </ContainerCast>
        </>
    )
}

export default MovieDetail