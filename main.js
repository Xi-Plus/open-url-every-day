function main() {
	openGamer()
	openLeetCode()
	openEpic()
	// openSteamEvent()
	// openSteamQueue()
}

const today = new Date()

function openGamer() {
	window.open('https://www.gamer.com.tw/')
}

function openLeetCode() {
	window.open('https://leetcode.com/problems/two-sum/')
}

function openEpic() {
	// if (today.getDay() === 5) {
		window.open('https://store.epicgames.com/zh-Hant/free-games')
	// }
}

function openSteamEvent() {
	window.open('https://store.steampowered.com/sale/lunarnewyear2024')
}

function openSteamQueue() {
	window.open('https://store.steampowered.com/explore/')
}

main()
