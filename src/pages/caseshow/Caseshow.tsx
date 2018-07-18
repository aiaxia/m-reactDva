import * as React from 'react';
import { connect, Dispatch, SubscriptionAPI } from 'dva';
import styled from 'styled-components';
import CaseshowModel, { CaseshowStore } from './Caseshow.model';
import Footer from '../components/footer/Footer';
import Top from '../components/top/Top';

const CaseshowBox = styled.div`
  text-align: center;
  .main {
    min-height: 500px;
  }
`;

@(connect(({ caseshow }: any) => ({ caseshow })) as any) // tslint:disable-line  按住ctrl+d选中相同内容
export default class Caseshow extends React.PureComponent<CaseshowProps, CaseshowState> {
  state: CaseshowState = {};

  componentDidMount() {
    const { dispatch } = this.props as SubscriptionAPI;
    dispatch({ type: 'caseshow/query' });
  }

  render() {
    return (
      <CaseshowBox>
        <Top />
        <div className="main">
          <h1>这里是案例展示</h1>
        </div>
        <Footer />
      </CaseshowBox>
    );
  }
}

interface CaseshowProps {
  caseshow?: CaseshowStore;
  dispatch?: Dispatch;
}

interface CaseshowState {}
