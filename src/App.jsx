
import './App.css'
import SimpleForm from "./components/SimpleForm/SimpleForm.jsx";
import StatefulForm from "./components/StatefulForm/StatefulForm.jsx";
import RefForm from "./components/RefForm/RefForm.jsx";
import {HashRouter} from "react-router-dom";
import HookForm from "./components/HookForm/HookForm.jsx";
import ReUsableForm from "./components/ReUsableForm/ReUsableForm.jsx";
import Grandpa from "./components/Grandpa/Grandpa.jsx";

function App() {

    // const handleSignUpSubmit = data => {
    //    // e.preventDefault();
    //     console.log('Sign UP:', data)
    // }
    // const handleUpdateSubmit = data => {
    //     //e.preventDefault();
    //     console.log('Update Profile:', data)
    // }


  return (
    <>

      <h1>Form Master & Drill</h1>
        <small>Note: Forms are commented.</small>

        <Grandpa></Grandpa>

      {/*<SimpleForm></SimpleForm>*/}
      {/*  <StatefulForm></StatefulForm>*/}
      {/*  <RefForm></RefForm>*/}
      {/*  <HookForm></HookForm>*/}
      {/*  <ReUsableForm*/}
      {/*      formTitle={'Sign Up'}*/}
      {/*      handleSubmit={handleSignUpSubmit}*/}

      {/*  >*/}
      {/*      <div>*/}
      {/*          <h2>Sign Up</h2>*/}
      {/*          <p>Please sign up</p>*/}
      {/*      </div>*/}

      {/*  </ReUsableForm>*/}
      {/*  <ReUsableForm*/}
      {/*      formTitle={'Profile Update'}*/}
      {/*      handleSubmit={handleUpdateSubmit}*/}
      {/*      submitBtnText={'Update'}*/}
      {/*  >*/}
      {/*      <div>*/}
      {/*          <h2>Update Profile</h2>*/}
      {/*          <p>Keep Updated</p>*/}
      {/*      </div>*/}

      {/*  </ReUsableForm>*/}
    </>
  )
}

export default App
