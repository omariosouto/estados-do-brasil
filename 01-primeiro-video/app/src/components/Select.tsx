export interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  className?: string;
}
export default function Select({
  label,
  options = [],
  onChange,
  disabled = false,
  className,
}: SelectProps) {
  return (
    <div className={className}>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <select
        id="location"
        name="location"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={options[0] && options[0].value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}