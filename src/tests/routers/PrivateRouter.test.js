import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import { PrivateRouter } from "../../routers/PrivateRouter";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en el router <PrivateRouter />", () => {
  Storage.prototype.setItem = jest.fn();

  test("debe de mostrar el componente si esta autenticado y guardar localStorage", () => {
    const rest = {
      location: {
        pathname: "/marvel",
      },
    };

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuth={true}
          component={() => <span>Listoo</span>}
          {...rest}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

  test("Debe de bloquear el componente si no esta autenticado ", () => {
    const rest = {
      location: {
        pathname: "/marvel",
      },
    };

    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuth={false}
          component={() => <span>Listoo</span>}
          {...rest}
        />
      </MemoryRouter>
    );
    expect(wrapper.html()).toBe("");
  });
});
