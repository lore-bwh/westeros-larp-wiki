const kingdoms = [
  {
    name: 'The North',
    badge: 'Kingdom',
    summary:
      'A harsh, ancient realm of snow, stone, and old oaths, ruled by the ancient line of Winterfell.',
    seat: 'Winterfell',
    power: 'Frost, endurance, and ancestral legitimacy',
    region: 'Northern Westeros'
  },
  {
    name: 'The Riverlands',
    badge: 'Kingdom',
    summary:
      'The heartland of the realm, cut by rivers, lordly rivalries, and the constant pull of power.',
    seat: 'Riverrun',
    power: 'Strategic roads, fealty, and shifting alliances',
    region: 'Central Westeros'
  },
  {
    name: 'The Vale of Arryn',
    badge: 'Kingdom',
    summary:
      'A mountain kingdom of stone, flight, and watchful lords, anchored by the Eyrie and the Vale.',
    seat: 'The Eyrie',
    power: 'Aerial advantage, defensive strength, and pedigree',
    region: 'Southwestern Westeros'
  },
  {
    name: 'The Westerlands',
    badge: 'Kingdom',
    summary:
      'Rich in gold, iron, and ambition, where the Lannisters turn wealth into influence and leverage.',
    seat: 'Casterly Rock',
    power: 'Coin, industry, and armed wealth',
    region: 'Western Westeros'
  },
  {
    name: 'The Reach',
    badge: 'Kingdom',
    summary:
      'The broad and fertile realm of roses, grain, and old noble houses of great prestige.',
    seat: 'Highgarden',
    power: 'Agriculture, prestige, and courtly influence',
    region: 'Southwestern Westeros'
  },
  {
    name: 'The Stormlands',
    badge: 'Kingdom',
    summary:
      'A storm-torn, rugged kingdom of grit, naval strength, and martial pride.',
    seat: 'Storms End',
    power: 'Defense, lords, and warlike households',
    region: 'Southern Westeros'
  },
  {
    name: 'The Crownlands',
    badge: 'Kingdom',
    summary:
      'The seat of royal power, where the Crown is watched, courted, and challenged.',
    seat: "King's Landing",
    power: 'Authority, urban power, and court politics',
    region: 'Central-southern Westeros'
  }
];

