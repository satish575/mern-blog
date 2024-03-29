import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="">
        <div className="">
          <div className="">
            <Link to={'/'} className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sahand's</span>
                Blog
            </Link>
          </div>
          <div className="grid gird-cols-2 gap-3 sm: mt-4 sm;grid-cols-3 sm:gap-6">
            <Footer.Title title="About"/>
            <Footer.LinkGroup col>
                <Footer.Link href="https://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">
                     100 js projects
                </Footer.Link>
                <Footer.Link href="https://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">
                     vlogs
                </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="grid gird-cols-2 gap-3 sm: mt-4 sm;grid-cols-3 sm:gap-6">
            <Footer.Title title="Folow us"/>
            <Footer.LinkGroup col>
                <Footer.Link href="https://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">
                     100 js projects
                </Footer.Link>
                <Footer.Link href="https://www.100jsprojects.com" target="_blank" rel="noopener noreferrer">
                     vlogs
                </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
