import { useState } from "react";
import "./Heading.css";

export default function Heading() {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [phone, setPhone] = useState(0);
    return (
        <div>
            <img className="img" width="250px" src="https://www.w3schools.com/w3images/avatar2.png" alt="user-img"/>
            <div className="head-div">
                <h1>{value}</h1>
            </div>
            <div className="head-div">
                <h3>{title}</h3>
            </div>
            <div className="head-div">
                <p>{desc}</p>
            </div>
            <div className="head-div">
                <p>{phone}</p>
            </div>
            <div className="half">
                <h3>First Name</h3>
                <input type="text" value={value} onChange={(event)=> {
                    setValue(event.target.value)
                }}/>
            </div>
            <div className="half">
                <h3>Title</h3>
                <input type="text" value={title} onChange={(event)=> {
                    setTitle(event.target.value)
                }}/>
            </div>
            <div className="half">
                <h3>Description</h3>
                <input type="text" value={desc} onChange={(event)=> {
                    setDesc(event.target.value)
                }}/>
            </div>
            <div className="half">
                <h3>Phone</h3>
                <input type="text" value={phone} onChange={(event)=> {
                    setPhone(event.target.value)
                }}/>
            </div>
        </div>
    );
}

