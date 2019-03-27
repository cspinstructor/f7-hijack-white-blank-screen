// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe'
      }
    };
  },
  methods: {
    helloWorld: function() {
      app.dialog.alert('Hello World!');
    }
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14'
  },
  on: {
    init: function() {
      console.log('App initialized');
    },
    pageInit: function() {
      console.log('Page initialized');
      addMainView();
    }
  }
});

function sayHello() {
  alert('hello paul');
}

function addMainView() {
  alert('addMainView called');
}

app.views.create('.view', {
  url: '/'
});
