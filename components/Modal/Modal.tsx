import { Code } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/redux'
import { toggleModal } from '../../store/reducers/modalSlice'
import { setPressure, setSpeed, setTemp } from '../../store/reducers/unitSlice'
import styles from './Modal.module.scss'

export const Modal = () => {

    const {isOpenModal} = useTypedSelector(state => state.modalReducer)

    const dispatch = useDispatch()
    const handleToggle = () => dispatch(toggleModal())

    const {unitTemp, unitSpeed, unitPressure} = useTypedSelector(state => state.unitReducer)

    const handleSetTemp = (e: SelectChangeEvent) => dispatch(setTemp(e.target.value))
    const handleSetSpeed = (e: SelectChangeEvent) => dispatch(setSpeed(e.target.value))
    const handleSetPressure = (e: SelectChangeEvent) => dispatch(setPressure(e.target.value))

    return (
        
        <Dialog
            fullWidth={true}
            open={isOpenModal}
            onClose={handleToggle}
        >
            <DialogTitle>Настройки</DialogTitle>
            <DialogContent className={styles.content}>
                <div className={styles.item}>
                    <span className={styles.caption}>Температура</span>
                    <FormControl variant="standard">
                        <Select
                            value={unitTemp}
                            onChange={handleSetTemp}
                        >
                            <MenuItem value="°C" defaultChecked>°C</MenuItem>
                            <MenuItem value="°F">°F</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.item}>
                    <span className={styles.caption}>Скорость ветра</span>
                    <FormControl variant="standard">
                        <Select
                            value={unitSpeed}
                            onChange={handleSetSpeed}
                        >
                            <MenuItem value="км/ч" defaultChecked>км/ч</MenuItem>
                            <MenuItem value="м/с">м/с</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.item}>
                    <span className={styles.caption}>Единицы измерения давления</span>
                    <FormControl variant="standard">
                        <Select
                            value={unitPressure}
                            onChange={handleSetPressure}
                        >
                            <MenuItem value="mbar" defaultChecked>mbar</MenuItem>
                            <MenuItem value="атм">атм</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </DialogContent>
            <DialogActions>
                <Button sx={{color: '#fff'}} onClick={handleToggle}>Закрыть</Button>
            </DialogActions>
        </Dialog>
    )
}
