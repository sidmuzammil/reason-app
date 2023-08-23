import React from "react";
import { useState } from "react";
import Axios from "axios";

//my personal idea but its working verry weardly and lot od code lines

// function App() {
//    const [partyReason,setPartyReason]=useState("")
//    const [familyReason,setFamilyReason]=useState("")
//    const [officeReason,setOfficeReason]=useState("")

//    const familyReasonIdea=()=>{
//      Axios.get("https://excuser-three.vercel.app/v1/excuse/family/").then((res)=>{
//       setFamilyReason((res.data[0].excuse))
//      })
//    }
//    const partyReasonIdea=()=>{
//     Axios.get("https://excuser-three.vercel.app/v1/excuse/party/").then((res)=>{
//      setPartyReason((res.data[0].excuse))
//     })
//   }
//   const officeReasonIdea=()=>{
//     Axios.get("https://excuser-three.vercel.app/v1/excuse/office/").then((res)=>{
//      setOfficeReason((res.data[0].excuse))
//     })
//   }

//   return (
//     <div className="App">
//       <div>
//         <button onClick={partyReasonIdea}>party</button>
//         <button onClick={familyReasonIdea}>family</button>
//         <button onClick={officeReasonIdea}>office</button>
//         <div>
//           <h1>party reason:- {partyReason}</h1>
//           <h1>family reason:- {familyReason}</h1>
//           <h1>office reason:- {officeReason}</h1>
//         </div>
//       </div>
//     </div>
//   );
// }




// this is suggest from that youtuber its so tricky and verry simple

function App() {

  const [reasonGenarate,setReasongenarate]=useState()

  const fetchData=(main)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${main}`).then((res)=>{
      setReasongenarate(res.data[0].excuse)
    })
  }
  return (
    <div>
      <button onClick={()=>{fetchData("party")}}>party</button>
      <button  onClick={()=>{fetchData("office")}}>office</button>
      <button  onClick={()=>{fetchData("family")}}>family</button>

      <div>{reasonGenarate}</div>
    </div>
    
  );
}

export default App;
