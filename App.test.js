import React from "react";
import renderer from "react-test-renderer";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: ..."]);

import Einstein from "./App";

it("renders without crashing", () => {
  const rendered = renderer.create(<Einstein />).toJSON();
  expect(rendered).toBeTruthy();
});
