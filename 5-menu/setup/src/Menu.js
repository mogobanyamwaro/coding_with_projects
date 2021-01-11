import React from 'react';

const Menu = ({menuItems}) => {

  return (<div>
    {menuItems.map(menuItem=>{
      const {name,id,image,desc,price} = menuItem
      return <article key = {id}>
          <img src={image} alt={name}/>
          <h2>{price}</h2>
          <p>{desc}</p>
      </article>
    })}
   
  </div>);
};

export default Menu;
