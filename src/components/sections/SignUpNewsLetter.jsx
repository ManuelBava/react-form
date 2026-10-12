import InputContent from "../UI/InputContent";
import ThankYouMessage from "../UI/ThankYouMessage";

export default function SignUpNewsLetter() {
  //  gestisci l'iscrizione alla newsletter nascondendo il form e mostrando
  //   un messaggio di ringraziamento dopo l'invio
  return (
    <section className="my-3">
      <h2 className="text-3xl font-bold">Sign Up NewsLetter</h2>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-6 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <!-- Contenitore Form --> */}
          <div className="bg-white py-5 px-6 shadow-xl rounded-2xl border border-gray-100 sm:px-10 space-y-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 text-center">
                Sign up here
              </h2>
            </div>

            <form className="space-y-5" onSubmit={""}>
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

              {/* <!-- Pulsante di Invio --> */}
              <div className="flex justify-center">
                <button
                  onClick={""}
                  className="w-40 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:scale-[0.98]"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ThankYouMessage />
    </section>
  );
}
