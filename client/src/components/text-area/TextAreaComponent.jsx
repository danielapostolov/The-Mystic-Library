export default function TextAreaComponent({ placeholder, rows, value, onChange, name }) {
    return (
        <textarea
            className="w-full h-20 p-2 rounded-lg bg-gray-700 text-white"
            placeholder={placeholder}
            rows={rows}
            value={value}
            onChange={onChange}
            required
            name={name}
        />
    );
}