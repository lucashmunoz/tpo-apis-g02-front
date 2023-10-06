import { useEffect, useState } from "react";
import CardSolicitud from "./CardSolicitud";

const solicitudesAPI = [
  {
    id: "0",
    name: "Juan",
    phoneNumber: "1145857485",
    email: "juan@uade.edu.ar",
    contactHours: "MAÑANA",
    message: "Estoy interesado en el curso, gracias.",
    state: "SOLICITADA"
  },
  {
    id: "1",
    name: "Carla",
    phoneNumber: "1145896585",
    email: "carla@uade.edu.ar",
    contactHours: "TARDE",
    message: "Estoy interesada en el curso, gracias.",
    state: "ACEPTADA"
  },
  {
    id: "2",
    name: "Esteban",
    phoneNumber: "1145857444",
    email: "esteban@uade.edu.ar",
    contactHours: "NOCHE",
    message: "Estoy interesado en el curso, gracias.",
    state: "FINALIZADA"
  },
  {
    id: "3",
    name: "María",
    phoneNumber: "1147852369",
    email: "maria@uade.edu.ar",
    contactHours: "TARDE",
    message: "Estoy interesada en el curso, gracias.",
    state: "CANCELADA"
  }
];

const Hirings = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    setSolicitudes(solicitudesAPI);
  }, []);

  const aceptarSolicitud = (id) => {
    const updatedSolicitudes = solicitudes.map((solicitud) => {
      if (solicitud.id !== id) {
        return solicitud;
      }
      return {
        ...solicitud,
        state: "ACEPTADA"
      };
    });
    setSolicitudes(updatedSolicitudes);
  };

  const finalizarSolicitud = (id) => {
    const updatedSolicitudes = solicitudes.map((solicitud) => {
      if (solicitud.id !== id) {
        return solicitud;
      }
      return {
        ...solicitud,
        state: "FINALIZADA"
      };
    });
    setSolicitudes(updatedSolicitudes);
  };

  const cancelarSolicitud = (id) => {
    const updatedSolicitudes = solicitudes.map((solicitud) => {
      if (solicitud.id !== id) {
        return solicitud;
      }
      return {
        ...solicitud,
        state: "CANCELADA"
      };
    });
    setSolicitudes(updatedSolicitudes);
  };

  return (
    <div>
      {solicitudes.map((solicitud) => {
        const { id } = solicitud;
        return (
          <CardSolicitud
            key={id}
            solicitud={solicitud}
            aceptarSolicitud={aceptarSolicitud}
            finalizarSolicitud={finalizarSolicitud}
            cancelarSolicitud={cancelarSolicitud}
          />
        );
      })}
    </div>
  );
};

export default Hirings;
