const firebase = jest.genMockFromModule('firebase');

const mockedDatabaseRef = jest.fn(ref => ({
  child: jest.fn(child => ({
    once: event => {
      switch (ref) {
        case '/environments/production/navigation/get-items-ref/en-US':
          return Promise.resolve({
            val: jest.fn().mockImplementation(() => [
              {
                attachment: 0,
                component: 'Template',
                cssClass: '',
                id: 1491798664087,
                newWindow: '',
                order: 0,
                parentIndex: 0,
                title: 'Homes',
                url: '/',
                uuid: 1491798664087
              },
              {
                attachment: 0,
                component: 'About',
                cssClass: '',
                id: 1491799269435,
                newWindow: '',
                order: 1,
                parentIndex: 0,
                title: 'About',
                url: '/about-us',
                uuid: 1491799269435
              }
            ])
          });

        case '/environments/production/content/get-entry-ref/en-US':
          return Promise.resolve({
            val: jest.fn(() => ({
              brand: [1491679616700],
              classification: [
                1491683439177,
                1491683439514,
                1491683439236,
                1491683439455,
                1491683439241,
                1491683439435
              ],
              finish: 'Chrome',
              id: 1491827711368,
              image: ['-KhTzFZtaoA1wwxhgIav'],
              material: 'Brass',
              price: '123.00',
              productCode: 'HG31685003',
              showPrice: '1',
              site1: '1',
              status: 'publish',
              supplierCode: '31685003',
              titleA: 'Metris Shower/Bath Finish Set Round Large'
            }))
          });

        case '/environments/production/content/brands/en-US':
          return Promise.resolve({
            val: jest.fn(() => ({
              id: 1491679616700,
              name: 'Hansgrohe',
              order: 55,
              parentId: 0
            }))
          });

        default:
          return Promise.resolve({
            val: jest.fn(() => `"once" called with event: "${event}"`)
          });
      }
    },
    on: jest.fn((event, cb) => {
      if (cb) {
        switch (ref) {
          case '/environments/production/content/subscribe-content-entry-ref/en-US':
            cb({
              val: () => ({
                brand: [1491679616700],
                classification: [
                  1491683439177,
                  1491683439514,
                  1491683439236,
                  1491683439455,
                  1491683439241,
                  1491683439435
                ],
                finish: 'Chrome',
                id: 1491827711368,
                image: ['-KhTzFZtaoA1wwxhgIav'],
                material: 'Brass',
                price: '123.00',
                productCode: 'HG31685003',
                showPrice: '1',
                site1: '1',
                status: 'publish',
                supplierCode: '31685003',
                titleA: 'Metris Shower/Bath Finish Set Round Large'
              })
            });
            break;

          default:
            cb({
              val: () => `"on" called with event: "${event}"`
            });
            break;
        }
      }
    }),
    off: jest.fn(event => `"off" called with event: "${event}"`),
    set: jest.fn(data => Promise.resolve(`"set" called with payload: "${JSON.stringify(data)}"`)),
    update: jest.fn(data =>
      Promise.resolve(`"update" called with payload: "${JSON.stringify(data)}"`)
    ),
    remove: jest.fn(() => Promise.resolve(`"remove" called for "${ref}"`)),
    transaction: jest.fn((updateFn, cb) => {
      if (updateFn) updateFn();
      if (cb) cb();
    })
  })),
  once: event => {
    switch (ref) {
      case '/settings/locales':
        return Promise.resolve({
          val: jest.fn().mockImplementation(() => ['en-US'])
        });

      case '/settings/environments':
        return Promise.resolve({
          val: jest.fn().mockImplementation(() => ['production'])
        });

      case '/environments/production/navigation/get-ref/en-US':
        return Promise.resolve({
          val: jest.fn().mockImplementation(() => ({
            id: 'main',
            items: [
              {
                attachment: 0,
                component: 'Template',
                cssClass: '',
                id: 1491798664087,
                newWindow: '',
                order: 0,
                parentIndex: 0,
                title: 'Homes',
                url: '/',
                uuid: 1491798664087
              },
              {
                attachment: 0,
                component: 'About',
                cssClass: '',
                id: 1491799269435,
                newWindow: '',
                order: 1,
                parentIndex: 0,
                title: 'About',
                url: '/about-us',
                uuid: 1491799269435
              }
            ],
            title: 'main'
          }))
        });

      case '/environments/production/content/get-ref/en-US':
      case '/environments/production/content/raw-get-ref/en-US':
        return Promise.resolve({
          val: jest.fn().mockImplementation(() => ({
            'content-type-1': {
              id: 1491679616674,
              name: 'ASP'
            },
            'content-type-2': {
              id: 1491679616683,
              name: 'Axor'
            }
          }))
        });

      case '/environment/production/schemas/':
        return Promise.resolve({
          val: jest.fn(() => ({
            'about-us': {
              description: 'About Us',
              display: true,
              fields: [
                {
                  description: '',
                  key: 'title',
                  show: true,
                  title: 'Title',
                  type: 'text'
                },
                {
                  description: '',
                  key: 'content',
                  options: [
                    {
                      description: '',
                      key: 'heading',
                      title: 'Heading',
                      type: 'text'
                    },
                    {
                      description: '',
                      key: 'text',
                      title: 'Text',
                      type: 'wysiwyg'
                    },
                    {
                      description: '',
                      key: 'image',
                      title: 'Image',
                      type: 'image'
                    }
                  ],
                  title: 'Content Sections',
                  type: 'repeater'
                }
              ],
              group: 'Pages',
              icon: '',
              id: 'about-us',
              menuIndex: 1,
              title: 'About Us',
              type: 'single'
            },
            brands: {
              description: 'Brands',
              display: true,
              fields: [
                {
                  description: '',
                  key: 'name',
                  show: true,
                  title: 'Name',
                  type: 'text'
                },
                {
                  description: '',
                  key: 'logo',
                  show: true,
                  title: 'Logo',
                  type: 'image'
                },
                {
                  description: '',
                  key: 'image',
                  title: 'Image',
                  type: 'image'
                },
                {
                  description: '',
                  key: 'brochure',
                  title: 'Brochure',
                  type: 'image'
                },
                {
                  description: '',
                  key: 'certificate',
                  title: 'Certificate',
                  type: 'image'
                }
              ],
              group: 'Brands',
              icon: 'FaRegistered',
              id: 'brands',
              menuIndex: 1,
              sortable: {
                enabled: true,
                fields: ['name'],
                startCollapsed: true
              },
              title: 'Brands',
              type: 'collection'
            }
          }))
        });

      case '/environment/production/schemas/get-schema':
        return Promise.resolve({
          val: jest.fn(() => ({
            description: 'Brands',
            display: true,
            fields: [
              {
                description: '',
                key: 'brand',
                relation: 'brands',
                show: true,
                title: 'Brand',
                type: 'tree-relational'
              },
              {
                description: '',
                key: 'logo',
                show: true,
                title: 'Logo',
                type: 'image'
              },
              {
                description: '',
                key: 'image',
                title: 'Image',
                type: 'image'
              },
              {
                description: '',
                key: 'brochure',
                title: 'Brochure',
                type: 'image'
              },
              {
                description: '',
                key: 'certificate',
                title: 'Certificate',
                type: 'image'
              }
            ],
            group: 'Brands',
            icon: 'FaRegistered',
            id: 'brands',
            menuIndex: 1,
            sortable: {
              enabled: true,
              fields: ['name'],
              startCollapsed: true
            },
            title: 'Brands',
            type: 'collection'
          }))
        });

      case '/environment/production/schemas/get-entry-ref/fields':
      case '/environment/production/schemas/subscribe-content-entry-ref/fields':
        return Promise.resolve({
          val: jest.fn(() => [
            {
              description: '',
              key: 'brand',
              relation: 'brands',
              show: true,
              title: 'Brand',
              type: 'tree-relational'
            },
            {
              description: '',
              key: 'logo',
              show: true,
              title: 'Logo',
              type: 'image'
            },
            {
              description: '',
              key: 'image',
              title: 'Image',
              type: 'image'
            },
            {
              description: '',
              key: 'brochure',
              title: 'Brochure',
              type: 'image'
            },
            {
              description: '',
              key: 'certificate',
              title: 'Certificate',
              type: 'image'
            }
          ])
        });

      case '/media/folders/':
        return Promise.resolve({
          val: jest.fn(() => ({
            '1505670341980': {
              id: 1505670341980,
              name: 'Root',
              order: 0,
              parentId: 0
            },
            '1506860565172': {
              id: 1506860565172,
              name: 'products',
              order: 0,
              parentId: 1505670341980,
              uuid: 1506860565172
            }
          }))
        });

      default:
        return Promise.resolve({
          val: jest.fn(() => ({ test: `"once" called with event: "${event}"` }))
        });
    }
  },
  on: jest.fn((event, cb) => {
    if (cb) {
      cb({
        val: () => `"on" called with event: "${event}"`
      });
    }
  }),
  off: jest.fn(event => `"off" called with event: "${event}"`),
  set: jest.fn(data => Promise.resolve(`"set" called with payload: "${JSON.stringify(data)}"`)),
  update: jest.fn(data =>
    Promise.resolve(`"update" called with payload: "${JSON.stringify(data)}"`)
  ),
  remove: jest.fn(() => Promise.resolve(`"remove" called for "${ref}"`)),
  transaction: jest.fn((updateFn, cb) => {
    if (updateFn) updateFn();
    if (cb) cb();
  }),
  orderByKey: jest.fn(mockedDatabaseRef),
  orderByValue: jest.fn(mockedDatabaseRef),
  orderByChild: jest.fn(mockedDatabaseRef),
  limitToFirst: jest.fn(mockedDatabaseRef),
  limitToLast: jest.fn(mockedDatabaseRef),
  equalTo: jest.fn(mockedDatabaseRef),
  startAt: jest.fn(mockedDatabaseRef),
  endAt: jest.fn(mockedDatabaseRef)
}));

const mockedStorageRef = jest.fn(ref => ({
  TESTING: {
    method: 'Storage.ref'
  },
  put: jest.fn((file, options) => {
    const promise = new Promise(resolve => {
      resolve({
        TESTING: {
          file,
          options,
          method: 'put'
        },
        metadata: {}
      });
    });

    promise.on = jest.fn();

    return promise;
  }),
  putString: jest.fn((string, stringEncoding) => {
    const promise = new Promise(resolve => {
      resolve({
        TESTING: {
          string,
          stringEncoding,
          method: 'putString'
        },
        metadata: {}
      });
    });

    promise.on = jest.fn();

    return promise;
  })
}));

const mockedStorageRefFromURL = jest.fn(ref => ({
  TESTING: {
    method: 'Storage.refFromURL'
  }
}));

firebase.initializeApp = jest.fn(payload => ({
  database: jest.fn(() => ({
    ref: mockedDatabaseRef
  })),
  storage: jest.fn(() => ({
    ref: mockedStorageRef,
    refFromURL: mockedStorageRefFromURL
  })),
  auth: jest.fn()
}));

module.exports = firebase;
