import "react-native";
import React from "react";
import Index from "../index.ios.js";
import {shallow} from "enzyme";
import "isomorphic-fetch";
import 'react-native-mock/mock';

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const index = shallow(<Index/>)
  expect(index).toHaveLength(1);
});
