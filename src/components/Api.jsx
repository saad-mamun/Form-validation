import React, { useEffect, useState } from "react";
import axios from "axios";
const Api = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );
    setData(response.data);
  };

// button click na korei data show korte chile 

// useEffect(()=>{
//     getData()
// },[])




  return (
    <div>
      <button
        onClick={getData}
        className="bg-teal-700 text-white px-7 py-3 rounded-lg font-bold text-3xl active:scale-90"
      >
        Get Data
      </button>
      <div>
        {data.map(function (elem, idx) {
          return <div
           key={idx}
           className="bg-gray-100 text-black flex items-center justify-between w-full px-7 py-4 rounded-lg mb-3">
            <img className="w-32 h-32" src={elem.download_url} alt="Image" />
            <h1>{elem.author}</h1>
            <a href={elem.url}>user link</a>
           </div>
        })}
      </div>
    </div>
  );
};

export default Api;
