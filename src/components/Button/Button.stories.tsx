import decoratorCentered from "@storybook/addon-centered"
import { Button } from "./Button"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Button",
  decorators: [decoratorCentered],
}

export const Example = () => <Button>Hello World</Button>
