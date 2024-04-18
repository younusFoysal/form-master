import Dad from "../dad/dad.jsx";
import Uncle from "../Uncle/Uncle.jsx";
import Aunty from "../Aunty/Aunty.jsx";
import './grandpa.css'
import {createContext, useState} from "react";

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {

    const [money, setMoney] = useState(1000);
    const asset = 'Diamond';


    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>

            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;