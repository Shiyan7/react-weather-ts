import {Drawer, Menu as AntdMenu} from 'antd';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useState} from 'react'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {ABOUT_ROUTE, HOME_ROUTE, MAP_ROUTE} from '../../utils/consts';

export const Menu = () => {

    const {toggleMenu} = useActions()
    const {isOpenMenu} = useTypedSelector(state => state.menu)

    const menuArray = [
        {text: 'Weather', href: HOME_ROUTE},
        {text: 'Map', href: MAP_ROUTE},
        {text: 'About', href: ABOUT_ROUTE},
    ]

    return (

        <Drawer
            title='Menu'
            autoFocus
            width={300}
            visible={isOpenMenu}
            onClose={toggleMenu}
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