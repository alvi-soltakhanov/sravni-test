import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getSomeCofe } from '../redux/features/getData';
import styles from './Main.module.css'

const Main = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSomeCofe())   
    }, [dispatch])
    
    
    const loading = useSelector((state) => state.loading)
    const cofe = useSelector((state) => state.cofe)

    if (loading) {
        return <div>loading...</div>
    }

    return (
        <div className={styles.Main}>
            <div className={styles.Content}>
                {cofe.map(item => {
                    return (
                            <Card item={item}/>
                    )
                })}
               
            </div>
        </div>
    );
};

export default Main;