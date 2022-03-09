import cheerio from "cheerio";
import chalk from "chalk";
import {arrayFromLength} from "./helpers/common.js";
import {getPageContent} from "./helpers/puppeteer.js";

const SITE = 'https://www.youtube.com/watch?v=8P8XcbuJ6MY&t=14s'
const pageCount = 2;

(async function main() {
    try {
        // for (const page of arrayFromLength(pageCount)) {
        //     const url = `${SITE}${page}`;
        //     const pageContent = await getPageContent(url);
        //     console.log(pageContent)
        // }
        const pageContent = await getPageContent(SITE);
        const $ = cheerio.load(pageContent);
        const commentItems = [];


        console.log($("ytd-comment-renderer#comment").html())
    } catch (err) {
        console.log(chalk.red('An error has occurred \n', err));
    }
})();
