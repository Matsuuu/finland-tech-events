import { readdirSync, readFileSync } from "fs";
import { html, LitElement } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import yamlFront from "yaml-front-matter";

const fileContent = getAllFilesInDir("events");
const eventsJson = eventsToJson(fileContent);

console.log("Events as json", eventsJson);

export class EventLoader extends LitElement {

    constructor() {
        super();

    }

    renderEvents() {
        return eventsJson.map(event => html`
            <section>
                <h2>${event.frontloadContent.title}</h2>
                <ul>
                    <li>Date: ${event.frontloadContent.date}</li>
                    <li>URL: ${event.frontloadContent.url}</li>
                </ul>

                <p>
                    ${event.frontloadContent.__content}
                </p>
            </section>
        `)
    }

    render() {
        return html`
            <p>EventLoader</p>

            ${this.renderEvents()}
        `
    }
}

/**
 * @param { {path: string, content: string}[] } markdown
 * */
function eventsToJson(markdownFiles) {
    return markdownFiles.map(file => ({
        ...file,
        frontloadContent: yamlFront.loadFront(file.content)
    }))
}

function getAllFilesInDir(dirName) {
    const files = readdirSync(dirName);
    return files.map(file => ({
        path: dirName + "/" + file,
        content: readFileSync(dirName + "/" + file, "UTF-8")
    }));
}

customElements.define("event-loader", EventLoader);
