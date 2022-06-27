import React,{useState} from "react";


export default function Textform(props) {
    const handleupClick =()=>{
        console.log("Uppercase was Clicked"+text);
        let newText=text.toUpperCase();
        setText( newText);
        props.showalert("converted to uppercase!","success")
    }
    const handlelowClick =()=>{
        console.log("Uppercase was Clicked"+text);
        let newText=text.toLowerCase();
        setText( newText);
        props.showalert("converted to Lowercase!","success")
    }

    const handleonChange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
    const [text,setText]=useState("")

    return (
        <>
        <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="my-box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupClick}>Convert to uppercase </button>
            <button className="btn btn-primary mx-3" onClick={handlelowClick}>Convert to lowercase </button>

            </div>
            <div className="container  my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words {text.length} characters
                </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the  textbox above  to preview it here"}</p>
            </div>
            </>
            );
    }