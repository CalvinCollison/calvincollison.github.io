const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they contemplated life for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Moblin the Goblin", "Alec Bohm", "Daniel Ricciardo"];
const insertY = ["Citizens Bank Park", "Suzuka", "the Kobold cave"];
const insertZ = ["did a shoey", "were swarmed by fans", "did an epic air guitar solo"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let itemX = randomValueFromArray(insertX);
    let itemY = randomValueFromArray(insertY);
    let itemZ = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", itemX);
    newStory = newStory.replaceAll(":inserty:", itemY);
    newStory = newStory.replaceAll(":insertz:", itemZ);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300 * 0.0714286)} stone`;
        const temperature =  `${Math.round((94 - 32) * 5/9)} centigrade`;
        newStory = newStory.replaceAll("94 fahrenheit", temperature);
        newStory = newStory.replaceAll("300 pounds", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}