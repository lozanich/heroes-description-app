import React from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en el <AppRouter />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  test("debe de mostrar el login si no esta autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar que el usuario esta autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
