
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral-900  mt-5 text-[#e4c590]">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title ">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-[#e4c590]">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 " />
                            <button className="btn btn-primary text-black bg-[#f8b239] hover:bg-[#d89d36] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>


            <footer className="footer footer-center p-4   bg-neutral-900   text-[#e4c590] ">
                <aside>
                    <p>Copyright © 2024 - All right reserved by <a className="font-bold" href="https://ilhan-khondaker.netlify.app" target="_blank" rel="noopener noreferrer"> Ilhan Khondaker</a> </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;