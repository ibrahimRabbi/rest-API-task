import { useRef } from "react";

 
function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)
    emailjs.sendForm('service_0ybscgd', 'template_uchnbjs', form.current, '1i82K5U5J2626tuR8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name"/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}

export default App



// data.append('upload_preset','kyvk5hkp')

// fetch('https://api.cloudinary.com/v1_1/dymnrefpr/image/upload', {
//   method: 'POST',
//   body: data
// })
//   .then(res => res.json())
// .then(res=>console.log(res))





//const submitHandler = async (e) => {
//     e.preventDefault()
//     const imageData = e.target.file.files
//     const data = new FormData()
   
//      for (let index = 0; index < imageData.length; index++) {
//              data.append(`image[${index}]`, imageData[index])
//   } 
  
//   fetch('https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131', {
//     method: "POST",
//     body: data
//   })
//     .then(res => res.json())
//     .then(res => console.log(res))
    
    
//   }


  // < form onSubmit = { submitHandler } >
  //     <input name="file" type="file" multiple/>
  //     <input className="border" type="submit" value="submit" />
  //   </ >


