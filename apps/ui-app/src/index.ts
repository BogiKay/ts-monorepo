import { isEven } from '@monorepo/utils';
import moment from 'moment';

const Test = () => {
  const test = Math.floor(Math.random() * 5);
  console.log(`[${moment().toISOString()}] FooComponent: \
  ${test} -> isEven: ${isEven(test)}`);

  return {};
};

Test();
