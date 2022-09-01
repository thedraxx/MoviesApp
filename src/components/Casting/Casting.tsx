import React from 'react'
import { Text, View, Image } from 'react-native'
import { Cast } from '../../interfaces/creditsInterface'
import { ActorInfo, ActorName, Character, ProfileImage, ViewActors } from './style'

interface Props {

    actor: Cast

}


const Casting = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <ViewActors>
            <ProfileImage source={{ uri }} />
            <ActorInfo>
                <ActorName>
                    {actor.name}
                </ActorName>
                <Character>
                    {actor.character}
                </Character>
            </ActorInfo>
        </ViewActors>
    )
}

export default Casting