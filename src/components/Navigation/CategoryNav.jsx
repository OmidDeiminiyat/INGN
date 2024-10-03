import React, { useState } from 'react';
import style from './CategoryNav.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { Login } from "../../pages/Login";


const CategoryNav = ({ categories, selectedCategory, onCategoryClick }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


  return (
    <nav className={style.mainNav}>
    <hgroup>
        <h1> <a href="./">INGN </a></h1>
    </hgroup>
        <ul className={style.firstUl} >     
        {categories.map((category) => (
        <li
          key={category}
          onClick={() => onCategoryClick(category)}
          style={{
            color: selectedCategory === category ? '#007BFF' : '',
            cursor: 'pointer',
          }}
        >
          {category}
        </li >
      ))}
      </ul>
      <div>
        <FontAwesomeIcon icon={faUser} className={style.MyIcone}  variant="contained" color="primary" onClick={handleClickOpen} />
        <FontAwesomeIcon icon={faBars} className={style.MyIcone} />
                  
        </div>
        {open && (
        <Login open={open} handleClose={handleClose} />
         )}
        </nav>
        
  );
};

export default CategoryNav;
