import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';


export const counterFeatureKey = 'counter';

export interface State {

}

export const initialState = 0;

export const _counterReducer = createReducer(
  initialState,
  on(increment, state=>state+1),
  on(decrement, state=>state-1),
  on(reset, state=>0),
);

export function counterReducer(state:any,action:any){
  return _counterReducer(state,action)
}
