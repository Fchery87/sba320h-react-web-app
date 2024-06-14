import PropTypes from 'prop-types';
import banner from '../assets/EssentialNewsv2.png';

const Header = ({ title = 'Essential News' }) => {
  return (
    <header>
      <div className="header-container">
        <img src={banner} alt={title} className="banner-image" />
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
