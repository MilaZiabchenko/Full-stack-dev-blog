import { useRouteError, Link } from 'react-router-dom';
import { getErrorMessage } from '../helpers/getErrorMessage';

const Error = () => {
  const error = useRouteError();

  console.error(getErrorMessage(error));

  return (
    <>
      <h1>Oops, something went wrong :(</h1>
      <p className='text-center'>
        <Link to='/'>← Back to Homepage</Link>
      </p>
    </>
  );
};

export default Error;
