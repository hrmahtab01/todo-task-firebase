import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set ,push,onValue} from "firebase/database";

const App = () => {
const [task ,setTTask] =useState("")
const [read,  setread] =useState([])

  let handlechange = ((e)=>{
    setTTask(e.target.value);
  });

let handleclick =(() =>{

const db = getDatabase();
set(push(ref(db, 'users/' )), {
 name:task
}).then = (() => {
  alert("Task added");
  setTTask("");
});


})



useEffect ( () =>{

  const db = getDatabase();
  const taskref = ref(db, 'users/' );
  onValue(taskref, (snapshot) => {
    let array = [];
   snapshot.forEach((item) =>{
     array.push(item.val());
     

   })
   setread(array)
  });
},[])

  return (
    <>
    <div className='w-[700px] h-[500px] bg-teal-500 mx-auto  rounded-[5px] flex justify-center items-center flex-col'>
      <h1 className='text-[36px] text-[#FFCC00] font-bold mb-[10px]'>todo form</h1>
      <input onChange={handlechange} value={task} className='border-none w-[400px] rounded-sm' type="text" placeholder='Enter your list' />
      <button onClick={handleclick} className='py-[5px] px-[8px] bg-[rgba(255,204,0,0.43)] mt-[10px] rounded-sm text-[26px] text-[#ffffff]'>submit</button>
      <ul>
      {read.map((item)=>{
return(
 <li>{item.name}</li>
)
      })};
    </ul>

    </div>

      
    </>
  )
}

export default App
