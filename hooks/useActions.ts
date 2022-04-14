import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { menuActions } from '../store/slices/menuSlice'
import { searchActions } from "../store/slices/searchSlice"

const allActions = {
    ...menuActions,
    ...searchActions
}

export const useActions = () => {
    
    const dispath = useDispatch()
    
    return bindActionCreators(allActions, dispath)
}