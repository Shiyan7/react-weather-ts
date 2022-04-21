import {Drawer, Menu as AntdMenu} from 'antd';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menuSlice';
import {ABOUT_ROUTE, HOME_ROUTE, MAP_ROUTE} from '../../utils/consts';

export const Menu = () => {

    const {isOpenMenu} = useAppSelector(state => state.menuReducer)
    const {toggleMenu} = menuSlice.actions
    const dispatch = useAppDispatch()

    const menuArray = [
        {text: 'Главная', href: HOME_ROUTE},
        {text: 'Карта', href: MAP_ROUTE},
        {text: 'О приложении', href: ABOUT_ROUTE},
    ]

    return (

        <Drawer
            title='Меню'
            autoFocus
            width={300}
            visible={isOpenMenu}
            onClose={() => dispatch(toggleMenu())}
            placement="right">
            <AntdMenu>
                {menuArray.map((item, idx) => 
                    <AntdMenu.Item key={idx}>
                        <Link href={item.href}>
                            {item.text}
                        </Link>
                    </AntdMenu.Item>    
                )}
            </AntdMenu>
        </Drawer>
    )
}