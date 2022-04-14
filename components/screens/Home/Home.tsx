import { ContainerFilled } from '@ant-design/icons'
import { Col, Layout, Row } from 'antd'
import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Card } from './components/Card/Card'

export const Home = () => {
  
  const {weatherItems} = useTypedSelector(state => state.search)

  console.log(weatherItems);
  
  return (
    <Layout.Content style={{ padding: '0 50px', paddingTop: 64, paddingBottom: 64 }}>
      <Row gutter={[16, 16]}>
        {weatherItems.map((item, idx) =>
          <Col key={idx} span={6}>
            <Card item={item} />
          </Col>
        )}
      </Row>
    </Layout.Content>
  )
}
