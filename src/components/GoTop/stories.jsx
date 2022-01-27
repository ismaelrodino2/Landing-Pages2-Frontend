import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </p>{' '}
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </p>{' '}
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </p>{' '}
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nisi
        corporis voluptas soluta quidem veniam quibusdam mollitia asperiores ad
        odit nihil unde quisquam esse officiis, suscipit, eius debitis ullam
        earum?
      </p>
      <GoTop {...args} />
    </div>
  );
};
