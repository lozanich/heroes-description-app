import React from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { DashBoardRoutes } from "../../routers/DashBoardRoutes";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en el componente <DashBoardRoutes />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
    },
  };

  test("Debe de mostrar correctamente", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashBoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
