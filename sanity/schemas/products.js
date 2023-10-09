const products = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'new',
      title: 'New Product',
      type: 'boolean'
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'price',
      title: 'price',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['sofas', 'tables', 'bookcases', 'beds', 'armchairs', 'chairs' ]
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag Name',
          type: 'string'
        }
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type : 'image'}],
      options: { hotspot: true }
    },
  ]
}


export default products