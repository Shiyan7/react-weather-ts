import { Input, InputRef } from 'antd'
import axios from 'axios'
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import { API_KEY } from '../../utils/consts'
import styles from './Header.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

export const Search = () => {

    const {value} = useTypedSelector(state => state.search)
    const {setValue, setWeather} = useActions()

    const inputRef = useRef<InputRef>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = async () => {
        try {
            const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=no&alerts=no`)
            
            setWeather(data)

            setValue('')

            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        inputRef?.current?.focus()
    }, [])

    return (
        <div className={styles.search}>
            <Input.Search
                ref={inputRef}
                placeholder="Search weather by city"
                onChange={changeHandler}
                onSearch={clickHandler}
                value={value}
                enterButton
                allowClear/>
        </div>
    )
}
