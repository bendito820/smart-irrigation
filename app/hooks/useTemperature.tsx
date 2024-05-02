import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default async function useTemperature() {
  const {
    data: { temperature },
    error,
    isLoading,
  } = useQuery<any>({
    queryKey: ["temperature"],
    queryFn: () =>
      axios.get("http://esp8266.local/temperature").then((res) => res.data),
    staleTime: 1 * 1000, // 1s
  });

  return {
    temperature,
    error,
    isLoading,
  };
}
