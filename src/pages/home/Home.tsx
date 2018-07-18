import * as React from 'react';
import { connect, Dispatch, SubscriptionAPI } from 'dva';
import styled from 'styled-components';
import { HomeStore } from './Home.model';
import Footer from '../components/footer/Footer';
import Top from '../components/top/Top';
import { List } from 'antd-mobile';

const Item = List.Item;

const Homebox = styled.div`
	position: relative;
	min-height: 100vh;
	.main{
		text-align: center;
		min-height: 500px;
		>div{
			width: 80%;
			margin: 0 auto;
		}
	}
`;

@(connect(({ home }: any) => ({ home })) as any) // tslint:disable-line
export default class Home extends React.PureComponent<HomeProps, HomeState> {

	state: HomeState = {
		list: [],

	};

	componentDidMount() {
		const { dispatch } = this.props as SubscriptionAPI;
		dispatch({ type: 'home/query' });
	}

	render() {
		return (
			<Homebox>
				<Top />
				<div className="main">
					<div>
						<h1>车辆评估</h1>
						<List>
							<Item arrow="horizontal" onClick={() => {}}>*选择车型</Item>
						</List>
					</div>
				</div>
				<Footer />
			</Homebox>
		);
	}
}

interface HomeProps {
	home?: HomeStore;
	dispatch?: Dispatch;
}
interface HomeState {
}
