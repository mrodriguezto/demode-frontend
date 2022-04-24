type Props = {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  required?: boolean;
  disabled?: boolean;
};

const TextField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur = () => {},
  placeholder = "",
  required = false,
  disabled = false,
}: Props) => {
  return (
    <div className='mb-5'>
      <label className='' htmlFor={name}>
        {label}
      </label>
      <input
        className='w-full mt-2 bg-lightGray rounded-sm outline-none px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextField;
