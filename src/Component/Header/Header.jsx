import headerLogo from '../../assets/logo.png';
import DoubleDollar from '../../assets/DoubleDollar.png';

const Header = ({coin}) => {
    return (
      <div className="container mx-auto navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <img src={headerLogo} alt="header logo" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex flex-row gap-5">
            <li>
              <a className="text-lg text-[#131313] font-semibold">Home</a>
            </li>
            <li>
              <a className="text-lg text-[#131313] font-semibold">Fixture</a>
            </li>
            <li>
              <a className="text-lg text-[#131313] font-semibold">Teams</a>
            </li>
            <li>
              <a className="text-lg text-[#131313] font-semibold">Schedules</a>
            </li>
          </ul>
        </div>
        <div className="ml-3">
          <button className="btn">
           {coin} Coins <img className='ml-2' src={DoubleDollar} alt="DoubleDollar image" />
          </button>
        </div>
      </div>
    );
};

export default Header;