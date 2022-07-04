import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent
} from '@mui/material'
import {useActions} from '@/hooks/useActions'
import {useTypedSelector} from '@/hooks/useTypedSelector'
import styles from './Modal.module.scss'

export const Modal = () => {

    const {isOpenModal} = useTypedSelector(state => state.modalReducer)
    const {unitTemp, unitSpeed, unitPressure} = useTypedSelector(state => state.unitReducer)
    const {toggleModal, setPressure, setSpeed, setTemp} = useActions()
    const handleSetTemp = (e: SelectChangeEvent) => setTemp(e.target.value)
    const handleSetSpeed = (e: SelectChangeEvent) => setSpeed(e.target.value)
    const handleSetPressure = (e: SelectChangeEvent) => setPressure(e.target.value)
    const handleToggle = () => toggleModal()

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
                    <FormControl variant='standard'>
                        <Select
                            value={unitTemp}
                            onChange={handleSetTemp}
                        >
                            <MenuItem value='°C' defaultChecked>°C</MenuItem>
                            <MenuItem value='°F'>°F</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.item}>
                    <span className={styles.caption}>Скорость ветра</span>
                    <FormControl variant='standard'>
                        <Select
                            value={unitSpeed}
                            onChange={handleSetSpeed}
                        >
                            <MenuItem value='км/ч' defaultChecked>км/ч</MenuItem>
                            <MenuItem value='м/с'>м/с</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={styles.item}>
                    <span className={styles.caption}>Единицы измерения давления</span>
                    <FormControl variant='standard'>
                        <Select
                            value={unitPressure}
                            onChange={handleSetPressure}
                        >
                            <MenuItem value='mbar' defaultChecked>mbar</MenuItem>
                            <MenuItem value='атм'>атм</MenuItem>
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
