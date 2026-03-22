import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UpdateMenuItemData {
    name: string;
    description: string;
    imageUrl: string;
    category: MenuCategory;
    price: bigint;
}
export interface Reservation {
    status: ReservationStatus;
    date: Time;
    name: string;
    specialRequests: string;
    createdAt: Time;
    time: string;
    phone: string;
    guests: bigint;
}
export interface MenuItem {
    name: string;
    description: string;
    imageUrl: string;
    category: MenuCategory;
    price: bigint;
}
export type Time = bigint;
export enum MenuCategory {
    mainCourse = "mainCourse",
    dessert = "dessert",
    appetizer = "appetizer",
    beverage = "beverage"
}
export enum ReservationStatus {
    cancelled = "cancelled",
    pending = "pending",
    confirmed = "confirmed"
}
export interface backendInterface {
    addMenuItem(item: MenuItem): Promise<bigint>;
    createReservation(reservation: Reservation): Promise<bigint>;
    getAllReservations(): Promise<Array<Reservation>>;
    getMenu(): Promise<Array<MenuItem>>;
    getReservationsByTimeRange(start: Time, end: Time): Promise<Array<Reservation>>;
    prepopulate(): Promise<void>;
    updateMenuItem(id: bigint, update: UpdateMenuItemData): Promise<void>;
    updateReservationStatus(id: bigint, status: ReservationStatus): Promise<void>;
}
