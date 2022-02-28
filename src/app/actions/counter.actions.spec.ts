import * as fromCounter from './counter.actions';

describe('counterComponentCounters', () => {
  it('should return an action', () => {
    expect(fromCounter.counterComponentCounters().type).toBe('[Counter] CounterComponent Counters');
  });
});
