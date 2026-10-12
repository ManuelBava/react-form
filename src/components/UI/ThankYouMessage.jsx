export default function ThankYouMessage() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col justify-center">
      {/* <!-- Container di Ringraziamento --> */}
      <div className="bg-white py-10 px-6 shadow-xl rounded-2xl border border-gray-100 sm:px-10 text-center space-y-6 max-w-md mx-auto transform transition-all duration-300 scale-100">
        {/* <!-- Icona di Successo con cerchio sfumato --> */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100">
          <svg
            className="h-8 w-8 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Grazie mille!
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Ti sei registrato con successo!
          </p>
        </div>
      </div>
    </div>
  );
}
