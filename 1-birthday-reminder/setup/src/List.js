import React from 'react';

const List = ({people}) => {
  return (
    <>
    {people.map(person=>{
      const {id,name,image,age} = person;
      return(
        <article key ={id} className='person'>
          <img src={image} alt={name}/>
          <div>
            <h1>{name}</h1>
            <h2>{age} years</h2>
          </div>

        </article>
      )
    })}
    </>
  );
};

export default List;
