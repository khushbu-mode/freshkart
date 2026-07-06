import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-green-400">
              FreshKart
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Fresh groceries delivered to your doorstep.
              Fast, fresh and affordable every day.
            </p>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-green-400 cursor-pointer">
                About Us
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Contact
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Careers
              </li>

            </ul>

          </div>

          {/* Help */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Help
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-green-400 cursor-pointer">
                FAQs
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Terms & Conditions
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <div className="w-11 h-11 rounded-full bg-gray-800 hover:bg-green-600 transition flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-11 h-11 rounded-full bg-gray-800 hover:bg-green-600 transition flex items-center justify-center cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-11 h-11 rounded-full bg-gray-800 hover:bg-green-600 transition flex items-center justify-center cursor-pointer">
                <FaLinkedinIn />
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 FreshKart. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;