import testme from './home'
import menu from './menu'
import './style.css'

const func = () => {
    const container = document.querySelector("#content");
    container.appendChild(testme());
    
}
func()
const bar = document.querySelector(".bar");
const b1 = document.createElement("button");
b1.textContent = "Home";
const b2 = document.createElement("button");
b2.textContent = "Menu";
b2.addEventListener('click', () => {
    menu();
});
const b3 = document.createElement("button");
b3.textContent = "Contact";
bar.appendChild(b1);
bar.appendChild(b2);
bar.appendChild(b3);