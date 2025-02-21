const message_storage = {
    'Title Screen': ['Welcome to the game!', 'Welcome to the jungle!', 'Welcome to the world!', 'Welcome to the adventure!', 'Welcome to the fun!', 'Welcome to the excitement!', 'Welcome to the challenge!', 'Welcome to the danger!', 'Welcome to the mystery!', 'Welcome to the magic!', 'Welcome to the fantasy!', 'Welcome to the action!', 'Welcome to the thrill!', 'Welcome to the suspense!', 'Welcome to the horror!', 'Welcome to the terror!'],
    'Loading Screen': ['Loading...', 'Please wait...', 'Initializing game...', 'Please be patient...', 'Just a few seconds...', 'Loading world...', 'Watch out for lava.', 'Use a bed to set your spawn point', 'Press SPACE to jump'],
    'Death Screen': ['You died!', 'Game over!', 'You have perished!', 'You have been slain!', 'You are dead!', 'You have met your demise!', 'You have been defeated!', 'You have fallen!', 'You have succumbed to the void!', 'You have been vanquished!', 'You have been eliminated!', 'You have been crushed!', 'You have been obliterated!', 'You have been terminated!', 'You have been dispatched!', 'You have been extinguished!', 'Wah wah wahhh!']
}
// This function returns a random message from the specified screen category
const getRandomMessage = (screen) => {
    if (message_storage[screen]) {
        const messages = message_storage[screen];
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    } else {
        console.error(`No messages found for screen: ${screen}`);
        return null;
    }
}
const getRandomTitleMessage = () => getRandomMessage('Title Screen');
// console.log(getRandomTitleMessage());
const getRandomLoadingMessage = () => getRandomMessage('Loading Screen');
// console.log(getRandomLoadingMessage());
const getRandomDeathMessage = () => getRandomMessage('Death Screen');
// console.log(getRandomDeathMessage());

// This function generates a random message for each screen category
const generateRandomMessage = () => {
    const randomTitle = getRandomTitleMessage();
    const randomLoading = getRandomLoadingMessage();
    const randomDeath = getRandomDeathMessage();
    console.log(`Main Menu: ${randomTitle}`);
    console.log(`Loading Screen: ${randomLoading}`);
    console.log(`Death Screen: ${randomDeath}`);
}

generateRandomMessage();