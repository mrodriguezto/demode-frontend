import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { Event } from "../types/dataTypes";

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const res = await demodeApi.get<Event[]>("/events");
      setIsLoading(false);
      setEvents(res.data);
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  const addEvent = (data: Event) => {
    setEvents((values) => [...values, data]);
  };

  return {
    events,
    isLoading,
    addEvent,
  };
};

export default useEvents;
