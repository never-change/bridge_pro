import React, { Component } from 'react';
import { connect } from 'dva';
@connect(({ game }) => ({ game }))
export default class Game extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'game/querygame',
    });
  }

  render() {
    console.log('******game****',this.props)
    // return <div>123123</div>;
    const data = this.props.game.payload;
    
    return <div>{JSON.stringify(data)}</div>;
  }
}













// import React, { Component, Fragment } from 'react';
// import Debounce from 'lodash-decorators/debounce';
// import Bind from 'lodash-decorators/bind';
// import { connect } from 'dva';
// import {
//   Card,
//   Badge,
//   Table,
// } from 'antd';
// import PageHeaderLayout from '../../layouts/PageHeaderLayout';
// // import styles from './AdvancedProfile.less';


// const getWindowWidth = () => window.innerWidth || document.documentElement.clientWidth;




// const tabList = [
//   {
//     key: 'detail',
//     tab: '详情',
//   },
//   {
//     key: 'rule',
//     tab: '规则',
//   },
// ];




// const operationTabList = [
//   {
//     key: 'tab1',
//     tab: '操作日志一',
//   },
//   {
//     key: 'tab2',
//     tab: '操作日志二',
//   },
//   {
//     key: 'tab3',
//     tab: '操作日志三',
//   },
// ];

// const columns = [
//   {
//     title: '操作类型',
//     dataIndex: 'type',
//     key: 'type',
//   },
//   {
//     title: '操作人',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: '执行结果',
//     dataIndex: 'status',
//     key: 'status',
//     render: text =>
//       text === 'agree' ? (
//         <Badge status="success" text="成功" />
//       ) : (
//           <Badge status="error" text="驳回" />
//         ),
//   },
//   {
//     title: '操作时间',
//     dataIndex: 'updatedAt',
//     key: 'updatedAt',
//   },
//   {
//     title: '备注',
//     dataIndex: 'memo',
//     key: 'memo',
//   },
// ];

// @connect(({ profile, loading }) => ({
//   profile,
//   loading: loading.effects['profile/fetchAdvanced'],
// }))
// export default class AdvancedProfile extends Component {
//   state = {
//     operationkey: 'tab1',
//     stepDirection: 'horizontal',
//   };

//   componentDidMount() {
//     const { dispatch } = this.props;
//     dispatch({
//       type: 'profile/fetchAdvanced',
//     });

//     this.setStepDirection();
//     window.addEventListener('resize', this.setStepDirection);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.setStepDirection);
//     this.setStepDirection.cancel();
//   }

//   onOperationTabChange = key => {
//     this.setState({ operationkey: key });
//   };

//   @Bind()
//   @Debounce(200)
//   setStepDirection() {
//     const { stepDirection } = this.state;
//     const w = getWindowWidth();
//     if (stepDirection !== 'vertical' && w <= 576) {
//       this.setState({
//         stepDirection: 'vertical',
//       });
//     } else if (stepDirection !== 'horizontal' && w > 576) {
//       this.setState({
//         stepDirection: 'horizontal',
//       });
//     }
//   }

//   render() {
//     const { operationkey } = this.state;
//     const { profile, loading } = this.props;
//     const { advancedOperation1, advancedOperation2, advancedOperation3 } = profile;
//     const contentList = {
//       tab1: (
//         <Table
//           pagination={false}
//           loading={loading}
//           dataSource={advancedOperation1}
//           columns={columns}
//         />
//       ),
//       tab2: (
//         <Table
//           pagination={false}
//           loading={loading}
//           dataSource={advancedOperation2}
//           columns={columns}
//         />
//       ),
//       tab3: (
//         <Table
//           pagination={false}
//           loading={loading}
//           dataSource={advancedOperation3}
//           columns={columns}
//         />
//       ),
//     };

//     return (
//       <PageHeaderLayout>
//         <Card
//           // className={styles.tabsCard}
//           bordered={false}
//           tabList={operationTabList}
//           onTabChange={this.onOperationTabChange}
//         >
//           {contentList[operationkey]}
//         </Card>
//       </PageHeaderLayout>
//     );
//   }
// }

