import * as React from 'react';
import { connect, Dispatch, SubscriptionAPI } from 'dva';
import styled from 'styled-components';
import { FooterStore } from './Footer.model';

const FooterBox = styled.div`
	text-align: center;
	width: 100%;
	height: 140px;
	background: #011529;
	ul{
		margin-left: -22px;
		padding-bottom: 20px;
		border-bottom: 1px solid #aaa;
		li{
			display: inline-block;
			margin: 50px 10px 0 0;
			a{
				cursor: pointer;
			}
		}
	}
	P{
		color: #999;
	}
	.ant-layout-content {
		min-width: 600px;
		margin: 0 auto;
	}
`;

@(connect(({ footer }: any) => ({ footer })) as any) // tslint:disable-line  按住ctrl+d选中相同内容
export default class Footer extends React.PureComponent<FooterProps, FooterState> {

	state: FooterState = {};

	componentDidMount() {
		const { dispatch } = this.props as SubscriptionAPI;
		dispatch({ type: 'footer/query' });
	}

	render() {
		return (
			<FooterBox>
				<ul>
					<li><a href="#">技术支持</a></li>
					<li><a href="#">合作公司</a></li>
					<li><a href="#">公司历程</a></li>
					<li><a href="#">用户反馈</a></li>
					<li><a href="#">联系我们</a></li>
					<li><a href="#">投诉建议</a></li>
				</ul>
				<p>版权和其所权益归属©️二少爷2018.06.10</p>
			</FooterBox>
		);
	}
}

interface FooterProps {
	footer?: FooterStore;
	dispatch?: Dispatch;
}
interface FooterState {
}
