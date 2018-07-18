import { Model, EffectsCommandMap, Action } from 'dva';
import { queryAjax } from './Footer.service';

const FooterModel: Model = {
	namespace: 'footer',
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
		save(state: FooterStore, action: Action) {
			return { ...state, ...action.payload };
		}
	}
};

export default FooterModel;

export interface FooterStore { }
