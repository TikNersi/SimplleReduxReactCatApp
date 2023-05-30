import React, { useEffect } from 'react'
import * as styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../store/actions/actionCreators'

export const Sidebar = () => {
    const [state, setstate] = React.useState(false)
    const [sort, setSort] = React.useState('')
    const [limit, setLimit] = React.useState(10)

    const dispatch = useDispatch()
    const { getCatsImages, getCategories } = bindActionCreators(actionCreators, dispatch)
    const categories = useSelector(state => state.category)

    const show = () => {
        setstate(!state)
    }

    const limitImage = () => {
        setLimit(limit + 10)
    }

    const setCategory = (sort) => {
        setSort(sort)
    }

    useEffect(() => {
        getCatsImages(limit, sort)
    }, [limit, sort])


    useEffect(() => {
        getCategories()
    }, [])


    return (
        <styles.Container>
                <styles.styledButton onClick={() => limitImage()}>Load More Images</styles.styledButton>
                <styles.styledButton onClick={() => show()}>Categories</styles.styledButton>

                {state && categories.data?.length > 0 && categories.data.map((item) => (
                    <div key={item.id}>
                        <styles.styledButton onClick={() => setCategory(item.name)}>{item.name}</styles.styledButton>
                    </div>
                ))}
        </styles.Container>
    )
}
