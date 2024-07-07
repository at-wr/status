async function fetchStatus() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/at-wr/status/main/status.txt');
        const status = await response.text();
        document.getElementById('status').textContent = status.trim();
    } catch (error) {
        console.error('Error fetching status:', error);
        document.getElementById('status').textContent = 'Error fetching status';
    }
}

// Fetch status initially
fetchStatus();

// Fetch status every 10 seconds
setInterval(fetchStatus, 10000);

// Hidden text
const emoticon = [
    '\\(=^・ω・^=)',
    '\\(o^▽^o)',
    '\\(≧◡≦)',
    '\\(^◡^)/',
    '(╯°□°）╯︵ ┻━┻',
    'ヽ(`⌒´メ)ノ',
    '(¬_¬)',
    '(¬‿¬)',
];
const text = [
    '捏捏',
    '揉揉',
    '咬你',
    '哼',
    '哈喽',
    '啊',
    'rua',
    '喵!',
    '唔?',
    '嘿嘿'
];
const hiddenText = document.getElementById('hidden-text');
let lastText = '';

function getRandomText() {
    let newText;
    do {
        newText = `${emoticon[Math.floor(Math.random() * emoticon.length)]} ${text[Math.floor(Math.random() * text.length)]}`;
    } while (newText === lastText);
    lastText = newText;
    return newText;
}

// Initialize hidden text
hiddenText.textContent = getRandomText();

// New hidden text on click
hiddenText.addEventListener('click', () => {
    hiddenText.textContent = getRandomText();
});