import { z } from 'zod';

export const INPUT_NAME = {
  EMAIL: 'email',
  PASSWORD: 'password',
  OLD_PASSWORD: 'oldPassword',

};

export const INITIAL_VALUES = {
  [INPUT_NAME.EMAIL]: '',
  [INPUT_NAME.PASSWORD]: '',
  [INPUT_NAME.OLD_PASSWORD]: '',
};
