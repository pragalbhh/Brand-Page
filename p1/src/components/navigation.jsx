const Navigation= ()=>{
    return(
        <nav className="container">
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
            <li href="Menu" >Menu</li>
            <li href="Location" >Location</li>
            <li href="About" >About</li>
            <li href="Contact" >Contact</li>
        </ul>
        <button>login</button>
        </nav>
    );
};
export default Navigation;