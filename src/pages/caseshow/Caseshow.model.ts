import { Model, EffectsCommandMap, Action } from 'dva';
import { queryAjax } from './Caseshow.service';

const CaseshowModel: Model = {
  namespace: 'caseshow',
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
    save(state: CaseshowStore, action: Action) {
      return { ...state, ...action.payload };
    }
  }
};

export default CaseshowModel;

export interface CaseshowStore {}
