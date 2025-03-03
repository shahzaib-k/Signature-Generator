import React, { useRef, useState } from "react";
import "./App.css";
import SignatureCanvas from "react-signature-canvas"

const App = () => {  
  
  const sigRef = useRef(null)
  const [color, setColor] = useState('#000000')
  const [image, setImage] = useState(null)

  

  const handleClear = () => {
    sigRef.current.clear()
  }

  const handleImage = () => {

      if(sigRef.current && !sigRef.current.isEmpty()){
        const dataURL = sigRef.current.toDataURL('image/png')
 
        const link = document.createElement("a")
        link.href = dataURL
        link.download = 'signature.png'
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      
        setImage(dataURL);
      }else{
        alert('Please draw something first')
      }
  }
  

  return (
    <>
   
      <h1 className="text-center mt-20 mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold" >Draw Your Signature Here</h1>

      <main className="flex items-center justify-center flex-col" >

        <div className="mb-4 flex flex-col items-center" >
          <h1 className="text-lg lg:text-2xl" >Text Color</h1>
          <input className="w-24 lg:w-32 rounded-xl px-1 cursor-pointer" type="color"  onChange={(e) => setColor(e.target.value)} />
        </div>

        <SignatureCanvas penColor={color} ref={sigRef} canvasProps={{
            className: "border border-gray-300 w-96 h-44",
          }} />
      
        <div className="flex gap-4 mt-10" > 
          <button onClick={handleClear} className="border border-[#00A3FA] text-[#00A3FA] rounded-2xl px-4"  >Clear & draw again</button>
          <button onClick={handleImage} className="bg-[#00A3FA] text-white rounded-2xl px-4 py-1" >Download Signature</button>
        </div>
      </main>
    </>
  );
};

export default App;



