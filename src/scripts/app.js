import drawerInitiator from './utility/drawer';
import urlParser from './routes/url-parser';
import routes from './routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    drawerInitiator.init({
      button: this.button,
      drawer: this.drawer,
      content: this.content,
    });
  }

  async renderPage() {
    const url = urlParser.parseActiveUrlWithCombiner();
    console.log(url);
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
