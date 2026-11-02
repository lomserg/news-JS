import App from './components/app/app';
import './global.css';
import logo from './assets/images/logo-rsschool3.png';

const logoElement = document.querySelector<HTMLImageElement>('.rsschool-logo');

if (logoElement) {
    logoElement.src = logo;
}
const app = new App();
app.start();
