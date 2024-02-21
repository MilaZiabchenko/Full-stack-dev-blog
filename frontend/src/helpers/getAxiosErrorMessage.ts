import axios, { AxiosError } from 'axios';

const getAxiosErrorMessage = (error: AxiosError | unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.request) return `Network error: ${error.request.status}`;

    if (error.response) return `Server error: ${error.response.status}`;

    return error.message;
  }

  return `An unexpected error occurred: ${String(error)}`;
};

export { getAxiosErrorMessage };
