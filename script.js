const kingdoms = [
  {
    name: 'The North',
    badge: 'Kingdom',
    summary: 'A harsh, ancient realm of snow, stone, and old oaths, where history is deep and loyalty is hard-won.',
    seat: 'Winterfell',
    power: 'Endurance, ancestral legitimacy, and winter-born resolve',
    region: 'Northern Westeros'
  },
  {
    name: 'The Riverlands',
    badge: 'Kingdom',
    summary: 'The heartland of the realm, crossed by rivers, rival houses, and the constant pull of war and diplomacy.',
    seat: 'Riverrun',
    power: 'Strategic roads, old loyalties, and shifting alliances',
    region: 'Central Westeros'
  },
  {
    name: 'The Vale of Arryn',
    badge: 'Kingdom',
    summary: 'A mountain kingdom of stone, watchful lords, and deep-born pride, anchored by the Eyrie and the Vale.',
    seat: 'The Eyrie',
    power: 'Defensive strength, aerial advantage, and old noble pedigree',
    region: 'Eastern Westeros'
  },
  {
    name: 'The Westerlands',
    badge: 'Kingdom',
    summary: 'Rich in gold, iron, and ambition, where wealth becomes influence and influence becomes a weapon.',
    seat: 'Casterly Rock',
    power: 'Coin, industry, and armed wealth',
    region: 'Western Westeros'
  },
  {
    name: 'The Reach',
    badge: 'Kingdom',
    summary: 'The fertile heart of the south, of roses, grain, and ancient noble prestige.',
    seat: 'Highgarden',
    power: 'Agriculture, social influence, and courtly power',
    region: 'Southwestern Westeros'
  },
  {
    name: 'The Stormlands',
    badge: 'Kingdom',
    summary: 'A storm-battered realm of grit, naval strength, and proud lords who know how to fight on their own terms.',
    seat: 'Storms End',
    power: 'Defense, martial reputation, and sea-bound strength',
    region: 'Southern Westeros'
  },
  {
    name: 'The Crownlands',
    badge: 'Kingdom',
    summary: 'The seat of royal power, the arena of lordly court intrigue, and the place where crowns are made and broken.',
    seat: "King's Landing",
    power: 'Authority, court politics, and the weight of the throne',
    region: 'Central-southern Westeros'
  }
];

