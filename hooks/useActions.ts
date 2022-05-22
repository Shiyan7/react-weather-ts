import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { menuActions } from "../store/reducers/menuSlice"

const allActions = {
    ...menuActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}