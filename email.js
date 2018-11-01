require('chromedriver');
const selenium = require('selenium-webdriver');
const driver = new selenium.Builder().forBrowser('chrome').build();

function foo(url, user, pass){
    driver.get(url)
	const email = driver.findElement(selenium.By.id('identifierId'));
	email.sendKeys(user)
	let nextButton = driver.findElement(selenium.By.className('RveJvd snByac'));
	nextButton.click()
	const password = driver.wait(selenium.until.elementLocated(selenium.By.name('password')))
	password.sendKeys(pass)
	const nextBtn = driver.wait(selenium.until.elementLocated(selenium.By.id('passwordNext')))
	const next = nextBtn.findElement(selenium.By.className('RveJvd snByac'));
	next.click()
}


let username = ''
let code = ''
	
foo('https://accounts.google.com/ServiceLogin?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1', username, code)