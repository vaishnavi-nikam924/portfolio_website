import Profile from '../../assets/Profile-image.png';
import { Link } from 'react-router';
import { RiArrowRightLine } from 'react-icons/ri';
import './home.css';
import { RiDownload2Line } from 'react-icons/ri';
import Cv from '../../pdf/Vaishnavi Nikam Resume VF1.pdf';

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt='' className='home-img' />
      <div className="home-content">
        <h1 className="home-title">Hi! I'm Vaishnavi</h1>
        <p className="home-description">A Master's student in Computer Science with a strong background in Algorithms and Databases.
          Currently exploring opportunities to apply my skills and learn new technologies along the way.
        </p>
        <Link to='/about' className='button'>More About Me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>
        <a href={Cv} download='' className="button button-download">
          Download Cv
          <span className="button-icon">
            <RiDownload2Line />
          </span>
        </a>
      </div>
      <div className='color-block'></div>
    </section>
  )
}
export default Home;
