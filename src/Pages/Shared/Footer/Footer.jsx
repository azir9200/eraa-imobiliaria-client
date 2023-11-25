import { FaBeer, FaFacebookF, FaGoogle, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer  p-10 bg-base-300 text-base-content">
      <nav>
        <header className="footer-title">ERA Housing Estate</header>
        <a className="link link-hover">Properties</a>
        <a className="link link-hover">Working at Era</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title text-xl">Social</header>
        <div className="grid grid-flow-col text-2xl gap-4">

          <Link> <FaFacebookF></FaFacebookF> </Link>
          <Link><FaGoogle></FaGoogle> </Link>
          <Link><FaYoutube></FaYoutube> </Link>
          <Link><FaLinkedinIn></FaLinkedinIn> </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;