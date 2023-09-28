import { Link } from 'react-router-dom';

const LoginPrompt = () => {
  return (
    <>
      <h3>
        <Link to="/library">
          <i className="fa-solid fa-arrow-right-to-bracket"></i> Logga in
        </Link>
      </h3>
      <p>
        eller <Link to="#">skapa ett konto</Link>
      </p>
    </>
  );
};
export default LoginPrompt;
