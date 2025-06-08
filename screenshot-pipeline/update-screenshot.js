import puppeteer from "puppeteer-core";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/usr/bin/google-chrome",
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
