import { MenuOutlined } from '@ant-design/icons';
import { FC, FormEvent, useState } from 'react'
import { Button, Input, Layout, Row, Typography } from 'antd';
import styles from './Header.module.scss'
import { Menu } from './Menu';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Header: FC = () => {

    const {toggleMenu} = useActions()
    const {isOpenMenu} = useTypedSelector(state => state.menu)
    
    const handleSearch = (e: FormEvent<HTMLInputElement | HTMLButtonElement>) => console.log(e);

    return (
        <Layout.Header style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000}} className={styles.header}>
            <Row align='middle' wrap={false} justify='space-between'>
                <Typography.Text className={styles.logo}>Weather</Typography.Text>
                
                <div className={styles.search}>
                    <Input.Search
                        onChange={handleSearch}
                        placeholder="Search weather by city"
                        enterButton
                        allowClear
                    />
                </div>

                <Button className={styles.button} onClick={toggleMenu} icon={<MenuOutlined />} size='middle' type='primary' />
            </Row>
            <Menu />
        </Layout.Header>
    )
}


{/* <Menu theme='dark' mode='horizontal'>
    <Menu.Item key='map'>
        <Link href='/map'>Map</Link>
    </Menu.Item>
    <Menu.Item key='about'>
        <Link href='/about'>About</Link>
    </Menu.Item>
</Menu> */}



{/* <Col>
    <Select
        defaultValue='si'
        style={{ marginRight: '20px', verticalAlign: 'middle' }}>
        <Select.Option value='si'>℃, kph</Select.Option>
        <Select.Option value='us'>℉, mph</Select.Option>
    </Select>
    <Button
        type='primary'
        shape='circle'
        icon={<GithubOutlined />}
        size='large'
        href='https://github.com/Shiyan7/react-weather-ts'
    />
</Col> */}