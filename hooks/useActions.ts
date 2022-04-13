import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { menuActions } from '../store/slices/menuSlice'

const allActions = {
    ...menuActions
}

export const useActions = () => {
    
    const dispath = useDispatch()
    
    return bindActionCreators(allActions, dispath)
}