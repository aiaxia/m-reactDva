import * as React from 'react';
import { connect, Dispatch, SubscriptionAPI } from 'dva';
import styled from 'styled-components';
import { ActiveStore } from './Active.model';
import Footer from '../components/footer/Footer';
import Top from '../components/top/Top';

const ActiveBox = styled.div`
	text-align: center;
	.main{
		min-height: 500px;
	}
`;

@(connect(({ active }: any) => ({ active })) as any) // tslint:disable-line  按住ctrl+d选中相同内容
export default class Active extends React.PureComponent<ActiveProps, ActiveState> {

	state: ActiveState = {};

	componentDidMount() {
		const { dispatch } = this.props as SubscriptionAPI;
		dispatch({ type: 'active/query' });
	}

	render() {
		return (
			<ActiveBox>
				<Top />
				<div className="main">
					<h1>这里是活动页面</h1> 
				</div>
				<Footer />
			</ActiveBox>
		);
	}
}

interface ActiveProps {
	active?: ActiveStore;
	dispatch?: Dispatch;
}
interface ActiveState {
}
