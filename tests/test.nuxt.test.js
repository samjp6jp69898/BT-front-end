import { mount } from "@vue/test-utils";

import Test from "../components/test.vue";

describe("my describe", () => {
  it("test", () => {
    const wrapper = mount(Test);

    console.log(wrapper.text());
    expect(wrapper.text()).toContain("Hello World");
  });
});