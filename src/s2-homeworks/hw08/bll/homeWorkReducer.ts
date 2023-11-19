import { initialPeople, UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[] = initialPeople,
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      return state.sort((a, b) => {
        if (action.payload === "up") {
          return a.name.localeCompare(b.name);
        } else if (action.payload === "down") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
    }
    case "check": {
      return state.filter((u) => u.age >= action.payload); // need to fix
    }
    default:
      return state;
  }
};
