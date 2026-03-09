import {useNavigate} from "react-router-dom";

function Sidebar(){
    const navigate=useNavigate();

    return(
        <div className="sidebar">
            <h2>Contacts</h2>

            <button onClick={()=>navigate("/create")}>+ Create Contact</button>

            <p onClick={()=> navigate("/dashboard")}>Conatcts</p>
        </div>
    );
}

export default Sidebar;