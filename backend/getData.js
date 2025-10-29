import axios from "axios";
import jsdom from "jsdom";
import fs from "fs";

const { JSDOM } = jsdom;

const MAX_NUMBER_OF_PAGES = 29;
const MAX_NUMBER_OF_ARTICLES = 691;

let count = 0;
let cards = [];

for (let i = 1; i <= MAX_NUMBER_OF_PAGES; i++) {
    axios({
        method: 'get',
        url: `https://www.30secondsofcode.org/snippets/p/${i}/`
    }).then(res => {
        const dom = new JSDOM(res.data);
        const all_articles = [...dom.window.document.querySelectorAll('.preview-list ul li ')]

        all_articles.forEach((card) => {

            count += 1

            //Card children
            const image = card.children[0];
            const article = card.children[1];

            //Article's children
            const small = article.children[0];
            const h3 = article.children[1];
            const p = article.children[2];

            //Small's children
            const text_node = small.firstChild
            const date_node = small.children[0]

            //H3's children
            const link_node = h3.children[0];

            cards.push({
                image_src: "https://www.30secondsofcode.org" + image.src,
                topic: text_node.textContent.replace(/·/g, '').trim(),
                date: date_node.textContent.trim(),
                link: "https://www.30secondsofcode.org" + link_node.href,
                title: link_node.textContent,
                summary: p.textContent,
            });

            if (cards.length === MAX_NUMBER_OF_ARTICLES) {
                const JSONString = JSON.stringify(cards);
                console.log(JSONString);
                fs.writeFile("data.json", JSONString, (err) => {
                    if (err) {
                        console.error(err);
                        throw err;
                    }
                    console.log("data.json written successfully.")
                })
            }

        })
        console.log(count)
    }).catch(err => {
        console.log(err)
        console.log(page_numbers[i])
    })
}


