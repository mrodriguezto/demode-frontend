import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { Event } from "../types/dataTypes";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { initializeEvents, addEvent } from "../feature/eventsSlice";

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
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  const addNewEvent = (data: Event) => {
    dispatch(addEvent(data));
  };

  return {
    events,
    isLoading,
    addNewEvent,
  };
};

export default useEvents;
