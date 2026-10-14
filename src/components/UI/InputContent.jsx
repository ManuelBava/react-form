export default function InputContent({
  htmlFor,
  labelText,
  id,
  placeholder,
  type,
  value,
  onChange,
  min,
  max,
  valuta,
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {labelText}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={type}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          required
          className={`block w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition duration-200 ease-in-out focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${
            valuta ? "pr-8" : ""
          }`}
          placeholder={placeholder}
        />
        {valuta && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 text-sm font-medium">{valuta}</span>
          </div>
        )}
      </div>
    </div>
  );
}
