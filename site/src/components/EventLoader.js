import { readdirSync, readFileSync } from "fs";

import { html, LitElement } from "lit";
import yamlFront from "yaml-front-matter";

const fileContent = getAllFilesInDir("events");
const eventsJson = eventsToJson(fileContent);
const eventData = manageEventsJsonData(eventsJson);

console.log(eventData);

export class EventLoader extends LitElement {

    constructor() {
        super();

    }

    renderEvents() {
        const upcomingEvents = eventData.filter(ev => !ev.isPast).map(this.renderEvent)
        const pastEvents = eventData.filter(ev => ev.isPast).map(this.renderEvent);

        return html`
            <h2>Upcoming events</h2>
            ${upcomingEvents}

            <h2>Past events</h2>
            ${pastEvents}
        `
    }

    renderEvent(event) {
        return html`
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
        `
    }

    render() {
        return html`
            <p>EventLoader</p>

            ${this.renderEvents()}
        `
    }
}

function manageEventsJsonData(eventsJson) {
    return eventsJson.map(event => {
        const dateStringSplit = event.frontloadContent.date.split("/");
        const year = dateStringSplit[2];
        const month = dateStringSplit[1];
        const day = dateStringSplit[0];

        const today = new Date();
        const dateAsObject = new Date(Date.UTC(year, month - 1, day));
        return {
            ...event,
            dateAsObject,
            isPast: today - dateAsObject > 0
        };
    })
        .sort((a, b) => b.dateAsObject - a.dateAsObject);
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
