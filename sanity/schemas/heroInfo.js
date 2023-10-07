
const heroInfo = {
  name: 'hero',
  title: 'Hero Info',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'smallSpan',
      title: 'Mini tagName',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description Paragraph',
      type: 'string',
    },
    {
      name: 'heroBg',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'prodectLink',
      title: 'Product Link',
      type: 'string',
    },
  ]
}

export default heroInfo