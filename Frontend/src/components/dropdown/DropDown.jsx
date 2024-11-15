import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice"
import axios from "axios";
export default function DropDown({ username }) {
  const dispatch = useDispatch();

  const logoutUser = async (e) => {
    e.preventDefault()
    const response = axios.get("/logout", { withCredentials: true });
    dispatch(logout());
  };

  return (
    <Menu as="div" className="relative inline-block text-left mr-2 ">
      <div>
        <MenuButton className="inline-flex w-full p-2 justify-center bg-[#6B796E] rounded-md  text-[#C7E7CD] shadow-sm hover:bg-gray-[#697E6D]">
          {username}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2  w-56 origin-top-right rounded-md bg-[#6B796E] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="/dashboard"
              className="block px-4 py-2 text-sm text-[#C7E7CD] data-[focus]:bg-[#e9ffb9] data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#C7E7CD] data-[focus]:bg-[#e9ffb9] data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#C7E7CD] data-[focus]:bg-[#e9ffb9] data-[focus]:text-gray-900"
            >
              My Pantry
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-[#C7E7CD] data-[focus]:bg-[#e9ffb9] data-[focus]:text-gray-900"
                onClick={logoutUser}
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}
