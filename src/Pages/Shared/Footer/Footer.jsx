import { FaBeer, FaFacebookF, FaGoogle, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer  p-10 bg-base-300 text-base-content">
      <nav>
        <header className="footer-title">ERAA Housing Estate</header>

        <Link to='https://www.era.pt/comprar/moradias/porto?ob=1&tp=2&lc=13-12&page=1&ord=3' >   <a className="link link-hover">Properties</a> </Link>
        <Link to='https://www.era.pt/comprar/moradias/porto?ob=1&tp=2&lc=13-12&page=1&ord=3' >   <a className="link link-hover">Working at Era</a> </Link>
        <Link to='https://www.era.pt/comprar/moradias/porto?ob=1&tp=2&lc=13-12&page=1&ord=3' >   <a className="link link-hover">Marketing</a> </Link>
        <Link to='https://www.era.pt/comprar/moradias/porto?ob=1&tp=2&lc=13-12&page=1&ord=3' >   <a className="link link-hover">Advertisement</a> </Link>


      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>

        <Link to='https://www.era.pt/comprar/moradias/porto?ob=1&tp=2&lc=13-12&page=1&ord=3' >   <a className="link link-hover">Jobs</a> </Link>
        <Link to='https://www.era.pt/comprar/moradias/porto?ob=1&tp=2&lc=13-12&page=1&ord=3' >   <a className="link link-hover">Press Kits</a> </Link>

      </nav>
      <nav>
        <header className="footer-title text-emerald-950 font-bold text-xl">All Social Link</header>
        <div className="grid grid-flow-col text-2xl gap-4">

          <Link to='https://www.facebook.com/eraimobiliaria/?locale=pt_PT' > <FaFacebookF></FaFacebookF> </Link>

          <Link to='https://www.google.com/search?q=era+imobili%C3%A1ria&sca_esv=587361146&sxsrf=AM9HkKkBcLIuwxJZoG4Tx-GqIZlfPSUCpw%3A1701561239638&ei=l8NrZYDLJpq69u8P4Y6QgAs&ved=0ahUKEwjA8oHK-fGCAxUanf0HHWEHBLAQ4dUDCBA&oq=era+imobili%C3%A1ria&gs_lp=Egxnd3Mtd2l6LXNlcnAiEGVyYSBpbW9iaWxpw6FyaWFIAFAAWABwAHgBkAEAmAEAoAEAqgEAuAEMyAEA4gMEGAAgQQ&sclient=gws-wiz-serp' ><FaGoogle></FaGoogle> </Link>

          <Link to='https://www.google.com/search?q=era+imobili%C3%A1ria+youtube&sca_esv=587361146&sxsrf=AM9HkKmPmJmjlOKN3vIq3tF7wiM6youBTA%3A1701561230531&ei=jsNrZZGIII3l7_UPw4GH6AM&oq=era+imobili%C3%A1ria+you&gs_lp=Egxnd3Mtd2l6LXNlcnAiFGVyYSBpbW9iaWxpw6FyaWEgeW91KgIIADIFECEYoAEyBRAhGKABSIEdULECWPkPcAJ4AJABAJgBoAGgAa4EqgEDMC40uAEByAEA-AEBwgIHECMYsAMYJ8ICChAAGEcY1gQYsAPCAgQQIxgnwgIKECMYgAQYigUYJ8ICCxAAGIAEGIoFGJECwgIFEAAYgATCAhEQLhiABBjHARivARimAxioA8ICBBAhGBXiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp' ><FaYoutube></FaYoutube> </Link>

          <Link to='https://www.google.com/search?q=era+imobili%C3%A1ria+linkedin&sca_esv=587361146&sxsrf=AM9HkKmPmJmjlOKN3vIq3tF7wiM6youBTA%3A1701561230531&ei=jsNrZZGIII3l7_UPw4GH6AM&oq=era+imobili%C3%A1ria+link&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWVyYSBpbW9iaWxpw6FyaWEgbGluayoCCAAyBRAhGKABMgUQIRigATIFECEYoAFIoB1QrgJY1hFwAXgAkAEAmAGUAaAB_gWqAQMwLja4AQHIAQD4AQHCAgcQIxiwAxgnwgIKEAAYRxjWBBiwA8ICBBAjGCfCAgoQIxiABBiKBRgnwgILEAAYgAQYigUYkQLCAgUQABiABMICERAuGIAEGMcBGK8BGKYDGKgDwgIGEAAYFhgewgIIEAAYFhgeGA_iAwQYACBBiAYBkAYK&sclient=gws-wiz-serp' ><FaLinkedinIn></FaLinkedinIn> </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;