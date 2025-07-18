import React, { Component, useEffect } from 'react'




const Header = (props) => {
  useEffect(() => {
    console.log('header실행!');
  }, [props.title,props.desc]);
  return (
    <header>
      <h1
        onClick={() => {
          props.onChangeMode();
        }}

      >{props.title}</h1>
      <p>{props.desc}</p>
    </header>
  )
}



// class Header extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     return false;
//   }
//   render() {
//     console.log('Header.js 실행');
//     return (
//       <>

//       </>
//     )
//   }
// }

export default Header;
