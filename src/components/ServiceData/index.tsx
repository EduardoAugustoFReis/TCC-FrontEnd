import { useEffect, useState } from "react"
import { ServiceDataContainer } from "./styles"
import type { IService } from "../../types";
import { api } from "../../services/api";
import ServiceCard from "./ServiceCard";

const ServicesData = () => {
  const [services, setServices] = useState<IService[] | null>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get<IService[]>("/services");
        setServices(response.data);
      } catch (error) {
        console.log("Erro ao buscar serviços", error);
      }
    };
    fetchServices();
  },[])

  return (
    <ServiceDataContainer>
      {services?.map(service => {
        return (
          <ServiceCard key={service.id} service={service}/>
        )
      })}
    </ServiceDataContainer>
  )
}

export default ServicesData
