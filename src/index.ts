import { createIoCContainer } from './ioc';
import type { Users } from './services/users';
import type { User } from './types';
const ioc = createIoCContainer();

window.onload = (event: Event) => {
  const logger = ioc.resolve('logger');
  logger.info('Page is loaded.');

  const usersService = ioc.resolve('users') as Users;
  renderUsers(usersService);
};

const renderUsers = async (usersService: Users) => {
  const users = await usersService.getUsers();

  const listNode = document.getElementById('users-list');

  users.forEach((user: User) => {
    const listItemNode = document.createElement('li');

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};
