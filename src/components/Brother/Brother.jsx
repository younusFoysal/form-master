import {useContext} from "react";
import {MoneyContext} from "../Grandpa/Grandpa.jsx";

const Brother = () => {

    const [money, setMoney] = useContext(MoneyContext)

    return (
        <div>
            <h2>Brother</h2>
            <p>Grandpa: {money}</p>
            <button onClick={() => setMoney(money - 1000)}>Spend 1000 tk</button>
        </div>
    );
};

export default Brother;