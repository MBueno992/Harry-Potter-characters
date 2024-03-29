import gryffindor from '../images/gryffindor.png';
import slytherin from '../images/slytherin.png';
import ravenclaw from '../images/ravenclaw.png';
import hufflepuff from '../images/hufflepuff.png';
import shield from '../images/escudo.png';
import harryPotter from '../images/harryPotter.png';
import '../scss/layout/Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__houses">
        <div className="header__houses--flag">
          <img src={gryffindor} alt="gryffindor house" />
          <img src={slytherin} alt="slytherin house" />
        </div>
        <div className="header__houses--school">
          <img src={shield} alt="Hogwarts Shield" />
          <img src={harryPotter} alt="Hogwarts" />
        </div>
        <div className="header__houses--flag">
          <img src={ravenclaw} alt="ravenclaw house" />
          <img src={hufflepuff} alt="hufflepuff house" />
        </div>
      </div>
    </header>
  );
}

export default Header;
