import Navbar from "./Navbar";
import Footer from "./Footer";
function Details() {
    return (  
        <div className="container-fluid">
                        <Navbar/>
        <div class="d-flex justify-content-center container mt-5 ">
        <div class="card p-3 bg-white shadow"><i class="fa fa-apple"></i>
                <div class="about-product text-center mt-2 "><img src="https://imgs.search.brave.com/wWumDhDoFV1NGKEXBBBEgn-hZvFDniyUZIJ5IZ7fqBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc4LzI0LzI5/LzM2MF9GXzc4MjQy/OTAyX2tobmFmbWs0/dXpvSFdFRU5tQTRw/U0ZVdzEzVUVZSEc5/LmpwZw" width="450"/>
                    <div>
                        <h4>طماطم</h4>
                        <h6 class="mt-0 text-black-50">طماطم من اجود الانواع و انتاج محلي</h6>
                    </div>
                </div>
                <div class="stats mt-2">
                    <div class="d-flex justify-content-between p-price"><span>الكمية</span><span>200</span></div>
                </div>
                <div class="d-flex justify-content-center total font-weight-bold mt-4 "><p className="text-cnter  text-primary">أضف الي السلة</p></div>
        </div>
    </div>
        <Footer/>
        </div>
    );
}

export default Details;