import Image from "next/image";
import myImage from "../public/FB_IMG_1620331899007.jpg";
import HoverLink from "./HoverLink";
import { executeScroll } from "../utils/scroll";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import { useRouter } from "next/router";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const menuClick = async (e, id) => {
    if(router.route === '/projects/[id]') {
      await router.push('/');
    }
    setIsExpanded(false);
    executeScroll(e, id);
  }


  return (
    <>
    <div className="sticky top-0 z-50">
    <header className="text-stone-200 flex flexWrap md:flex-nowrap z-50 bg-stone-800 p-4 justify-between items-center z-50">
        <div className="container mx-auto z-50">
          <nav className="z-50">
            <div className="px-2 sm:px-6 lg:px-8 z-50">
              <div className="relative flex items-center justify-between h-16 z-50">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden z-50">
                  <MenuIcon onClick={setIsExpanded} isExpanded={isExpanded} />
                </div>
                

                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start md:justify-between">
                  
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-50">
                    <div className="relative flex-shrink-0 flex items-end">
                      <Image
                        src={myImage}
                        width={56}
                        height={56}
                        className=" rounded-full"
                        alt="Sean"
                      />
                      
                    </div>
                    <div className="pl-3 block">
                    <Link href="/">
                      <a className="font-bold text-2xl flex flex-wrap">
                        Sean Midgley
                      </a>
                    </Link>
                  </div>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex">
                      {/* <!-- Current: "bg-gray-900 textWhite", Default: "text-gray-300 hover:bg-gray-700 hover:textWhite" --> */}
                      <HoverLink
                        bgColor="bg-transparant"
                        id="aboutme"
                        onClick={executeScroll}
                      >
                        About Me
                      </HoverLink>
                      <HoverLink
                        bgColor="bg-transparant"
                        id="contact"
                        onClick={executeScroll}
                      >
                        Contact
                      </HoverLink>
                      <HoverLink
                        bgColor="bg-transparant"
                        id="projects"
                        onClick={executeScroll}
                      >
                        Projects
                      </HoverLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={`sm:hidden transition -z-40 transform ease-out duration-300 absolute w-full bg-stone-800 left-0 ${
          isExpanded ? `translate-y-0` : `translate-y-[-250px]`
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 flex flex-col">
          <HoverLink
            bgColor="bg-transparant"
            id="aboutme"
            onClick={menuClick}
          >
            About Me
          </HoverLink>
          <HoverLink
            bgColor="bg-transparant"
            id="contact"
            onClick={menuClick}
          >
            Contact
          </HoverLink>
          <HoverLink
            bgColor="bg-transparant"
            id="projects"
            onClick={menuClick}
          >
            Projects
          </HoverLink>
        </div>
      </div>
    </div>
    </>
  );
}
