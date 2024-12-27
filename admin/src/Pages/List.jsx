import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App.jsx";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <p className="mb-2"></p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          {/* <b>Image</b> */}
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* list product */}
          {list.map((item,index)=>(
            <div key={index} className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm">
              {/* <img src={item.image[0]}/> */}
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p className="text-right md:text-center cursor-pointer text-lg">X</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default List;
