import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type MenuCategory = {
    #appetizer;
    #mainCourse;
    #dessert;
    #beverage;
  };

  type MenuItem = {
    name : Text;
    description : Text;
    price : Nat;
    category : MenuCategory;
    imageUrl : Text;
  };

  module MenuItem {
    public func compare(menuItem1 : MenuItem, menuItem2 : MenuItem) : Order.Order {
      Text.compare(menuItem1.name, menuItem2.name);
    };
  };

  type ReservationStatus = {
    #pending;
    #confirmed;
    #cancelled;
  };

  type Reservation = {
    name : Text;
    phone : Text;
    date : Time.Time;
    time : Text;
    guests : Nat;
    specialRequests : Text;
    status : ReservationStatus;
    createdAt : Time.Time;
  };

  module Reservation {
    public func compare(reservation1 : Reservation, reservation2 : Reservation) : Order.Order {
      Int.compare(reservation1.date, reservation2.date);
    };
  };

  let menu = Map.empty<Nat, MenuItem>();
  let reservations = Map.empty<Nat, Reservation>();
  var nextMenuId = 1;
  var nextReservationId = 1;

  func getMenuItemInternal(id : Nat) : MenuItem {
    switch (menu.get(id)) {
      case (null) { Runtime.trap("Menu item not found") };
      case (?item) { item };
    };
  };

  public shared ({ caller }) func addMenuItem(item : MenuItem) : async Nat {
    let id = nextMenuId;
    menu.add(id, item);
    nextMenuId += 1;
    id;
  };

  public type UpdateMenuItemData = {
    name : Text;
    description : Text;
    price : Nat;
    category : MenuCategory;
    imageUrl : Text;
  };

  public shared ({ caller }) func updateMenuItem(id : Nat, update : UpdateMenuItemData) : async () {
    let existing = getMenuItemInternal(id);
    let updated : MenuItem = {
      name = update.name;
      description = update.description;
      price = update.price;
      category = update.category;
      imageUrl = update.imageUrl;
    };
    menu.add(id, updated);
  };

  public query ({ caller }) func getMenu() : async [MenuItem] {
    menu.values().toArray().sort();
  };

  public shared ({ caller }) func createReservation(reservation : Reservation) : async Nat {
    let id = nextReservationId;
    let newReservation : Reservation = {
      name = reservation.name;
      phone = reservation.phone;
      date = reservation.date;
      time = reservation.time;
      guests = reservation.guests;
      specialRequests = reservation.specialRequests;
      status = #pending;
      createdAt = Time.now();
    };
    reservations.add(id, newReservation);
    nextReservationId += 1;
    id;
  };

  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.values().toArray().sort();
  };

  public query ({ caller }) func getReservationsByTimeRange(start : Time.Time, end : Time.Time) : async [Reservation] {
    reservations.values().toArray().filter(
      func(r) { r.date >= start and r.date <= end }
    );
  };

  public shared ({ caller }) func updateReservationStatus(id : Nat, status : ReservationStatus) : async () {
    let existing = switch (reservations.get(id)) {
      case (null) { Runtime.trap("Reservation not found") };
      case (?res) { res };
    };
    let updated : Reservation = {
      name = existing.name;
      phone = existing.phone;
      date = existing.date;
      time = existing.time;
      guests = existing.guests;
      specialRequests = existing.specialRequests;
      status;
      createdAt = existing.createdAt;
    };
    reservations.add(id, updated);
  };

  public shared ({ caller }) func prepopulate() : async () {
    if (menu.isEmpty()) {
      ignore await addMenuItem({
        name = "Chicken Curry";
        description = "Authentic Indian chicken curry with rich spices and gravy.";
        price = 15;
        category = #mainCourse;
        imageUrl = "https://example.com/chicken-curry.jpg";
      });

      ignore await addMenuItem({
        name = "Vegetable Samosa";
        description = "Crispy fried pastry filled with spiced potatoes and peas.";
        price = 2;
        category = #appetizer;
        imageUrl = "https://example.com/samosa.jpg";
      });

      ignore await addMenuItem({
        name = "Gulab Jamun";
        description = "Soft, round dumplings soaked in sweet, rose-scented syrup.";
        price = 4;
        category = #dessert;
        imageUrl = "https://example.com/gulab-jamun.jpg";
      });

      ignore await addMenuItem({
        name = "Mango Lassi";
        description = "Refreshing mango yogurt drink.";
        price = 3;
        category = #beverage;
        imageUrl = "https://example.com/mango-lassi.jpg";
      });
    };
  };
};
