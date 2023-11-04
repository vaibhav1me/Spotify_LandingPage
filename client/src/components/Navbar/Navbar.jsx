import { Link } from 'react-router-dom'
import {Logo, Home, Search,Library, Plus, Globe} from '../../assets'

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="min-w-[18rem] w-[25%] p-[.3rem] h-[100%] overflow-auto"
    >
      <div className="bg-[#121212] px-[1.2rem] py-[0.5rem] mb-[0.5rem] rounded-lg h-[25%]">
        <ul className="">
          <li className="my-[1rem]">
            <img className="h-[1.5rem]" src={Logo} alt="logo" />
          </li>
          <Link to="/" className="my-[1rem] flex items-center">
            <img className="h-[1.5rem] inline" src={Home} alt="Home" />
            <span className="ml-[.5rem] font-bold">Home</span>
          </Link>
          <Link to="/search" className="my-[1rem] flex items-center">
            <img className="h-[1.5rem] inline" src={Search} alt="Home" />
            <span className="ml-[.5rem] font-bold">Search</span>
          </Link>
        </ul>
      </div>

      <div className="bg-[#121212] p-[1rem] pb-[1rem]  rounded-lg flex flex-col justify-between h-[73.5%]">
        <div className='mb-[1rem]'>
          <div className="relative flex mb-[1rem]">
            <img className="h-[1.5rem] inline" src={Library} alt="" />
            <span className="ml-[.5rem] font-bold">Your Library</span>
            <img
              className="h-[1.5rem] inline absolute top-0 right-0"
              src={Plus}
              alt=""
            />
          </div>

          <div className="py-[.5rem] h-[30vh] min-h-[10rem] overflow-auto">
            <div className="bg-[#242424] rounded-lg p-[1rem] mb-[1rem]">
              <p className="font-bold text-[.95rem] mb-[.3rem]">
                Create your first playlist
              </p>
              <p className="text-[.8rem] mb-[1rem]">
                It's easy, we'll help you
              </p>
              <button className="bg-white text-black rounded-2xl px-[1rem] py-[.2rem] font-semibold">
                Create playlist
              </button>
            </div>

            <div className="bg-[#242424] rounded-lg p-[1rem]">
              <p className="font-bold text-[.95rem] mb-[.3rem]">
                Let's find some podcasts to follow
              </p>
              <p className="text-[.8rem] mb-[1rem]">
                We'll keep you updated on new episodes
              </p>
              <button className="bg-white text-black rounded-2xl px-[1rem] py-[.2rem] font-semibold">
                Browse Podcasts
              </button>
            </div>
          </div>
        </div>

        <div className='mb-[1rem]'>
          <div className="mb-[3rem]">
            <ul className="text-[#A7A7A7] flex flex-wrap text-[.7rem]">
              <li className="mx-3 my-1">Legal</li>
              <li className="mx-3 my-1">Privacy Center</li>
              <li className="mx-3 my-1">Privacy Policy</li>
              <li className="mx-3 my-1">Cookies</li>
              <li className="mx-3 my-1">About Ads</li>
              <li className="mx-3 my-1">Accessibility</li>
            </ul>
          </div>

          <span className="border-white border-[2px] px-[.6rem] py-[.2rem] rounded-3xl cursor-pointer mt-[5rem]">
            <img className="h-[1rem] inline" src={Globe} alt="" />
            <span className="font-medium text-[.8rem]">English</span>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar