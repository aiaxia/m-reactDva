import { Model, EffectsCommandMap, Action } from 'dva';
import { queryAjax } from './Active.service';

const ActiveModel: Model = {
	namespace: 'active',
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
		save(state: ActiveStore, action: Action) {
			return { ...state, ...action.payload };
		}
	}
};

export default ActiveModel;

export interface ActiveStore { }
