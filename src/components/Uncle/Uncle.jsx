import Cousin from "../Cousin/Cousin.jsx";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Joy'} asset={asset}></Cousin>
                <Cousin name={'Mili'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;