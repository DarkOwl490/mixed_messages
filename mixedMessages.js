const message_storage = {
    'Title Screen': ['As seen on TV!', 'Awesome!', '100% Pure!', 'May contain nuts!', 'More polygons!', 'Moderately attractive!', 'Limited edition!', 'Flashing letters!', 'It\'s here!', 'Best in class!', 'It\'s finished!', 'Kind of dragon free!', 'Excitement!', 'More than 500 sold!', 'One of a kind!', 'Heaps of hits on youtube!', 'Spiders everywhere!', 'Check it out!', 'Holy cow, man!', 'It\'s a game!', 'Made in Sweden!', 'Uses LWJGL!', 'Reticulating splines!', 'Minecraft!', 'Yaaay!', 'Singleplayer!', 'Ingots!', 'Exploding creepers!', 'That\'s no moon!', 'l33t!', 'The bee\'s knees', 'Classy!', '90% bug free!', 'Absolutely no memes!', 'Technically good!', 'GOTY!', 'Euclidian!', 'Herregud!', 'Random splash!', 'Call your mother'],
    'Loading Screen': ['Loading...', 'Please wait...', 'Initializing game...', 'Please be patient...', 'Just a few seconds...', 'Loading world...', 'Don\'t dig straight down...', 'Use knockback against creepers.', 'Watch out for lava.', 'Use a bed to set your spawn point', 'Use a bucket of water to save yourself from falling.', 'A full set of armour uses 24 iron ingots.', 'Blocks break on the northmost face.', 'Evokers can change the wool color of sheep.', 'Mushroom biomes are safe.', 'Creepers are scared of cats.', 'Milking a mooshroom gives you mushroom stew.', 'Build a crafting table and pickaxe first to gather stone before anything else.'],
    'Death Screen': ['You died!', 'Game over!', 'You have perished!', 'You have been slain!', 'You are dead!', 'You have met your demise!', 'You have been defeated!', 'You have fallen!', 'You have succumbed to the void!', 'You have been vanquished!', 'You have been eliminated!', 'You have been crushed!', 'You have been obliterated!', 'You have been terminated!', 'You have been dispatched!', 'You have been extinguished!', 'Wah wah wahhh!', 'Death by snu snu!']
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