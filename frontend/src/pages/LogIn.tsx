import {
  type FormEvent,
  type FocusEvent,
  type ChangeEvent,
  useState
} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getErrorMessage } from '../utils/getErrorMessage';

const LogIn = () => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const { email, password } = inputs;

  const navigate = useNavigate();

  const logIn = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(getAuth(), email, password);

      navigate('/articles');
    } catch (error) {
      setError(getErrorMessage(error));
    }
  };

  const handleBlur = (_e: FocusEvent<HTMLFormElement>) => {
    setError('');
  };

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={logIn} onBlur={handleBlur}>
      <h1>Log In</h1>
      <div className='form-inputs'>
        {error && <p className='error'>{error}</p>}
        <input
          type='email'
          placeholder='Email'
          autoComplete='off'
          required
          name='email'
          value={email}
          onChange={handleInputs}
        />
        <input
          type='password'
          placeholder='Password'
          autoComplete='off'
          required
          name='password'
          value={password}
          onChange={handleInputs}
        />
        <button type='submit'>Log In</button>
        <Link to='/signup'>Don't have an account? Create one!</Link>
      </div>
    </form>
  );
};

export default LogIn;
