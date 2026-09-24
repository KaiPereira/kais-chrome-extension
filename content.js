console.log("What's done in the dark will always fine a way to shine.")


const keywords = ["ai", "llm", "agent", "gpt", "claude", "anthropic", "gemini", "model", "openai", "vibecode", "chatgpt", "copilot", "grok", "a.i"]

const current_url = window.location.href;


if (current_url.includes("reddit.com")) {
	window.location.replace("https://hackernews.com/");
}

if (current_url.includes("news.ycombinator.com")) {
	const posts = document.querySelectorAll("tr.athing");

	posts.forEach(post => {
		let title = " " + post.querySelector(".titleline").textContent;
		title = title.replaceAll("-", " ");

		keywords.some(keyword => {
			if (title.toLowerCase().includes(" " + keyword)) {
				const next_element = post.nextElementSibling;
				const spacer = next_element.nextElementSibling;

				post.remove();
				next_element.remove();
				spacer.remove();

				return true;
			}
		})
	})
}
