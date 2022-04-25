type Props = {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
  required?: boolean;
  disabled?: boolean;
};

const TextFieldBig = ({
  label,
  name,
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
      <textarea
        className='w-full h-36 whitespace-normal mt-2 bg-lightGray rounded-sm outline-none px-3 py-2 text-sm text-gray-300 placeholder:text-gray-400'
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

export default TextFieldBig;
