import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { MenuItem, Reservation } from "../backend.d";
import { MenuCategory, ReservationStatus } from "../backend.d";
import { useActor } from "./useActor";

export function useGetMenu() {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menu"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenu();
    },
    enabled: !!actor && !isFetching,
  });
}

export interface ReservationInput {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests: string;
}

export function useCreateReservation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: ReservationInput) => {
      if (!actor) throw new Error("Actor not available");
      const reservation: Reservation = {
        name: input.name,
        phone: input.phone,
        date: BigInt(new Date(input.date).getTime()) * 1_000_000n,
        time: input.time,
        guests: BigInt(input.guests),
        specialRequests: input.specialRequests,
        status: ReservationStatus.pending,
        createdAt: BigInt(Date.now()) * 1_000_000n,
      };
      return actor.createReservation(reservation);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
  });
}

export { MenuCategory };
