import { readdirSync, readFileSync } from "fs";
import { html, LitElement } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const fileContent = getAllFilesInDir("events");
const eventsJson = eventsToJson(fileContent);

export class EventLoader extends LitElement {

    render() {
        return html`
            <p>EventLoader</p>
            <p>${unsafeHTML(fileContent)}</p>
        `
    }
}

/**
 * @param { string[] } markdown
 * */
function eventsToJson(markdownFiles) {
    console.log("MARKDOWNFILES", markdownFiles);
}

function getAllFilesInDir(dirName) {
    const files = readdirSync(dirName);
    return files.map(file => ({
        path: dirName + "/" + file,
        content: readFileSync(dirName + "/" + file, "UTF-8")
    }));
}

customElements.define("event-loader", EventLoader);
