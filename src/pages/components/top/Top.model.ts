import { Model, EffectsCommandMap, Action } from 'dva';
import { queryAjax } from './Top.service';

const TopModel: Model = {
	namespace: 'top',
	state: {},
	effects: {
		*query({ payload }: Action, { put, call }: EffectsCommandMap) {
			const result = yield call(queryAjax, payload);
			if (result) {
				yield put({ type: 'save', payload: result });
			}
		}
	},
	reducers: {
		save(state: TopStore, action: Action) {
			return { ...state, ...action.payload };
		}
	}
};

export default TopModel;

export interface TopStore { }
