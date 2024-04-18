import Spacial from "../Spacial/Spacial.jsx";
import Friend from "../Friend/Friend.jsx";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
                { asset && <Spacial asset={asset}></Spacial> }
                { name === 'Tanvir' && <Friend></Friend> }
            </section>
        </div>
    );
};

export default Cousin;