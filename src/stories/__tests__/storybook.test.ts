import initStoryshots from "@storybook/addon-storyshots";
import { act, render } from "@testing-library/react";

describe("storybook test", () => {
  initStoryshots({
    asyncJest: true,
    test: async ({ story, context, done }) => {
      try {
        const jsx = story.render();
        const { rerender, container, unmount } = await render(jsx);
        await act(() => Promise.resolve());
        await rerender(jsx);

        expect(container.children[0]).toMatchSpecificSnapshot(
          `__snapshots__/${context.title}/${context.story}.stories.storyshot`
        );

        unmount();
      } finally {
        done && done();
      }
    },
  });
});
