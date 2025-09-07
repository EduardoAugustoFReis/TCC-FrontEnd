import React from "react";
import { SelectNewBarberContainer } from "./styles"

type UserRole = "barbeiro" | "admin";

interface SelectNewBarberProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: UserRole[];
}

const SelectNewBarber = ({id, label, options, ...rest}: SelectNewBarberProps) => {
  return (
    <SelectNewBarberContainer>
      <label htmlFor={id}>{label}</label>
        <select name={id} id={id} {...rest}>
        <option value="">Selecione o funcionário</option>
        {options.map(option => {
          return (
          <option key={option} value={option}>{option}</option>
          )
        })}
        </select>
    </SelectNewBarberContainer>
  )
}

export default SelectNewBarber;
