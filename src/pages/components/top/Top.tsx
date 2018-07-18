import * as React from 'react';
import { connect, Dispatch, SubscriptionAPI } from 'dva';
import styled from 'styled-components';
import { TopStore } from './Top.model';

const TopBox = styled.div`
	> div.topCenter {
		width: 100%;
		height: 100px;
		line-height: 100px;
		background: #011529;
		> div {
			text-align: left;
			overflow: hidden;
			width: 80%;
			height: 100%;
			margin: 0 auto;
			ul {
				height: 68px;
			}
			> i,> ul,li {
				display: inline-block;
			}
			a {
				color: white;
				font-size: 20px;
				text-shadow: 0px 1px 1px yellow;
				line-height: 36px;
				margin-right: 36px;
			}
			i {
				color: white;
				font-size: 60px;
				margin-right: 550px;
			}
		}
	}
`;

@(connect(({ top }: any) => ({ top })) as any) // tslint:disable-line  按住ctrl+d选中相同内容
export default class Top extends React.PureComponent<TopProps, TopState> {
	state: TopState = {};

	componentDidMount() {
		const { dispatch } = this.props as SubscriptionAPI;
		dispatch({ type: 'top/query' });
	}

	render() {
		return (
			<TopBox>
				<div className="topCenter">
					<div>
						<i className="iconfont icon-react" />
						<ul>
							<li>
								<a href="/">首页直达</a>
							</li>
							<li>
								<a href="active">活动链接</a>
							</li>
							<li>
								<a href="caseshow">案例展示</a>
							</li>
							<li>
								<a href="/">技术支持</a>
							</li>
							<li>
								<a href="/">事件发布</a>
							</li>
						</ul>
					</div>
				</div>
			</TopBox>
		);
	}
}

interface TopProps {
	top?: TopStore;
	dispatch?: Dispatch;
}
interface TopState { }
