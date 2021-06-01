import React from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { AuthContext } from "../../../auth/AuthContext";

describe("Pruebas en el componente <LoginScreen />", () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
    listen: jest.fn(),
    location: {},
    method: jest.fn(),
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "Ivan",
      logged: false,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/hero"]}>
        <LoginScreen history={history} />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de realizar el dispatch y la navegacion", () => {
    wrapper.find("button").simulate("click");

    expect(contextValue.dispatch).toHaveBeenCalled();
    expect(history.replace).toHaveBeenCalledWith("/");

    localStorage.setItem("lastPath", "/dc");
    wrapper.find("button").simulate("click");

    expect(history.replace).toHaveBeenCalledWith("/dc");
  });
});
