export default {
  'sidebarClass':{
    'navbar-nav': true,
    'bg-gradient-primary': true,
    'sidebar': true,
    'sidebar-dark': true,
    'accordion': true,
    'toggled': false
  },
  'sidebarItems':{
    1:{
      'title': '',
      'items': {
        1:{
          'title': 'Dashboard',
          'active': true,
          'icon': 'tachometer-alt',
          'url': '',
        },
      }
    },
    2:{
      'title': 'Interface',
      'items': {
        1:{
          'title': 'Components',
          'active': false,
          'icon': 'cog',
          'collaps': {
            1:{
              'key': 1,
              'title': 'Custom Components:',
              'items': {
                1: {
                  'title': 'Buttons',
                  'url': '/buttons'
                },
                2: {
                  'title': 'Cards',
                  'url': '/cards'
                },
              }
            }
          }
        },
        2:{
          'title': 'Utilities',
          'active': false,
          'icon': 'wrench',
          'collaps': {
            1:{
              'key': 2,
              'title': 'Custom Utilities:',
              'items': {
                1: {
                  'title': 'Colors',
                  'url': '/colors'
                },
                2: {
                  'title': 'Borders',
                  'url': '/borders'
                },
                3: {
                  'title': 'Animations',
                  'url': '/animations'
                },
                4: {
                  'title': 'Other',
                  'url': '/other'
                },
              }
            }
          }
        },
      }
    },
    3:{
      'title': 'Addons',
      'items': {
        1:{
          'title': 'Pages',
          'active': false,
          'icon': 'cog',
          'collaps': {
            1:{
              'key':3,
              'title': 'Login Screens:',
              'items': {
                1: {
                  'title': 'Login',
                  'url': '/login'
                },
                2: {
                  'title': 'Register',
                  'url': '/register'
                },
                3: {
                  'title': 'Forgot Password',
                  'url': '/forgot-password'
                },
              }
            },
            2:{
              'key': 4,
              'title': 'Other Pages:',
              'items': {
                4: {
                  'title': '404 Page',
                  'url': '/404'
                },
                5: {
                  'title': 'Blank Page',
                  'url': '/blank-page'
                },
              }
            },
          }
        },
        2:{
          'title': 'Charts',
          'active': false,
          'icon': 'chart-area',
          'url': '/chart',
        },
        3:{
          'title': 'Tables',
          'active': false,
          'icon': 'table',
          'url': '/tables',
        },
      },
    },
  },
  'alerts': {
    'title': 'Alerts Center',
    'link_title': 'Show All Alerts',
    'icon': 'bell',
    'counter': 3,
    'items': {
      1:{
        'title': 'December 12, 2019',
        'text': 'A new monthly report is ready to download!',
        'color': 'bg-primary',
        'icon': 'file-alt',
        'readed': false,
        'url': '#'
      },
      2:{
        'title': 'December 2, 2019',
        'text': 'Spending Alert: We\'ve noticed unusually high spending for your account.',
        'color': 'bg-warning',
        'icon': 'exclamation-triangle',
        'readed': true,
        'url': '#'
      },
      3:{
        'title': 'December 7, 2019',
        'text': '$290.29 has been deposited into your account!',
        'color': 'bg-success',
        'icon': 'donate',
        'readed': true,
        'url': '#'
      },
    }
  },
  'messages': {
    'title': 'Message Center',
    'link_title': 'Read More Messages',
    'icon': 'envelope',
    'counter': 7,
    'items': {
      1:{
        'key': 1,
        'from': 'Emily Fowler · 58m',
        'text': 'Hi there! I am wondering if you can help me with a problem I\'ve been having.',
        'color': 'bg-success',
        'source': 'https://source.unsplash.com/fn_BT9fwg_E/60x60',
        'readed': false,
        'url': '#'
      },
      2:{
        'key': 2,
        'from': 'Jae Chun · 1d',
        'text': 'I have the photos that you ordered last month, how would you like them sent to you?',
        'color': '',
        'source': 'https://source.unsplash.com/AU4VPcFN4LE/60x60',
        'readed': true,
        'url': '#'
      },
      3:{
        'key': 3,
        'from': 'Morgan Alvarez · 2d',
        'text': 'Last month\'s report looks great, I am very happy with the progress so far, keep up the good work!',
        'color': 'bg-warning',
        'source': 'https://source.unsplash.com/CS2uCrpNzJY/60x60',
        'readed': true,
        'url': '#'
      },
      4:{
        'key': 4,
        'from': 'Chicken the Dog · 2w',
        'text': 'Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren\'t good...',
        'color': 'bg-success',
        'source': 'https://source.unsplash.com/Mv9hjnEUHR4/60x60',
        'readed': false,
        'url': '#'
      },
    }
  },
  'section': {
    'loged': true,
    'source': 'https://source.unsplash.com/QAB-WJcbgJk/60x60',
    'userName': 'Valerie Luna',
  }
}
