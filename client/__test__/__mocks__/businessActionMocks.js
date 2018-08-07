export const myBusiness = {
  name: '',
  image: '',
  location: '',
  category: '',
  description: ''
};

export const businessDetails = {
  status: 'success',
  data: {
    business: {
      businessId: '',
      userId: '',
      name: '',
      image: '',
      location: '',
      category: '',
      description: ''
    }
  }
};
export const allMyBusinesses = {
  status: 'success',
  data: {
    businesses: [
      {
        businessId: '',
        userId: '',
        name: '',
        image: '',
        location: '',
        category: '',
        description: ''
      },
      {
        businessId: '',
        userId: '',
        name: '',
        image: '',
        location: '',
        category: '',
        description: ''
      }
    ],
    paginate: {
      count: 2,
      pages: 1,
      currentPage: 1,
      pageSize: 2,
      limit: 6
    }
  }
};

