import Cousin from "../Cousin/Cousin.jsx";
import {useContext} from "react";
import {MoneyContext} from "../Grandpa/Grandpa.jsx";


const Aunty = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2 >
                <h2>Aunty</h2>
                <section className="flex">
                    <Cousin name={'Asif'}></Cousin>
                    <Cousin name={'Tanvir'}></Cousin>
                </section>
                <p>Money: {money}</p>
                <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
            </h2>
        </div>
    );
};

export default Aunty;