import IoCContainer from 'ioc-lite';
import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import { IoCResources } from 'src/types';

export const createIoCContainer = () => {
  const ioc = new IoCContainer<IoCResources>();
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.registerClass('users', Users);
  ioc.register('config', (window as any).__CONFIG__.api);

  return ioc;
};
