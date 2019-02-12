import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { ThemePicker } from './components/widget/index'
import SiderCustom from './components/suder-custom.jsx';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

class App extends Component {
  state = {
    title: '',
    collapsed: false
  };
  componentWillMount() {
  //
  };
  render() {
    const { title } = this.state;
    return (
      <DocumentTitle title={title}>
        <Layout>
          <SiderCustom />
          <ThemePicker />
          <Layout style={{flexDirection: 'column'}}>
            <Content>
              content
            </Content>
            <Footer style={{ textAlign: 'center'}}>
            {new Date().getFullYear()} React-学习计划  created by fenpeng
            </Footer>
          </Layout>
        </Layout>
      </DocumentTitle>
    )
  }
}
export default App
