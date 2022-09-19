import * as Icon from 'react-feather';
import {  useState } from "react";
import { useMediaQuery } from "../../hooks/useMedia";
import SidebarHeader from "../sidebar/sidebarheader";
import Button from "../Forms/button";
import SidebarItem from '../sidebar/sidebaritem';

export const MainAppLayout = ({children}) => {

  const [showPanel, setShowPanel] = useState(false);

  let isMobile = useMediaQuery('(max-width: 768px)')

   const toggleShowPanel = () => {
    setShowPanel((prev) => !prev);
  };

    return (
        <div className="flex h-full">
            {/** Backdrop - Show on mobile */}
            <div
                className={`fixed inset-0 z-10 bg-opacity-75 lg:hidden`}
                style={{
                opacity: 0.5,
                display: isMobile && showPanel ? 'block' : 'none',
                }}
                aria-hidden="true"
                onClick={toggleShowPanel}
            ></div>

            <aside className={`fixed pt-12 pb-2 inset-y-0 z-10 lg:absolute bg-idpool-main w-80 ${isMobile && !showPanel && 'hidden'}`}>
                <div className="flex flex-col h-full space-y-6 overflow-y-hidden hover:overflow-y-auto">
                    <nav  className="space-y-1 px-2 mb-6 mt-2">
                        <SidebarHeader />
                    </nav>

                    {/* <nav className="flex-1 space-y-1 px-2 pt-12">
                        <SidebarItem />
                    </nav>
                    */}
                </div>
            </aside>

            <main
                className={`flex-1 w-full h-full ${ !isMobile && 'pl-80'} `}
            >
                {/* Mobile header */}
                <div
                    className={`sticky w-full flex items-center justify-between bg-idpool-main border-b border-vencru-stroke p-4 top-0 ${ !isMobile && 'hidden'} ${
                        isMobile && showPanel && 'opacity-10'
                    }`}
                >
                    <div className="flex items-center space-x-2">
                        <img style={{backgroundColor: '#FFFFFF',borderRadius: '10px'}} width='35px' height = '35px' src= 'https://blog.vencru.com/wp-content/uploads/2019/06/Vencru-Logo.png' alt="logo" />
                        <h2 className="text-lg font-medium text-vencru-main">Untitled UI</h2>
                    </div>
                    <Icon.Menu
                        width={24}
                        height={24}
                        className="text-white"
                        onClick={toggleShowPanel}
                    />
                </div>
                
                {/* content */}
                <div className="flex flex-col flex-1 h-full min-h-screen overflow-x-hidden overflow-y-auto bg-vencru-background">
                    {children}
                </div>
            </main>
        </div>
    )
}