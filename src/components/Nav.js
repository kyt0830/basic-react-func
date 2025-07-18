import React, { } from 'react'





const Nav = (props) => {

  // useEffect((nextProps, nextState) => {
  // console.log('업데이트');
  // if (nextProps.data === props.data) {
  //   return false;
  // }
  // return true;
  // }, [])

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(
  //     'shouldComponentUpdate 작동',
  //     nextProps.data, //변경된 값
  //     this.props.data //변경전의 값;
  //   );
  //   if (nextProps.data === this.props.data) {
  //     return false;//render() 실행하지 않는다. 메뉴 다시 출력 않는다.
  //   }
  //   return true; //render() 실행, 메뉴 다시 출력
  // }
  console.log('업데이트');

  let lists = [];
  let data = props.data;
  console.log(data);
  data.forEach(item => {
    lists.push(
      <li key={item.id} onClick={(e) => {
        e.preventDefault();
        props.onChangeMode(item.id);
      }}><a href="/">{item.title}</a></li>
    );
  })
  return (
    <>
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    </>
  )

}

const areEqual = (prevProps, nextProps) => {
  console.log(prevProps,nextProps);
  return prevProps.data === nextProps.data;
  // return true;
}
export default React.memo(Nav, areEqual);
// export default Nav;



// class Nav extends Component {

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   console.log(
//   //     'shouldComponentUpdate 작동',
//   //     nextProps.data, //변경된 값
//   //     this.props.data //변경전의 값;
//   //   );
//   //   if (nextProps.data === this.props.data) {
//   //     return false;//render() 실행하지 않는다. 메뉴 다시 출력 않는다.
//   //   }
//   //   return true; //render() 실행, 메뉴 다시 출력
//   // }

//   render() {
//     console.log('Nav.js 실행');
//     let lists = [];
//     let data = this.props.data;
//     console.log(data);
//     /*
//     let i = 0;
//     while(i<data.length){
//       lists.push(<li><a>{data[i].title}</a></li>);
//       i++;
//     }
//     */
//     data.forEach(item => {
//       lists.push(
//         <li key={item.id} onClick={(e) => {
//           e.preventDefault();
//           this.props.onChangeMode(item.id);
//         }}><a href="/">{item.title}</a></li>
//       );
//     })
//     return (
//       <>
//         <nav>
//           <ul>
//             {lists}
//           </ul>
//         </nav>
//       </>
//     )
//   }
// }


