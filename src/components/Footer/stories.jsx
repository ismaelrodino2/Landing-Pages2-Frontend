import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/ismaelrodino2">Feito com ❤ por Ismael Rodino</a></p>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
