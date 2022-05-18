import { Input, InputRef } from 'antd'
import { ChangeEvent, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setValue, setCity } from '../../store/reducers/searchSlice'
import styles from './Header.module.scss'

export const Search = () => {
    const { value } = useAppSelector(state => state.searchReducer)
    const dispatch = useAppDispatch()

    const inputRef = useRef<InputRef>(null)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue(e.target.value))
    }

    const clickHandler = async () => {
        if(value.trim()) {
            dispatch(setCity(value))

            dispatch(setValue(''))
        }
    }

    useEffect(() => {
        inputRef?.current?.focus()
    }, [])

    return (
        <div className={styles.search}>
            <Input.Search
                ref={inputRef}
                placeholder="Введите город на английском"
                onChange={changeHandler}
                onSearch={clickHandler}
                value={value}
                enterButton
                allowClear/>
        </div>
    )
}
