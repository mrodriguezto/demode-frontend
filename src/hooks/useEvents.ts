import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { Event } from "../types/dataTypes";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { initializeEvents } from "../store/slices/events/eventsSlice";

const useEvents = () => {
  const events = useAppSelector((state) => state.events.value);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const res = await demodeApi.get<Event[]>("/events");
      setIsLoading(false);
      dispatch(initializeEvents(res.data));
      console.log(res.data);
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  return {
    events,
    isLoading,
  };
};

export default useEvents;
