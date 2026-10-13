import { useState } from "react";
import InputContent from "../UI/InputContent";
import ThankYouMessage from "../UI/ThankYouMessage";
import FormContent from "../UI/FormContent";

export default function SignUpNewsLetter() {
  //  gestisci l'iscrizione alla newsletter nascondendo il form e mostrando
  //   un messaggio di ringraziamento dopo l'invio
  const [visibilityForm, setVisibilityForm] = useState("block");
  const [visibilitySuccessMessage, setVisibilitySuccessMessage] =
    useState("hidden");

  function handleSubmit(e) {
    e.preventDefault();
    setVisibilityForm("hidden");
    setVisibilitySuccessMessage("block");
  }
  return (
    <section className="my-3">
      <h2 className="text-3xl font-bold">Sign Up NewsLetter</h2>
      <div
        className={`min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8 ${visibilityForm}`}
      >
        <FormContent
          onSubmit={handleSubmit}
          buttonTitle={" Sign in"}
          titleForm={"Sign up here"}
        >
          {/* <!-- Campo Name --> */}
          <InputContent
            htmlFor="name"
            labelText="Name"
            id="name"
            placeholder="Insert here your name"
            type="text"
          />
          {/* <!-- Campo Surname --> */}
          <InputContent
            htmlFor="surname"
            labelText="Surname"
            id="name"
            placeholder="Insert here your surname"
            type="text"
          />

          {/* <!-- Campo Email --> */}
          <InputContent
            htmlFor="email"
            labelText="Email"
            id="email"
            placeholder="name@example.com"
            type="email"
          />
        </FormContent>
      </div>
      <ThankYouMessage classes={`${visibilitySuccessMessage}`} />
    </section>
  );
}
