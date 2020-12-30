import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [ //array of all the elements of the sidebar
  {
    title: 'About', //name in the sidebar
    path: '/dor-cohen-website/', //path after click on the sidebar
    icon: <AiIcons.AiFillHome />, //icon in the sidebar
    cName: 'nav-text' //name for style in the sidebar
  },
  {
    title: 'Projects',
    path: '/Projects',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/skills',
    icon: <IoIcons.IoMdStar />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Get My CV',
    path: '/cv',
    icon: <IoIcons.IoIosPaperPlane />,
    cName: 'nav-text'
  }

];