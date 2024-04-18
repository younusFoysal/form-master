
import useInputState from "../../hooks/useInputState.js";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Foysal')
    const nameState = useInputState('Foysal')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form data', name)
        console.log(nameState.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    // value={name}
                    // onChange={handleNameChange}
                    {...nameState}
                    type="text"
                    name="name"

                />
                <br/>
                <input
                    type="email"
                    name="email"
                />
                <br/>
                <input
                    type="password"
                    name="password"
                />
                <br/> <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default HookForm;