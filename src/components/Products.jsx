import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom'
function Products() {
    return (
        <div className="container-fluid">
            <Navbar />
            <div className="container">


                <div className="d-flex justify-content-center flex-wrap gap-3">
                    <div className="product">
                        <div className="card">
                            <img src="https://imgs.search.brave.com/wWumDhDoFV1NGKEXBBBEgn-hZvFDniyUZIJ5IZ7fqBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc4LzI0LzI5/LzM2MF9GXzc4MjQy/OTAyX2tobmFmbWs0/dXpvSFdFRU5tQTRw/U0ZVdzEzVUVZSEc5/LmpwZw" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">طماطم</h5>
                                <p className="card-text">طماطم من اجود الانواع و انتاج محلي</p>
                                <Link to={"/details"} className="btn btn-primary">التفاصيل</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="card">
                            <img src="https://imgs.search.brave.com/wWumDhDoFV1NGKEXBBBEgn-hZvFDniyUZIJ5IZ7fqBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc4LzI0LzI5/LzM2MF9GXzc4MjQy/OTAyX2tobmFmbWs0/dXpvSFdFRU5tQTRw/U0ZVdzEzVUVZSEc5/LmpwZw" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">طماطم</h5>
                                <p className="card-text">طماطم من اجود الانواع و انتاج محلي</p>
                                <Link to={"/details"} className="btn btn-primary">التفاصيل</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="card">
                            <img src="https://imgs.search.brave.com/wWumDhDoFV1NGKEXBBBEgn-hZvFDniyUZIJ5IZ7fqBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc4LzI0LzI5/LzM2MF9GXzc4MjQy/OTAyX2tobmFmbWs0/dXpvSFdFRU5tQTRw/U0ZVdzEzVUVZSEc5/LmpwZw" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">طماطم</h5>
                                <p className="card-text">طماطم من اجود الانواع و انتاج محلي</p>
                                <Link to={"/details"} className="btn btn-primary">التفاصيل</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="card">
                            <img src="https://imgs.search.brave.com/wWumDhDoFV1NGKEXBBBEgn-hZvFDniyUZIJ5IZ7fqBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzc4LzI0LzI5/LzM2MF9GXzc4MjQy/OTAyX2tobmFmbWs0/dXpvSFdFRU5tQTRw/U0ZVdzEzVUVZSEc5/LmpwZw" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">طماطم</h5>
                                <p className="card-text">طماطم من اجود الانواع و انتاج محلي</p>
                                <Link to={"/details"} className="btn btn-primary">التفاصيل</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;