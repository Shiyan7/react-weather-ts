import { MenuOutlined } from '@ant-design/icons';
import { Button, Layout, Row, Typography } from 'antd';
import { Menu } from './Menu';
import { Search } from './Search';
import { useAppDispatch} from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menuSlice';
import styles from './Header.module.scss'

export const Header = () => {

    const {toggleMenu} = menuSlice.actions
    const dispatch = useAppDispatch()

    return (
        <Layout.Header style={{position: 'static', top: 0, left: 0, width: '100%', zIndex: 1000}} className={styles.header}>
            <Row align='middle' wrap={false} justify='space-between'>
                <Typography.Text className={styles.logo}>Weather</Typography.Text>
                <Search />
                <Button className={styles.button} onClick={() => dispatch(toggleMenu())} icon={<MenuOutlined />} size='middle' type='primary' />
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