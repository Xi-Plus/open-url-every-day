function main() {
	openEpic()
	openSteamEvent()
	openSteamQueue()
	openLeetCode()
}

const today = new Date()

function openEpic() {
	if (today.getDay() === 5) {
		window.open('https://store.epicgames.com/zh-Hant/free-games')
	}
}

function openSteamEvent() {
	window.open('https://store.steampowered.com/sale/lunarnewyear2024')
}

function openSteamQueue() {
	window.open('https://store.steampowered.com/explore/')
}

function openLeetCode() {
	window.open('https://leetcode.com/problems/two-sum/')
}

main()
