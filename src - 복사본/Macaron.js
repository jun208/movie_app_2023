//클래스형 컴포넌트 rce
// import React, { Component } from 'react'

// export class Macaron extends Component {
//   render() {
//     return (
//       <div>Macaron</div>
//     )
//   }
// }

// export default Macaron;
    
//함수형 컴포넌트 rfce
  // import React from 'react'
  
  // function Macaron(props)
  // {
  //   return (
  //     <div>
  //       <h1>No. {props.propsid}</h1>
  //       <h2>Name: {props.propsname}</h2>
  //       <img src={props.propsimage} alt='' />
  //     </div>

  //   )
  // }

  // import React from 'react'
  
  // function Macaron(props)
  // {
  //   const {propsid,propsname,propsimage} = props;
  //   return (
  //     <div>
  //       <h1>No. {propsid}</h1>
  //       <h2>Name: {propsname}</h2>
  //       <img src={propsimage} alt='' />
  //     </div>

  //   )
  // }
  
  import React from 'react'
  
  function Macaron({propsid,propsname,propsimage})
  {
    return (
      <div>
        <h1>No. {propsid}</h1>
        <h2>Name: {propsname}</h2>
        <img src={propsimage} alt='' />
      </div>

    )
  }
  
  export default Macaron;


 