const houses = [
  { name: 'House Targaryen', type: 'paramount', words: 'Fire and Blood', seat: 'Dragonstone', kingdom: 'Crownlands', summary: 'The blood of old kings and dragons, a House whose claim to the throne is both sacred and contested.', role: 'Crown House' },
  { name: 'House Stark', type: 'paramount', words: 'Winter is Coming', seat: 'Winterfell', kingdom: 'The North', summary: 'Ancient, disciplined, and fiercely loyal to the old ways of the North and its honor.', role: 'Winter kings of the North' },
  { name: 'House Arryn', type: 'paramount', words: 'As High as Honor', seat: 'The Eyrie', kingdom: 'The Vale', summary: 'Guardians of the mountain passes and keepers of ancient prestige.', role: 'Warden of the East' },
  { name: 'House Lannister', type: 'paramount', words: 'Hear Me Roar', seat: 'Casterly Rock', kingdom: 'The Westerlands', summary: 'Wealthy, ruthless, and politically formidable, the Lannisters turn wealth into power.', role: 'Great House of the West' },
  { name: 'House Baratheon', type: 'paramount', words: 'Ours is the Fury', seat: 'Storms End', kingdom: 'The Stormlands', summary: 'Storm-blooded warriors of the southern coast, famous for martial pride and fierce independence.', role: 'Warden of the Stormlands' },
  { name: 'House Tyrell', type: 'paramount', words: 'Growing Strong', seat: 'Highgarden', kingdom: 'The Reach', summary: 'Gardeners of the Reach, master diplomats, and stewards of abundance.', role: 'Warden of the South' },
  { name: 'House Greyjoy', type: 'paramount', words: 'We Do Not Sow', seat: 'Pyke', kingdom: 'Iron Islands', summary: 'Ironborn raiders and hard-edged sea lords whose pride challenges the peace of the west.', role: 'Lord Reavers of the Iron Islands' },
  { name: 'House Tully', type: 'paramount', words: 'Family, Duty, Honor', seat: 'Riverrun', kingdom: 'The Riverlands', summary: 'The River Kings of old, bound by loyalty, law, and the politics of central Westeros.', role: 'Warden of the Riverlands' },

  { name: 'House Mormont', type: 'minor', words: 'Here We Stand', seat: 'Bear Island', kingdom: 'The North', summary: 'A hard, proud northern house known for steadfastness, survival, and fierce martial discipline.', role: 'Northern house of endurance' },
  { name: 'House Umber', type: 'minor', words: 'The Great and Terrible', seat: 'Last Hearth', kingdom: 'The North', summary: 'A towering, formidable northern house whose reputation for strength and ferocity is feared across the North.', role: 'House of the North' },
  { name: 'House Reed', type: 'minor', words: 'We Remember', seat: 'Greywater Watch', kingdom: 'The North', summary: 'A mysterious river-and-marsh family with deep roots in the old wilds of the North.', role: 'Watchers of the bogs' },
  { name: 'House Bolton', type: 'minor', words: 'Our Blades Are Sharp', seat: 'The Dreadfort', kingdom: 'The North', summary: 'A feared and ruthless northern house whose power rests on violence and intimidation.', role: 'Northern lords of terror' },
  { name: 'House Glover', type: 'minor', words: 'We Keep the Watch', seat: 'Deepwood Motte', kingdom: 'The North', summary: 'A vigilant northern house known for discipline, fidelity, and a steady hand on the frontier.', role: 'Keeper of the northern frontier' },
  { name: 'House Karstark', type: 'minor', words: 'The Sun of Winter', seat: 'Karhold', kingdom: 'The North', summary: 'A fierce old northern line whose pride and martial talent earn respect and fear alike.', role: 'Northern war house' },
  { name: 'House Hornwood', type: 'minor', words: 'Winds of the Wild', seat: 'Hornwood', kingdom: 'The North', summary: 'A weathered northern family of hunters, land, and ancient tradition.', role: 'Old northern house' },
  { name: 'House Dustin', type: 'minor', words: 'We Remember the Old Ways', seat: 'Barrowton', kingdom: 'The North', summary: 'An old and proud family whose name carries weight in land disputes and old bloodlines.', role: 'House of barrows and lineage' },
  { name: 'House Flint', type: 'minor', words: 'By Flint and Stone', seat: "The Flints Finger", kingdom: 'The North', summary: 'A rugged coastal northern family with a sharp maritime tradition and a temperament as hard as stone.', role: 'Coastal landholders of the north' },

  { name: 'House Tarth', type: 'minor', words: 'Pride and Majesty', seat: 'Evenfall Hall', kingdom: 'The Stormlands', summary: 'A noble island house whose beauty, honor, and maritime standing make it respected across the south.', role: 'Stormland nobility' },
  { name: 'House Dondarrion', type: 'minor', words: 'The Storm Is Upon Us', seat: 'Blackhaven', kingdom: 'The Stormlands', summary: 'A legendary storm House whose bloodline is entwined with tragedy and defiance.', role: 'Stormlords of Blackhaven' },
  { name: 'House Connington', type: 'minor', words: 'No Weakness', seat: "Griffin's Roost", kingdom: 'The Stormlands', summary: 'A proud and warlike family famed for their martial honor and old lineage.', role: 'Griffin riders of the coast' },
  { name: 'House Errol', type: 'minor', words: 'Guard the Crown', seat: 'Haystack Hall', kingdom: 'The Stormlands', summary: 'A lesser but steady house of the storm coast, known for loyalty and reliability.', role: 'Steady house of the southern coast' },
  { name: 'House Swann', type: 'minor', words: 'We Remember the Sea', seat: 'Stonehelm', kingdom: 'The Stormlands', summary: 'A maritime and martial house with deep connections to sea routes and noble ambition.', role: 'Seafarers and lords of Stonehelm' },

  { name: 'House Blackwood', type: 'minor', words: 'When the River Runs Black', seat: "Raven's Pool", kingdom: 'The Riverlands', summary: 'An old and proud river lord family with deep rivalries and a reputation for resilience.', role: 'House of the river war' },
  { name: 'House Bracken', type: 'minor', words: 'Bracken is the Thorn', seat: 'Stone Hedge', kingdom: 'The Riverlands', summary: 'A riverland house known for bold action, long memories, and pressure on the old order.', role: 'River lord family' },
  { name: 'House Mallister', type: 'minor', words: 'Rightful and True', seat: 'Seagard', kingdom: 'The Riverlands', summary: 'A proud river fort family with a strong grasp of logistics, defense, and strategic purpose.', role: 'Guardians of the river roads' },
  { name: 'House Mooton', type: 'minor', words: 'Steady Beneath the Rain', seat: 'Mooton', kingdom: 'The Riverlands', summary: 'A dependable river lord family whose influence grows through patience and quiet power.', role: 'Riverland steadiness' },
  { name: 'House Piper', type: 'minor', words: 'The Song of the River', seat: 'Pinkmaiden', kingdom: 'The Riverlands', summary: 'A proud and spirited river house whose temperament is as sharp as steel.', role: 'House of the river songs' },
  { name: 'House Frey', type: 'minor', words: 'We Stand Together', seat: 'The Twins', kingdom: 'The Riverlands', summary: 'A wealthy crossing house whose ambitions are as long as their bridges and whose loyalty is carefully managed.', role: 'Bridge lords of the crossing' },

  { name: 'House Hightower', type: 'minor', words: 'We Light the Way', seat: 'The Hightower', kingdom: 'The Reach', summary: 'One of the oldest and most prestigious noble lines in the Reach, known for wisdom and old ambition.', role: 'Beacon of the Reach' },
  { name: 'House Florent', type: 'minor', words: 'No One Accuses Us of Being Too Soft', seat: 'Brightwater Keep', kingdom: 'The Reach', summary: 'A politically ambitious Reach house known for intrigue, flexibility, and strategic appetite.', role: 'Courtly power in the Reach' },
  { name: 'House Redwyne', type: 'minor', words: 'The Wine of the Fields', seat: 'The Arbor', kingdom: 'The Reach', summary: 'Masters of the vines and the sea, a great Reach lineage whose wealth is difficult to ignore.', role: 'Wine lords of the Reach' },
  { name: 'House Rowan', type: 'minor', words: 'We Are the Rowan', seat: 'Goldengrove', kingdom: 'The Reach', summary: 'An older Reach house of tradition and careful patience, valued for steady leadership.', role: 'Ancient lordly line of the Reach' },
  { name: 'House Oakheart', type: 'minor', words: 'Deep Rooted', seat: 'Old Oak', kingdom: 'The Reach', summary: 'A House of ancient custom and stubborn pride, rooted in the land and the old order.', role: 'Ancient Reach house' },
  { name: 'House Ashford', type: 'minor', words: 'Ashes to Glory', seat: 'Ashford', kingdom: 'The Reach', summary: 'A modest but respected Reach line known for service, dignity, and enduring resolve.', role: 'House of service and order' },

  { name: 'House Clegane', type: 'minor', words: 'The Hound Remembers', seat: 'Hearthfire', kingdom: 'The Westerlands', summary: 'A rough, brutal family whose reputation is nearly as sharp as the steel they carry.', role: 'House of force and intimidation' },
  { name: 'House Lefford', type: 'minor', words: 'Iron and Grain', seat: 'The Rock', kingdom: 'The Westerlands', summary: 'A prosperous western house whose wealth and reach make them valuable in peace and dangerous in war.', role: 'Wealthy western vassals' },
  { name: 'House Marbrand', type: 'minor', words: 'Red Steel', seat: "Mara's Mark", kingdom: 'The Westerlands', summary: 'A martial house with an instinct for violence and a sharp appetite for power.', role: 'Lords of the western hills' },
  { name: 'House Payne', type: 'minor', words: 'Strong as the Stone', seat: "Payne's Hall", kingdom: 'The Westerlands', summary: 'A lesser but established western bloodline notable for steadiness and practical ambition.', role: 'House of western order' },

  { name: 'House Corbray', type: 'minor', words: "The Falcon's Wing", seat: "Heart's Home", kingdom: 'The Vale', summary: 'A proud and competitive Vale house eager to assert itself in mountain politics.', role: 'Vale noble family of prestige' },
  { name: 'House Royce', type: 'minor', words: 'We Remember', seat: 'Runestone', kingdom: 'The Vale', summary: 'A storied and respected lineage known for tradition, steel, and old blood.', role: 'Ancient house of the Vale' },
  { name: 'House Waynwood', type: 'minor', words: 'Always Faithful', seat: 'Sable Hall', kingdom: 'The Vale', summary: 'A steadfast mountain house recognized for loyalty, old ties, and decisive action.', role: 'Faithful mountain lords' },
  { name: 'House Egen', type: 'minor', words: 'The Eagle Watches', seat: 'The Fingers', kingdom: 'The Vale', summary: 'A lesser but honorable Vale line shaped by narrow mountain geography and old ties.', role: 'House of the mountain passes' }
];

