import {useContext} from "react";
import {AssetContext} from "../Grandpa/Grandpa.jsx";


const Spacial = ({asset}) => {

    const gift = useContext(AssetContext)

    return (
        <div>
            <h2>Spacial</h2>
            <p>Got it {asset}</p>
            <p>Also has: {gift}</p>
        </div>
    );
};

export default Spacial;