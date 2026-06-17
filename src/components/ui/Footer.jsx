import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineCopyright,
} from "react-icons/ai";
import { LuMailCheck } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-cyan-darkest text-cyan-lightest px-20">
      <div className="flex items-center justify-center gap-4 py-4">
        <a href="#">
          <AiFillFacebook />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="grid grid-cols-4 items-start justify-between py-6 [&_div]:max-w-50 [&_div>div]:flex [&_div>div]:flex-col [&_div>div]:gap-1 [&_div>h3]:mb-6 [&_div>h3]:font-semibold">
        <div>
          <h3>About us</h3>

          <div>
            <p>Company</p>
            <p>Leadership</p>
            <p>Our features</p>
            <p>Pricing</p>
          </div>
        </div>

        <div>
          <h3>Help & Support</h3>

          <div>
            <p>Customer support</p>
            <p>Organizer support</p>
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Contact us</p>
            <p>Report a scam</p>
          </div>
        </div>

        <div>
          <h3>Connect with us</h3>

          <div>
            <p>Press</p>
            <p>Blog</p>
            <p>Join our team</p>
          </div>
        </div>

        <div>
          <h3>Sign up for newsletter</h3>

          <div>
            <p className="mb-1 text-xs">
              Sign up now and be the first to know about exclusive offers,
              latest fashion news & style tips!
            </p>

            <form>
              <div className="mb-3 text-xs">
                <label className="mb-1 block font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="h-9 w-full rounded-md bg-white"
                />
              </div>

              <button className="bg-orange h-9 w-full rounded-md">
                <LuMailCheck className="mr-2 inline" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1 py-4 text-[10px]">
        <AiOutlineCopyright />
        <p>Evolution Events, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
