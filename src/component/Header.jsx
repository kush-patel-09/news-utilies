import React  from 'react'

const Header = (props) => {
  
    const { title,desc} = props;
    return (
      <>
      <div className="header">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      </>
    )
  }


export default Header;