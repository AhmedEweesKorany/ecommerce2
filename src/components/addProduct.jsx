import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useState } from "react";
function AddProduct() {
    const [ProductName , setProductName] = useState("");
    const [ProductDescription , setProductDescription] = useState("");
    const [Productprice , setProductprice] = useState(0);
    const [ProductQuantitty , setProductQuantitty] = useState(0);
    const dis = (e)=>{
        window.location.href = "/products";
    }
    // const final = s
    const send = document.getElementById("send")
    const check = ()=>{
        if(ProductName =="" || ProductDescription =="" || ProductQuantitty ==0  || Productprice ==0){
            document.getElementById("final").innerHTML = "من فضلك قم بادخال البيانات كاملة"
            console.log("dsd")
        }else{
            document.getElementById("final").innerHTML = ""
            send.disabled = false
        }
    }
    useEffect(()=>{
        check()
    })
    return ( 
        <div className="container-fluid">
            <Navbar/>
            <div className="container">

            
            <form >
                <div className="form-block">
                    <label className="form-label">أسم المنتج</label>
                    <input type="text" className="form-control"  onChange={(e)=>{setProductName(e.target.value)}} />
                    <p id="errorname"></p>
                </div>
                <div className="form-block">
                    <label className="form-label">وصف المنتج</label>
                    <input type="text" className="form-control" onChange={(e)=>{setProductDescription(e.target.value)}}  />
                    <p id="errordes"></p>
                </div>
                <div className="form-block">
                    <label className="form-label">سعر المنتج</label>
                    <input type="number" className="form-control" onChange={(e)=>{setProductprice(e.target.value)}} />
                    <p id="errorprice"></p>
                </div>
                <div className="form-block">
                    <label className="form-label">كمية المنتج</label>
                    <input type="number" className="form-control" onChange={(e)=>{setProductQuantitty(e.target.value)}} />
                    <p id="errorquantity"></p>
                </div>
                <div className="form-block">
                    <label className="form-label">صورة المنتج</label>
                    <input type="file" className="form-control" />
                </div>
                <p id="final" className="text-danger mt-3 mb-3"></p>
                <div className="text-center mt-3">
                    <button className="btn btn-primary w-50" id='send' type="submit" disabled onClick={dis}> اضف المنتج</button>
                </div>
            </form>
            </div>
            <Footer/>
        </div>
    );
}

export default AddProduct;