import React from 'react'
import { useSelector } from 'react-redux';
import * as styles from './styles'

export const Main = () => {
    const catsImages = useSelector(state => state.catsArray)
    return (
        <styles.Container>
            {catsImages.data?.length > 0 && catsImages.data.map(item => (
                <div key={item.id} >
                    <img src={item.url} width='330px' height='290px' alt='' />
                </div>
            ))}
        </styles.Container>
    )
}
