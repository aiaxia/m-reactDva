import { Model, EffectsCommandMap, Action } from 'dva';
import { getlist } from './Home.service';

const HomeModel: Model = {
	namespace: 'home',
	state: {
		list: []
	},
	effects: {
		*query({ payload }: Action, { put, call }: EffectsCommandMap) {
			const result = yield call(getlist, payload);
			if (result) {
				yield put({
					type: 'save',
					payload: {
						list: result.data.list
					}
				});
			}
		}
	},
	reducers: {
		save(state: HomeStore, action: Action) {
			return { ...state, ...action.payload };
		}
	}
};

export default HomeModel;

export interface HomeStore { }
