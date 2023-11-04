import { Instagram, Facebook, Twitter } from "../../assets"

const BottomNav = () => {
  return (
    <div>
        <div className="flex justify-between mb-[2rem]">
            <div className="flex">
                <div className="ml-[1rem] mr-[4rem]">
                    <h1 className="font-bold mb-2">Company</h1>
                    <ul className="text-[#a4a4a4]">
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">About</li>
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">Jobs</li>
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">For the Record</li>
                    </ul>
                </div>
                <div className="ml-[1rem] mr-[4rem]">
                    <h1 className="font-bold mb-2">Communities</h1>
                    <ul className="text-[#a4a4a4]">
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">For Artists</li>
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">Developers</li>
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">Advertising</li>
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">Investors</li>
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">Vendors</li>
                    </ul>
                </div>
                <div className="ml-[1rem] mr-[4rem]">
                    <h1 className="font-bold mb-2">Useful Links</h1>
                    <ul className="text-[#a4a4a4]">
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">Support</li>
                        <li className="hover:text-white hover:underline cursor-pointer mb-1 font-semibold">Free Mobile App</li>
                    </ul>
                </div>
            </div>
            <div>
                <ul className="flex">
                    <li className="p-3 bg-[#292929] mr-2 rounded-full"><img className="h-[1.5rem]" src={Instagram} alt="" /></li>
                    <li className="p-3 bg-[#292929] mr-2 rounded-full"><img className="h-[1.5rem]" src={Facebook} alt="" /></li>
                    <li className="p-3 bg-[#292929] mr-2 rounded-full"><img className="h-[1.5rem]" src={Twitter} alt="" /></li>
                </ul>
            </div>
        </div>
        <div className="border-t-2 border-t-[#292929] mb-[2rem]"></div>
        <div className="text-[#a1a1a1] font-semibold mb-[5rem]">&copy; 2023 Spotify AB</div>
    </div>
  )
}

export default BottomNav