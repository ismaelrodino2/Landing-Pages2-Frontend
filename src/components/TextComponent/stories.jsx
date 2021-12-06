import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Molestiae, sequi at. Id, ab? Ea, impedit beatae. Fugit, 
    deserunt itaque enim a facilis, doloribus quos, sint qui 
    culpa officiis vel praesentium.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
