import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="header">
                <h1>Vlad App</h1>
                <div className="links">
                    <Link to="/" style={{
                        position:'relative',
                        top:'20px',
                        color:'white',
                        backgroundColor:'#c5ccb9',
                        borderRadius:'10px'
                    }}>Home</Link>

                <div className="links1">
                    <Link to="/about" style={{
                        position:'relative',
                        left:'70px',
                        color:'white',
                        backgroundColor:'#c5ccb9',
                        borderRadius:'10px'
                    }}>About</Link>

                <div className="links2">
                    <Link to="create" style={{
                        position:'relative',
                        left:'140px',
                        bottom:'20px',
                        color:'white',
                        backgroundColor:'#c5ccb9',
                        borderRadius:'10px'
                    }}>Create</Link>
                    </div>
                    </div>


                </div>
            </nav>
            
        </div>
    )
}

export default Header
