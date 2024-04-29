import Layout from "../components/Layout.tsx";
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbWeight } from "react-icons/tb";
import { PiRuler } from "react-icons/pi";
import { useState } from "react";

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  weight: number;
  height: number;
  gender: string;
}

export default function Register() {
  const [registerForm, setRegisterForm] = useState<IRegisterForm>({} as IRegisterForm);

  return (
    <Layout>
      <div className="flex items-center justify-center w-full px-4">
        <div className="w-[30rem] overflow-hidden rounded-lg bg-white shadow-md pt-16 pb-8 px-10 text-center my-32">
          <div className="mb-10 text-center md:mb-16">
            <div className="mx-auto inline-block max-w-[160px]">
              <h1 className="text-primary font-bold text-3xl">Sign Up</h1>
            </div>
          </div>
          <form>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <FaRegUser
                className="text-gray-400"
                size="1.25rem"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <MdOutlineEmail
                className="text-gray-400"
                size="1.5rem"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <MdOutlineLock
                className="text-gray-400"
                size="1.5rem"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <MdOutlineLock
                className="text-gray-400"
                size="1.5rem"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
                <TbWeight
                  className="text-gray-400"
                  size="1.5rem"
                />
                <input
                  type="number"
                  placeholder="Weight"
                  className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
                />
              </div>
              <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
                <PiRuler
                  className="text-gray-400"
                  size="1.5rem"
                />
                <input
                  type="number"
                  placeholder="Height"
                  className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="flex items-center ps-4 w-full border rounded-md">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  onClick={() => setRegisterForm({ ...registerForm, gender: "male" })}
                  checked={registerForm.gender === "male"}
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="w-full py-4 ms-2 text-base font-medium text-start text-gray-400">
                  Male
                </label>
              </div>
              <div className="flex items-center ps-4 w-full border rounded-md">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  onClick={() => setRegisterForm({ ...registerForm, gender: "female" })}
                  checked={registerForm.gender === "female"}
                  name="bordered-radio"
                  className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="bordered-radio-2"
                  className="w-full py-4 ms-2 text-base font-medium text-start text-gray-400">
                  Female
                </label>
              </div>
            </div>
            <div className="mb-10">
              <input
                type="submit"
                value="Sign In"
                className="w-full px-5 py-3 text-base font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90"
              />
            </div>
          </form>
          <p className="text-base text-secondary gap-2">
            <span className="pr-0.5">Sudah punya akun?</span>
            <Link
              to="javascript:void(0)"
              className="text-primary hover:underline">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}