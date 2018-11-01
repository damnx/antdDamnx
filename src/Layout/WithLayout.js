import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const WithLayout = (Component) => {
    return class extends React.Component {
        render() {
            return (
                <Layout>
                    <Content>
                        <Component {...this.props} />
                    </Content>
                </Layout>
            )
        }
    }
}

export default WithLayout;