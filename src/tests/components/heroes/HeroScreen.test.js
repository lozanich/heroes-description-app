import React from "react";
import "@testing-library/jest-dom";
import { mount, shallow } from "enzyme";
import { MemoryRouter, Route, Router } from "react-router";
import { HeroScreen } from "../../../components/heroes/HeroScreen";

describe("Pruebas para el componente <HeroScreen />", () => {
  // http://localhost:3000/searchhero?q=iron
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
    listen: jest.fn(),
    location: {},
    method: jest.fn(),
  };

  test("debe de mostrarse correctamente el componente", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={history} />
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar un hero si el parametro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-iron"]}>
        <Route path="/hero/:heroeId" component={HeroScreen}></Route>
      </MemoryRouter>
    );

    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("Debe de regresar a la pantalla anterior con PUSH", () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
      listen: jest.fn(),
      location: {},
      method: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-iron"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        ></Route>
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");

    expect(history.push).toHaveBeenCalledWith("/");
    expect(history.goBack).not.toHaveBeenCalled();
  });

  test("Debe de llamar al go back para regresar a la pantalla anterior", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-iron"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        ></Route>
      </MemoryRouter>
    );

    wrapper.find("button").simulate("click");

    expect(history.goBack).toHaveBeenCalledWith();
    expect(history.push).not.toHaveBeenCalled();
  });

  test("Debe de llamar el Redirect si el hero no existe ", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-iron8912828"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        ></Route>
      </MemoryRouter>
    );

    console.log(wrapper.find("Rediect").exists());
    console.log(wrapper.html());

    expect(wrapper.text()).toBe("");
  });
});
