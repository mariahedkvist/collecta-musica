import PageHeader from '../../components/ui/PageHeader';
import LoginPrompt from '../../components/ui/LoginPrompt';

import './home.css';
import background from '../../assets/images/sheet.jpg';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(#c4bdbd33, #c4bdbdc4),
      url(${background})`,
      }}
      className="hero-wrapper"
    >
      <PageHeader headertext={'Collecta Musica'} />
      <main>
        <section className="login-prompt">
          <LoginPrompt />
        </section>
      </main>
    </div>
  );
};

export default Home;
