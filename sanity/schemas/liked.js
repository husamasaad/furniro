
const liked = {
  name: 'liked',
  title: 'Liked Products',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'users' }], // Replace with the actual reference to your user schema
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }], // Replace with the actual reference to your product schema
    },
  ],
};

export default liked