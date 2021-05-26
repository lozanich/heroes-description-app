import "@testing-library/jest-dom";
import { types } from "../../types/types";
import { authReducer } from "../../auth/authReducer";

describe("Pruebas en el authReducer", () => {
  const state = {
    name: "Ivan",
    lastname: "Lozanich",
    logged: true,
  };

  test("Debe de retornar el estado por defecto ", () => {
    const action = {
      type: "",
    };
    const result = authReducer(state, action);
    expect(state).toEqual(result);
  });

  test("Debe de autenticar y colocar el nombre del usuario", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Ivan",
        lastname: "Lozanich",
      },
    };

    const result = authReducer({}, action);
    expect(result).toEqual(state);
  });

  test("Debe de borrar el nombre del usuario y logged en false", () => {
    const action = {
      type: types.logout,
      payload: {
        name: "Ivan",
        lastname: "Lozanich",
      },
    };

    const result = authReducer({}, action);
    expect(result).toEqual({ logged: false });
  });
});
