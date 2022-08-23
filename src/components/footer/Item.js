import React from 'react';
//import { Link } from 'react-router-dom';

const Item = ({title, links}) => {
  return (
    <ul>
      <h1 className='mb-1 font-semibold'>{title}</h1>
      {
         links.map((link) => (
            <li key={link.name}>
               <a href={link.link} className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer">{link.name}</a>
            </li>
         ))
      }
    </ul>
  )
}

export default Item;