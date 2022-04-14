import {Layout, Typography} from "antd"
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <Layout.Footer className={styles.footer}>
            <Typography.Text>
                ©2022 Developed by&nbsp;
                <Typography.Link target='_blank' href='https://github.com/Shiyan7'>Shiyan7</Typography.Link>
            </Typography.Text>
        </Layout.Footer>
    )
}
