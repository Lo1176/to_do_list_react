import React from "react";

const CurentlyDoing = (props) => {
  // console.log(props.show)
  // console.log(props.toggleTask);
  return (
    <div className="text-center">
      <h2>Curently doing</h2>
      <p>{props.doTheTask}</p>
    </div>
  );
};
// {task.doingTask === false ? 
//   <p>Not currently doing anything</p>
//  : 
//   <p>{task.name}</p>
// }
export default CurentlyDoing;
