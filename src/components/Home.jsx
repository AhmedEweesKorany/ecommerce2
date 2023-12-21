import Navbar from "./Navbar";
import Footer from "./Footer";
function Home() {
    return (
        <div className="container-fluid">
            <Navbar/>
            <div className="container">

            
            <header className="text-center mt-5">
                <h1>اهلا بكم في موقعنا</h1>
                <p>اكتشف اشياء مذهلة !</p>
            </header>

            <section className="row mt-5">
                <div className="">
                    <h2>من نحن</h2>
                    <p>أهلا بكم</p>
                    <p>نحن نوفر لمن هم ليس لديهم القدرة علي بيع منتجاتهم منصة لبيع منتجاتهم و تداولها</p>
                </div>
                <div className="">
                    <h2>  الخدمات التي نقدمها </h2>
                    <ul>
                        <li className="mb-2">تداول المنتجات</li>
                        <li className="mb-2">تجارة المنتجات</li>
                        <li className="mb-2">شراء المنتجات</li>
                        <li className="mb-2">تداول المنتجات</li>
                        <li className="mb-2">تجارة المنتجات</li>
                        <li className="mb-2">شراء المنتجات</li>
                    </ul>
                </div>
            </section>

            <section className="mt-5">
                <h2>منهجية عمل الموقع</h2>
                <p>يقوم التاجر او  المنتج بعرض المنتجات علي الموقع ليتمكن المستهلك من  روية المنتجات ليتمكن من شرائها</p>
                <p>البريد الالكتروني: info@example.com</p>
                <p>رقم الهاتف للتواصل: 123-456-7890</p>
            </section>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;