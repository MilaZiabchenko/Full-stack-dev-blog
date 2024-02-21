import type { User } from 'firebase/auth';

const getUserTokenAndHeaders = async (user: User | null) => {
  const token = user && (await user.getIdToken());

  const headers = token ? { authtoken: token } : {};

  return headers;
};

export { getUserTokenAndHeaders };
