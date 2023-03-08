import React from 'react'

// function Food(props) {
//   //console.log(props);
//   return (
//     <div>I Love Food {props.propsName} , {props.propsName2} , {props.propsName3}</div>
//   )
// }

// function Food(props) {//구조분해할당1
//   console.log(props);
//   const {propsName,propsName2} = props;
//   return (
//     <div>I Love Food {propsName} , {propsName2} </div>
//   )
// }

function Food({propsName,propsName2} ) {//구조분해할당2
  return (
    <div>I Love Food {propsName} , {propsName2} </div>
  )
}

export default Food;