import { useNavigate } from 'react-router-dom';

const LogInButton = ({ children }: { children: string }) => {
  const navigate = useNavigate();

  return <button onClick={() => navigate('/login')}>{children}</button>;
};

export default LogInButton;
