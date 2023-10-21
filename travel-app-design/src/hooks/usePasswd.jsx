import { useState } from "react";

export const usePasswd = (initialValue) => {
  const [showPasswd1, setPasswd1] = useState(initialValue);
  const [showPasswd2, setPasswd2] = useState(initialValue);

const togglePassword1 = () => {
    setPasswd1(!showPasswd1);
  }

  const togglePassword2 = () => {
    setPasswd2(!showPasswd2);
  }

return [
    showPasswd1,
    togglePassword1,
    showPasswd2,
    togglePassword2
  ];
}