const kingdomGrid = document.getElementById('kingdom-grid');
const houseGrid = document.getElementById('house-grid');
const searchInput = document.getElementById('wiki-search');
const filterButtons = document.querySelectorAll('.filter-button');
let activeFilter = 'all';

function renderKingdoms(query = '') {
  const data = kingdoms.filter((kingdom) => {
    const haystack = `${kingdom.name} ${kingdom.summary} ${kingdom.seat} ${kingdom.power} ${kingdom.region}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  kingdomGrid.innerHTML = data
    .map(
      (kingdom) => `
        <article class="kingdom-card">
          <span class="badge">${kingdom.badge}</span>
          <h3>${kingdom.name}</h3>
          <p>${kingdom.summary}</p>
          <div class="meta-row">
            <span><strong>Seat:</strong> ${kingdom.seat}</span>
            <span><strong>Strength:</strong> ${kingdom.power}</span>
            <span><strong>Region:</strong> ${kingdom.region}</span>
          </div>
        </article>
      `
    )
    .join('');

  if (!data.length) {
    kingdomGrid.innerHTML = '<p class="muted-empty">No kingdoms match your search.</p>';
  }
}

function renderHouses(query = '') {
  const data = houses.filter((house) => {
    const haystack = `${house.name} ${house.words} ${house.seat} ${house.kingdom} ${house.summary} ${house.role}`.toLowerCase();
    return haystack.includes(query.toLowerCase()) && (activeFilter === 'all' || house.type === activeFilter);
  });

  houseGrid.innerHTML = data
    .map(
      (house) => `
        <article class="house-card">
          <span class="badge">${house.type}</span>
          <h3>${house.name}</h3>
          <p><strong>Words:</strong> ${house.words}</p>
          <div class="meta-row">
            <span><strong>Seat:</strong> ${house.seat}</span>
            <span><strong>Kingdom:</strong> ${house.kingdom}</span>
            <span><strong>Role:</strong> ${house.role}</span>
          </div>
          <p style="margin-top: 1rem;">${house.summary}</p>
        </article>
      `
    )
    .join('');

  if (!data.length) {
    houseGrid.innerHTML = '<p class="muted-empty">No houses match your current filter or search.</p>';
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderHouses(searchInput.value.trim());
  });
});

searchInput.addEventListener('input', (event) => {
  const query = event.target.value.trim();
  renderKingdoms(query);
  renderHouses(query);
});

renderKingdoms();
renderHouses();
