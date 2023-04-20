import { useState } from "react";
import { IconType } from "react-icons";

interface inputProps {
  placeholder: string;
  setValue: (value: string) => void;
  value: string;
  Icon: IconType;
}

export default function Input({
  placeholder,
  setValue,
  value,
  Icon,
}: inputProps) {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className={`p-2 rounded-md w-full my-2 text-gray-200 bg-gray-900 border flex items-center gap-2 ${
        focus ? "border-[#c61d37]" : "border-transparent"
      }`}
    >
      <Icon
        className={`${focus || value.length > 0 ? "text-green-800" : ""}`}
      />
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        className="bg-transparent w-80 focus:outline-none"
      />
    </div>
  );
}
