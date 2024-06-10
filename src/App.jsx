import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { MdDelete } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiSquareRemove } from "react-icons/ci";

const App = () => {
  const [task, setTTask] = useState("");
  const [read, setread] = useState([]);
  const [updatemodal, setupdatemodal] = useState(false);
  const [updateinput, setupdateinput] = useState("");
  const [id, setid] = useState("");

  let handlechange = (e) => {
    setTTask(e.target.value);
  };

  let handleclick = () => {
    const db = getDatabase();
    set(push(ref(db, "users/")), {
      name: task,
    }).then = () => {
      setTTask("");
    };
  };

  useEffect(() => {
    const db = getDatabase();
    const taskref = ref(db, "users/");
    onValue(taskref, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        array.push({ ...item.val(), key: item.key });
      });
      setread(array);
    });
  }, []);

  let handledelete = (id) => {
    const db = getDatabase();
    remove(ref(db, "users/" + id));
  };

  let handleUpdate = (id) => {
    setupdatemodal(true);
    setid(id);
  };
  let handleUpdateTask = (e) => {
    setupdateinput(e.target.value);
  };
  let handleupdateBTn = () => {
    const db = getDatabase();
    update(ref(db, "users/" + id), {
      name: updateinput,
    }).then = () => {
      setupdatemodal(false);
    };
  };

  return (
    <>
      <div className="w-[700px] bg-fuchsia-700 mx-auto  rounded-[5px] flex justify-center items-center flex-col text-center py-[30px] relative mt-[20px]">
        <h1 className="text-[36px] text-[#FFCC00] font-bold mb-[10px]">
          to-do form
        </h1>
        <input
          onChange={handlechange}
          value={task}
          className="border-none w-[400px] rounded-sm py-[7px] px-[5px]"
          type="text"
          placeholder="Enter your list"
        />
        <button
          onClick={handleclick}
          className="py-[5px] px-[8px] bg-[rgba(255,204,0,0.5)] mt-[10px] rounded-sm text-[26px] text-[#ffffff]"
        >
          submit
        </button>
        <ul>
          {read.map((item) => {
            return (
              <li className="bg-[rgba(255,204,0,0.8)] w-[700px] my-[7px] font-semi-bold relative py-[7px] text-[24px]">
                {item.name}{" "}
                <button
                  onClick={() => handledelete(item.key)}
                  className="text-[#000000] absolute right-[10px]"
                >
                  <MdDelete />
                </button>
                <button
                  className="absolute right-[40px]"
                  onClick={() => handleUpdate(item.key)}
                >
                  <MdDriveFileRenameOutline />
                </button>
              </li>
            );
          })}
          {updatemodal && (
            <div className="w-[500px] h-[250px] bg-[teal] absolute top-0 left-[100px] flex justify-center items-center flex-col">
              <h3 className="text-[24px] text-[#FFCC00] font-semibold mb-[7px]">
                UpdateTask
              </h3>
              <input
                onChange={handleUpdateTask}
                className="py-[3px] px-[2px] "
                type="text"
                placeholder="upadate your task"
              />
              <button
                onClick={() => setupdatemodal(false)}
                className="text-[40px] absolute right-0 top-0"
              >
                <CiSquareRemove />
              </button>

              <button
                onClick={handleupdateBTn}
                className="bg-[rgba(255,204,0,0.59)] px-[5px] py-[4px] rounded-[5px] mt-[10px] font-semi-bold"
              >
                Add Now
              </button>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default App;
