/* eslint indent: "off" */
import Template from './Template.js';
import ipsum from './data.js';

const template = new Template(({ length }) => `
    <h2>${length} Ipsum</h2>
    <ul class="list"></ul>
`);

const ipsumTemplate = new Template(({ title, author }) => `
    <li class="ipsum">
        ${title} (${author})
    </li>
`);


export default class IpsumList {
    constructor(onSelect) {
        this.ipsumList = ipsum;
        this.onSelect = onSelect;
    }

    render() {
        const dom = template.render(this.ipsumList);
        const ul = dom.querySelector('ul');
        
        this.ipsumList.map(ipsum => {
            const dom = ipsumTemplate.render(ipsum);
            const li = dom.querySelector('li');
            li.addEventListener('click', () => {
                this.onSelect(ipsum);
            });
            ul.appendChild(dom);
        });

        return dom;
    }
}