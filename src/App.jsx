import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import Hello from './Hello';


function App() {
  
  const handleClick = (e) => {
    e.preventDefault()
    const postData = {
      Attached_Document: new File(["/media/Files/Rasel-Roky.pdf"], 'filename.txt', { type: 'text/plain' }),
      Business_Location: 1,
      Supplier: 1,
      Address: e.target.address.value,
      
    };

    const formData = new FormData();
    formData.append('Attached_Document', postData.Attached_Document);
    formData.append('Business_Location', postData.Business_Location);
    formData.append('Supplier', postData.Supplier);
    formData.append('Address',postData.Address)

    fetch('https://softwareapi.techelementbd.com/papi/addpurchaseapil/', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  return (
    <form onSubmit={handleClick} className='w-1/2 border mx-auto mt-10 p-10'>
      <div className='flex gap-4 mt-5'>
        <input type="number" placeholder="pakage" name='pakage' className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Ref No" name='ref_no' className="input input-bordered w-full max-w-xs" />
      </div>

      <div className='flex gap-4 mt-5'>
        <input type="number" placeholder="payment term" name='term' className="input input-bordered w-full max-w-xs" />
        <input type="number" placeholder="purches status" name='status' className="input input-bordered w-full max-w-xs"/>
      </div>

      <div className='flex gap-4 mt-5'>
        <input type="text" placeholder="adress" name='address' className="input input-bordered w-full mt-5"/>
        <input type="number" placeholder="location" name='location' className="input input-bordered w-full mt-5" />
      </div>

      <div className='flex gap-4 mt-5'>
        <input type="file" name='file' className="file-input file-input-bordered w-full max-w-xs"/>
        <input type="number" placeholder="supplier" name='supplier' className="input input-bordered w-full max-w-xs"/>
      </div>

      <input type="submit" value="submit" className='btn w-full mt-5 bg-amber-500' />
    </form>
  )

}

export default App;





// const [city, setCity] = useState(["Dhaka", "Mymonsing"])
//   const countryes = [
//     {
//       name: "Bangladesh",
//       value: "BD",
//       cities: ["Dhaka", "Mymonsing"],
//     },
//     {
//       name: "Pakisthan",
//       value: "PK",
//       cities: ["Lahore", "Karachi"],
//     },
//   ];

//   const changHandler = (e) => {
//     console.log(e.target.value)
//     const finding = countryes.find(v => v.name === e.target.value)
//     setCity(finding.cities)
//   }
//   return (
//     <div>
//       <select defaultValue="Bangladesh" onChange={changHandler} name="" id="">
//         {countryes.map(v => <option>{v.name}</option>)}
//       </select>
//       <br /><br /> <br />
//       <select name="" id="">
//         {city.map(v => <option>{v}</option>)}
//       </select>
//     </div>


//   );










