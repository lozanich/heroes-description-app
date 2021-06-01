import React from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe("Pruebas en el componente <SearchScreen />", () => {
  test("Debe de mostrarse correctamente con valores por defecto ", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".alert-info").text().trim()).toBe("Busca un Heroe");
  });

  test("Debe de mostar a batman y el input con el query string", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar un error si no se encuentra el Hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=goku"]}>
        <Route path="/search" component={SearchScreen}></Route>
      </MemoryRouter>
    );

    expect(wrapper.find(".alert-danger").exists()).toBe(true);
    expect(wrapper.find(".alert-danger").text().trim()).toBe(
      "No se encontraron resultados"
    );
  });

  test("Debe de llamar el push del history", () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=goku"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        ></Route>
      </MemoryRouter>
    );

    wrapper.find("input").simulate("change", {
      target: {
        name: "nameHero",
        value: "batman",
      },
    });

    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });

    expect(history.push).toHaveBeenCalledWith("?q=batman");
  });
});
