import puppeteer from "puppeteer-core";
const path = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: path,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const pages = await browser.newPage();
  await pages.goto(
    "https://aditya-23140.github.io/Self-Projects/screenshot-pipeline",
    { waitUntil: "networkidle2" }
  );

  await pages.screenshot({ path: "screenshot.png", fullPage: true });
  await browser.close();
})();
