import { useEffect, useState } from "react";
import { BarbersDataContainer } from "./styles";
import { api } from "../../services/api";
import type { IUser } from "../../types";
import BarberCard from "./BarberCard";

const BarbersData = () => {
  const [barbers, setBarbers] = useState<IUser[] | null>([]);

  useEffect(() => {
    const fetchBarbersData = async () => {
      try {
        const response = await api.get<IUser[]>("/users/barbers");
        setBarbers(response.data);
      } catch (error) {
        console.log("Erro na busca dos barbeiros.", error);
      }
    };
    fetchBarbersData();
  }, [barbers]);

  return (
    <BarbersDataContainer>
      {barbers?.map((barber) => {
        return <BarberCard key={barber.id} barber={barber} />;
      })}
    </BarbersDataContainer>
  );
};

export default BarbersData;
