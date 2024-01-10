export class Router
{
  routes = {};
  background = document.querySelector("body");

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
   
    switch (pathname) {
      case "/":
        this.background.style.backgroundImage="url(./assets/mountains-universe-1.png)";
        break
      case "/universo":
        this.background.style.backgroundImage="url(./assets/mountains-universe-2.png)";
        break;
      case "/exploration":
        this.background.style.backgroundImage="url(./assets/mountains-universe-3.png)";
        break;  
    }

    fetch(route).then(data => data.text()).then(html => {
      document.querySelector('#app').innerHTML = html;
    })
  }
}