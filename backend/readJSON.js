import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const filePath = path.join(__dirname, 'data.json');

export function randomCards(number_of_cards, callback) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            callback(err)
        }
        const cards = JSON.parse(data);
        callback(null, shuffleReducedArray(cards, number_of_cards));
    })
}




function shuffleReducedArray(array, take_cards) {
    let res = [];


    // Iterate over the array in reverse order
    for (let i = array.length - 1; i > 0; i--) {

        // Generate Random Index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements
        [array[i], array[j]] = [array[j], array[i]];
    }

    for (let i = 0; i < take_cards; i++) {
        res.push(array[i]);
    }
    return res;
}