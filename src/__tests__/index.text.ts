import { foo } from '../index';

describe('index.ts', () => {
  it('exports "bar" as the value of "foo"', () => {
    expect(foo).toStrictEqual('bar');
  });
});
