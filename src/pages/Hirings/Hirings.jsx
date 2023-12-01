import { useContext, useEffect, useState } from "react";
import CardSolicitud from "./CardSolicitud";
import UserContext from "user-context";
import axios from "axios";

const translateEstadoSolicitud = (estadoNumerico) => {
  switch (estadoNumerico) {
    case 0:
      return "SOLICITADA";
    case 1:
      return "ACEPTADA";
    case 2:
      return "FINALIZADA";
    case 3:
    default:
      return "CANCELADA";
  }
};

const Hirings = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  const [loggedUser] = useContext(UserContext);

  const fetchHiringRequests = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/service/getmyhiringrequests/${loggedUser._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        }
      );

      if (response.data.status === 200) {
        const hiringReq = [];
        for (let i = 0; i < response.data.hiringRequests.length; i++) {
          let lista = response.data.hiringRequests[i];
          console.log(lista);
          for (let j = 0; j < lista.length; j++) {
            console.log(lista[j]);
            hiringReq.push(lista[j]);
          }
        }
        setSolicitudes(hiringReq);
      }
    } catch (e) {}
  };

  useEffect(() => {
    fetchHiringRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cambiarEstadoSolicitud = async (id, nuevoEstado) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/service/changeHiringStatus`,
        {
          hiringReqId: id,
          newStatus: nuevoEstado
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        }
      );

      if (response.data.status === 200) {
        // setServicios(response.data.services);
        const hiringReq = [];
        for (let i = 0; i < response.data.hiringRequests.length; i++) {
          let lista = response.data.hiringRequests[i];
          console.log(lista);
          for (let j = 0; j < lista.length; j++) {
            console.log(lista[j]);
            hiringReq.push(lista[j]);
          }
        }
        setSolicitudes(hiringReq);
      }
    } catch (e) {}

    await fetchHiringRequests();
  };

  const aceptarSolicitud = async (id) => {
    cambiarEstadoSolicitud(id, 1);
  };

  const finalizarSolicitud = (id) => {
    cambiarEstadoSolicitud(id, 2);
  };

  const cancelarSolicitud = (id) => {
    cambiarEstadoSolicitud(id, 3);
  };

  return (
    <div>
      {solicitudes.map((solicitud) => {
        const { creationDate } = solicitud;
        return (
          <CardSolicitud
            key={creationDate}
            solicitud={solicitud}
            aceptarSolicitud={aceptarSolicitud}
            finalizarSolicitud={finalizarSolicitud}
            cancelarSolicitud={cancelarSolicitud}
            state={translateEstadoSolicitud(solicitud.status)}
          />
        );
      })}
    </div>
  );
};

export default Hirings;
