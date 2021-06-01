import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Router } from "react-router";
import { Navbar } from "../../../components/ui/Navbar";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

describe("Pruebas sobre el componente <Navbar />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Ivan",
      logged: true,
    },
  };

  const historyMock = {
    createHref: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    listen: jest.fn(),
    location: {},
  };

  // mount normalmente se usa cuando se usa context o cuando son high orders components
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Ivan");
  });

  test("debe de llamar el logout y usar history", () => {
    wrapper.find("button").simulate("click");

    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(historyMock.replace).toHaveBeenLastCalledWith("/login");
  });
});
