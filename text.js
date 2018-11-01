require('chromedriver');
const selenium = require('selenium-webdriver');
const driver = new selenium.Builder().forBrowser('chrome').build();
let email = 'aaa'

function foo(url){
    driver.get(url)
	const field = driver.findElement(selenium.By.className('reply_button js-only')).click();
	selenium.webdriver.support.ui.WebDriverWait(driver, 10).until(EC.title_contains('anonemail'))
	const emailAddy = driver.findElement(selenium.By.className('anonemail')).getText().then(txt => console.log(txt));
}
	
foo('https://cincinnati.craigslist.org/sof/d/software-engineer/6737391786.html')