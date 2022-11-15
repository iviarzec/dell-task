import Message from '../models/Message';

import getMessageData from '../mocks/mock';

// Promise to simulate REST API request
export const dataApi = {
  getMessages: (): Promise<Message[]> => {
    return Promise.resolve(getMessageData());
  },
};
