import MySelf from "../MySelf/MySelf.jsx";
import Brother from "../Brother/Brother.jsx";
import Sister from "../Sister/Sister.jsx";


const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;