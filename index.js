const Nightmare = require('nightmare');
const nightmare = Nightmare();
const secrets = require('./secrets.json');

const url = 'https://www.electrickiwi.co.nz';
const start = async () => {
	console.log(`🚀 to ${url}`);
	nightmare
		// Load up the electron window
		.goto(url)
		.wait('.login-opener')
		// Opening the login form at the top of the screen
		.click('.login-opener')
		// Login
		.insert('#LoginForm_username', secrets.username)
		.insert('#LoginForm_password', secrets.password)
		.click('.account_login_btn')
		// Wait until the account page loads
		.wait('.your_account_admin')
		.evaluate(() => {
			const summaryInfoNodes = document.querySelectorAll(
				'.summary_table tbody td'
      );
      // Fragile, but gets the correct data currently 🤞
			return {
				dateRange: document.getElementById('date').value,
				electricityUsage: summaryInfoNodes[0].textContent.trim(),
				electricityUsage: summaryInfoNodes[1].textContent.trim(),
				electricityTotal: summaryInfoNodes[2].textContent.trim(),
				hopUsage: summaryInfoNodes[3].textContent.trim(),
				supplyCharges: summaryInfoNodes[6].textContent.trim(),
				supplyChargesRate: summaryInfoNodes[7].textContent.trim(),
				supplyChargesTotal: summaryInfoNodes[8].textContent.trim(),
				total: summaryInfoNodes[11].textContent.trim()
			};
		})
		.end()
		.then(values => {
      console.log('Here are the return values 🎉');
      // TODO, do something better with this
			console.log(values);
		})
		.catch(error => {
			console.error('Information extraction failed:', error);
		});
};

start();
