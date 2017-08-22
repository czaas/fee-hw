/**
  This could be a JSON object called from a DB/CMS
*/

const NavItems = [
  {
    name: 'Dashboard',
    order: 1,
    id: 1,
    children: [{
      name: 'Dashboard',
      order: 1,
    }, {
      name: 'Business Overview',
      order: 2,
      default: true,
    }, {
      name: 'Schedule',
      order: 3,
    }, {
      name: 'Reports',
      order: 4,
    }]
  }, 
  {
    name: 'Sign In',
    order: 2,
    id: 2,
    children: [{
      name: 'Sign In',
      order: 1,
    }, {
      name: 'More items',
      order: 2,
      default: true,
    }, {
      name: 'For Testing',
      order: 3,
    }]
  }, 
  {
    name: 'Classes',
    order: 3,
    id: 3,
    children: [{
      name: 'Classes',
      order: 1,
    }, {
      name: 'More items again',
      order: 2,
      default: true,
    }, {
      name: 'Still Testing',
      order: 3,
    }, {
      name: 'Again',
      order: 4,
    }]
  }, 
  {
    name: 'Workshops',
    order: 4,
    id: 4,
    children: [{
      name: 'Workshops',
      order: 1,
    }, {
      name: 'Click me',
      order: 2,
    }, {
      name: 'Default Active',
      order: 3,
      default: true,
    }, {
      name: 'Once again',
      order: 4,
    }]
  }, 
  {
    name: 'Appointments',
    order: 5,
    id: 5,
    children: [{
      name: 'Appointments',
      order: 1,
    }, {
      name: 'A test',
      order: 2,
    }, {
      name: 'For all tests',
      order: 3,
      default: true,
    }, {
      name: 'And once again',
      order: 4,
    }]
  }, 
  {
    name: 'Client Home',
    order: 6,
    id: 6,
    children: [{
      name: 'Client Home',
      order: 1,
    }, {
      name: 'Click me',
      order: 2,
      default: true,
    }]
  }, 
  {
    name: 'Retail',
    order: 7,
    id: 7,
    children: [{
      name: 'Retail',
      order: 1,
    }, {
      name: 'Buy Stuff',
      order: 2,
      default: true,
    }]
  }, 
];

export default NavItems;