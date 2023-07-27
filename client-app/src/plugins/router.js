import Component from '@/plugins/component';

export default class Router {
  routes = [];
  originalPushState = null;

  constructor(routes) {
    console.log('---- start configuration Router Plugin ---');

    this.routes = routes;

    this.originalPushState = history.pushState;

    history.pushState = function (state, title, pathTo) {
      console.log('---- call pushState ---');

      if (typeof history.onpushstate === 'function') {
        history.onpushstate(state, title, pathTo);
      }
    };

    history.onpushstate = (state, title, pathTo) => {
      this.#updateView(pathTo);
      this.originalPushState.apply(history, [state, title, pathTo]);
    };
    
  }

  onInit() {
    console.log('----start Router plugin-----');
  }

  #updateView(pathTo) {
    console.log('updateView called with path:', pathTo);
    let ComponentSearched = this.#findComponent(pathTo);

    if (!(ComponentSearched instanceof Component)) {
      ComponentSearched = this.#findComponent('*');
    }

    this.#renderComponent(ComponentSearched);
  }

  #findComponent(pathTo) {
    return this.routes.find((route) => route.path === pathTo)?.component;
  }

  // innerHTML VS createElement

  #renderComponent(Component) {
    console.log('renderComponent called with component:', Component);
    const appElement = document.querySelector('#app');
    console.log('#app element:', appElement);
    if (appElement) {
      appElement.innerHTML = new Component();
    } else {
      console.log('Error: #app element not found');
    }
  }
}
