export default function FormContent({
  titleForm,
  buttonTitle,
  children,
  onSubmit,
  clicked,
  visibilityButton, // booleano: true = attivo, false = disabled
}) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      {/* <!-- Contenitore Form --> */}
      <div className="bg-white py-5 px-6 shadow-xl rounded-2xl border border-gray-100 sm:px-10 space-y-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            {titleForm}
          </h2>
        </div>

        <form className="space-y-5" onSubmit={onSubmit}>
          {children}

          {/* <!-- Pulsante di Invio --> */}
          <div className="flex justify-center">
            <button
              onClick={clicked}
              disabled={!visibilityButton}
              className={`
                w-40 rounded-xl bg-indigo-600 px-4 py-2.5
                text-sm font-semibold text-white shadow-md
                transition duration-200 ease-in-out
                hover:bg-indigo-700
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                active:scale-[0.98]
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:pointer-events-none
              `}
            >
              {buttonTitle}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
