import React from "react";
import renderer from "react-test-renderer";
import NotFoundPage from "../404";

describe("404 Page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NotFoundPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
