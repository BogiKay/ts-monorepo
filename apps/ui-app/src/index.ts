import { isEven } from '@monorepo/utils';

const Test = () => {
  const test = Math.floor(Math.random() * 5);
  console.log(`${test} is even: ${isEven(test)}`);

  return {};
};

Test();