const houses = [
  {
    name: 'House Targaryen',
    type: 'paramount',
    words: 'Fire and Blood',
    seat: 'Dragonstone',
    kingdom: 'Crownlands',
    summary:
      'The blood of old kings and dragons, a House whose claim to the throne is both sacred and contested.',
    role: 'Crown House'
  },
  {
    name: 'House Stark',
    type: 'paramount',
    words: 'Winter is Coming',
    seat: 'Winterfell',
    kingdom: 'The North',
    summary:
      'Ancient, disciplined, and fiercely loyal to the old ways of the North and its honor.',
    role: 'Winter kings of the North'
  },
  {
    name: 'House Arryn',
    type: 'paramount',
    words: 'As High as Honor',
    seat: 'The Eyrie',
    kingdom: 'The Vale',
    summary:
      'Guardians of the mountain passes and keepers of high honor, with a fierce sense of lineage.',
    role: 'Warden of the East'
  },
  {
    name: 'House Lannister',
    type: 'paramount',
    words: 'Hear Me Roar',
    seat: 'Casterly Rock',
    kingdom: 'The Westerlands',
    summary:
      'Wealthy, ruthless, and politically formidable, the Lannisters turn wealth into power and power into destiny.',
    role: 'Great House of the West'
  },
  {
    name: 'House Baratheon',
    type: 'paramount',
    words: 'Ours is the Fury',
    seat: 'Storms End',
    kingdom: 'The Stormlands',
    summary:
      'Storm-blooded warriors of the southern coast, famous for martial pride and fierce independence.',
    role: 'Warden of the Stormlands'
  },
  {
    name: 'House Tyrell',
    type: 'paramount',
    words: 'Growing Strong',
    seat: 'Highgarden',
    kingdom: 'The Reach',
    summary:
      'Gardeners of the Reach, stewards of abundance, and masters of courtly diplomacy.',
    role: 'Warden of the South'
  },
  {
    name: 'House Greyjoy',
    type: 'paramount',
    words: 'We Do Not Sow',
    seat: 'Pyke',
    kingdom: 'Iron Islands',
    summary:
      'Ironborn raiders and hard-edged sea lords whose pride and ambition challenge the peace of the west.',
    role: 'Lord Reavers of the Iron Islands'
  },
  {
    name: 'House Tully',
    type: 'paramount',
    words: 'Family, Duty, Honor',
    seat: 'Riverrun',
    kingdom: 'The Riverlands',
    summary:
      'The River Kings of old, bound by loyalty, law, and the difficult politics of central Westeros.',
    role: 'Warden of the Riverlands'
  },
  {
    name: 'House Mormont',
    type: 'minor',
    words: 'Here We Stand',
    seat: 'Bear Island',
    kingdom: 'The North',
    summary:
      'A hard, proud northern house known for steadfastness, survival, and fierce martial discipline.',
    role: 'Northern house of endurance'
  },
  {
    name: 'House Umber',
    type: 'minor',
    words: 'The Great and Terrible',
    seat: 'Last Hearth',
    kingdom: 'The North',
    summary:
      'A towering, formidable northern house whose reputation for strength and ferocity is matched only by their pride.',
    role: 'House of the North'
  },
  {
    name: 'House Reed',
    type: 'minor',
    words: 'We Remember',
    seat: 'Greywater Watch',
    kingdom: 'The North',
    summary:
      'A mysterious river-and-marsh family of old roots and deep connection to the wilderness of the North.',
    role: 'Watchers of the bogs'
  },
  {
    name: 'House Bolton',
    type: 'minor',
    words: 'Our Blades Are Sharp',
    seat: 'The Dreadfort',
    kingdom: 'The North',
    summary:
      'A feared and ruthless northern house whose power rests in violence, intimidation, and brutal ambition.',
    role: 'Northern lords of terror'
  },
  {
    name: 'House Glover',
    type: 'minor',
    words: 'We Keep the Watch',
    seat: 'Deepwood Motte',
    kingdom: 'The North',
    summary:
      'A hard-shelled northern house known for vigilance, disciplined men, and old loyalties to Winterfell.',
    role: 'Keeper of the northern frontier'
  },
  {
    name: 'House Karstark',
    type: 'minor',
    words: 'The Sun of Winter',
    seat: 'Karhold',
    kingdom: 'The North',
    summary:
      'A fierce old northern house whose pride and martial talent have earned them respect and fear alike.',
    role: 'Northern war house'
  },
  {
    name: 'House Hornwood',
    type: 'minor',
    words: 'Winds of the Wild',
    seat: 'Hornwood',
    kingdom: 'The North',
    summary:
      'A weathered northern line of hunters, steadiness, and old ancestral bonds to the wild woods.',
    role: 'Old northern house'
  },
  {
    name: 'House Dustin',
    type: 'minor',
    words: 'We Remember the Old Ways',
    seat: 'Barrowton',
    kingdom: 'The North',
    summary:
      'An old and proud family of the North whose name carries weight in matters of land, precedent, and blood.',
    role: 'House of barrows and lineage'
  },
  {
    name: 'House Flint',
    type: 'minor',
    words: 'By Flint and Stone',
    seat: 'The Flints Finger',
    kingdom: 'The North',
    summary:
      'A rugged coastal northern family with a sharp maritime tradition and a temperament as hard as stone.',
    role: 'Coastal landholders of the north'
  },
  {
    name: 'House Tarth',
    type: 'minor',
    words: 'Pride and Majesty',
    seat: 'Evenfall Hall',
    kingdom: 'The Stormlands',
    summary:
      'A noble island house of beauty, honor, and old pride, with deep ties to the sea and the storm coast.',
    role: 'Stormland nobility'
  },
  {
    name: 'House Dondarrion',
    type: 'minor',
    words: 'The Storm Is Upon Us',
    seat: 'Blackhaven',
    kingdom: 'The Stormlands',
    summary:
      'A legendary storm House whose bloodline is entwined with tragedy, resilience, and fierce pride.',
    role: 'Stormlords of Blackhaven'
  },
  {
    name: 'House Connington',
    type: 'minor',
    words: 'No Weakness',
    seat: 'Griffin\'s Roost',
    kingdom: 'The Stormlands',
    summary:
      'A proud and warlike family of the storm coast, famed for their martial honor and ancient lineage.',
    role: 'Griffin riders of the coast'
  },
  {
    name: 'House Errol',
    type: 'minor',
    words: 'Guard the Crown',
    seat: 'Haystack Hall',
    kingdom: 'The Stormlands',
    summary:
      'A lesser but steady house of the stormlands, often seen as trustworthy friends and dangerous enemies.',
    role: 'Steady house of the southern coast'
  },
  {
    name: 'House Swann',
    type: 'minor',
    words: 'We Remember the Sea',
    seat: 'Stonehelm',
    kingdom: 'The Stormlands',
    summary:
      'A maritime and martial house whose connections to the sea and noble blood make them valuable allies.',
    role: 'Seafarers and lords of Stonehelm'
  },
  {
    name: 'House Blackwood',
    type: 'minor',
    words: 'When the River Runs Black',
    seat: "Raven's Pool",
    kingdom: 'The Riverlands',
    summary:
      'An old and proud river lord family with deep rivalries and a reputation for resilience.',
    role: 'House of the river war'
  },
  {
    name: 'House Bracken',
    type: 'minor',
    words: 'Bracken is the Thorn',
    seat: 'Stone Hedge',
    kingdom: 'The Riverlands',
    summary:
      'A riverland house known for bold action, long memories, and pressure on the old feudal order.',
    role: 'River lord family'
  },
  {
    name: 'House Mallister',
    type: 'minor',
    words: 'Rightful and True',
    seat: 'Seagard',
    kingdom: 'The Riverlands',
    summary:
      'A proud river fort family with a strong grasp of logistics, defense, and strategic purpose.',
    role: 'Guardians of the river roads'
  },
  {
    name: 'House Mooton',
    type: 'minor',
    words: 'Steady Beneath the Rain',
    seat: 'Mooton',
    kingdom: 'The Riverlands',
    summary:
      'A dependable river lord family whose political influence comes from patience and quiet power.',
    role: 'Riverland steadiness'
  },
  {
    name: 'House Piper',
    type: 'minor',
    words: 'The Song of the River',
    seat: 'Pinkmaiden',
    kingdom: 'The Riverlands',
    summary:
      'A lyrical, proud, and sometimes impulsive river house whose temperament is as sharp as steel.',
    role: 'House of the river songs'
  },
  {
    name: 'House Frey',
    type: 'minor',
    words: 'We Stand Together',
    seat: 'The Twins',
    kingdom: 'The Riverlands',
    summary:
      'A wealthy crossing house whose ambitions are as long as their bridges, and whose loyalty is tightly managed.',
    role: 'Bridge lords of the crossing'
  },
  {
    name: 'House Hightower',
    type: 'minor',
    words: 'We Light the Way',
    seat: 'The Hightower',
    kingdom: 'The Reach',
    summary:
      'One of the oldest and most prestigious noble lines in the Reach, known for wisdom, loyalty, and the burden of old ambition.',
    role: 'Beacon of the Reach'
  },
  {
    name: 'House Florent',
    type: 'minor',
    words: 'No One Accuses Us of Being Too Soft',
    seat: 'Brightwater Keep',
    kingdom: 'The Reach',
    summary:
      'A politically ambitious Reach house known for flexibility, intrigue, and strategic appetite.',
    role: 'Courtly power in the Reach'
  },
  {
    name: 'House Redwyne',
    type: 'minor',
    words: 'The Wine of the Fields',
    seat: 'The Arbor',
    kingdom: 'The Reach',
    summary:
      'Masters of the vines and the sea, a great Reach lineage whose wealth and influence are impossible to ignore.',
    role: 'Wine lords of the Reach'
  },
  {
    name: 'House Rowan',
    type: 'minor',
    words: 'We Are the Rowan',
    seat: 'Goldengrove',
    kingdom: 'The Reach',
    summary:
      'An older Reach house of tradition and careful patience, valued for steady leadership and quiet strength.',
    role: 'Ancient lordly line of the Reach'
  },
  {
    name: 'House Oakheart',
    type: 'minor',
    words: 'Deep Rooted',
    seat: 'Old Oak',
    kingdom: 'The Reach',
    summary:
      'A House of root, grove, and old customs, with a reputation for connectedness and stubborn pride.',
    role: 'Ancient Reach house'
  },
  {
    name: 'House Ashford',
    type: 'minor',
    words: 'Ashes to Glory',
    seat: 'Ashford',
    kingdom: 'The Reach',
    summary:
      'A modest but proud Reach line whose name is respected for steadiness and the quiet dignity of old service.',
    role: 'House of service and order'
  },
  {
    name: 'House Clegane',
    type: 'minor',
    words: 'The Hound Remembers',
    seat: 'Hearthfire',
    kingdom: 'The Westerlands',
    summary:
      'A rough, brutal, and infamous family whose reputation is nearly as sharp as the steel they carry.',
    role: 'House of force and intimidation'
  },
  {
    name: 'House Lefford',
    type: 'minor',
    words: 'Iron and Grain',
    seat: 'The Rock',
    kingdom: 'The Westerlands',
    summary:
      'A prosperous western house whose wealth and reach make them useful in peace and dangerous in war.',
    role: 'Wealthy vassals of the west'
  },
  {
    name: 'House Marbrand',
    type: 'minor',
    words: 'Red Steel',
    seat: 'Mara\'s Mark',
    kingdom: 'The Westerlands',
    summary:
      'A martial house with an instinct for violence and a sharp appetite for political maneuvering.',
    role: 'Lords of the western hills'
  },
  {
    name: 'House Payne',
    type: 'minor',
    words: 'Strong as the Stone',
    seat: 'Payne\'s Hall',
    kingdom: 'The Westerlands',
    summary:
      'A lesser but firmly established western bloodline, notable for steadiness and practical ambition.',
    role: 'House of western order'
  },
  {
    name: 'House Corbray',
    type: 'minor',
    words: 'The Falcon\'s Wing',
    seat: 'Heart\'s Home',
    kingdom: 'The Vale',
    summary:
      'A proud and competitive Vale house, eager to assert itself in the mountain politics of the east.',
    role: 'Vale noble family of prestige'
  },
  {
    name: 'House Royce',
    type: 'minor',
    words: 'We Remember',
    seat: 'Runestone',
    kingdom: 'The Vale',
    summary:
      'A storied and respected lineage known for tradition, steel, and the unspoken weight of their ancestry.',
    role: 'Ancient house of the Vale'
  },
  {
    name: 'House Waynwood',
    type: 'minor',
    words: 'Always Faithful',
    seat: 'Sable Hall',
    kingdom: 'The Vale',
    summary:
      'A steadfast Vale house known for loyalty, old ties, and quiet but decisive actions in the mountains.',
    role: 'Faithful mountain lords'
  },
  {
    name: 'House Egen',
    type: 'minor',
    words: 'The Eagle Watches',
    seat: 'The Fingers',
    kingdom: 'The Vale',
    summary:
      'A lesser but honorable house of the Vale, shaped by narrow mountain geography and deep old ties.',
    role: 'House of the mountain passes'
  }
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
