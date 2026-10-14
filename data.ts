export type Kind = 'home' | 'friend' | 'child' | 'surprise'
export type Theme = { bg: string; accent: string; name: string; line: string }
export const THEMES: Record<Exclude<Kind, 'surprise'>, Theme> = {
  home: { bg: '#F7D7A6', accent: '#E8821E', name: 'Home', line: 'Warm rice, a folded note, the smell of someone who cares.' },
  friend: { bg: '#C3E1DC', accent: '#3F7F7A', name: 'Friendship', line: 'Half a roti is better than a whole one alone.' },
  child: { bg: '#F8E6A0', accent: '#C99A1E', name: 'Childhood', line: 'The recess bell, the pickle stain, the secret trade.' },
}
export type SNode = { text: string; tone: string; choices?: { label: string; to: string }[]; ending?: string }
export type Story = { title: string; start: string; nodes: Record<string, SNode> }

export const STORIES: Record<'home' | 'child', Story> = {
  home: { title: "Amma's dabba", start: 'a', nodes: {
    a: { tone: '#F2C777', text: 'The lid clicks open. Jeera rice, still warm. A folded paper sits on top, soft with ghee.', choices: [{ label: 'Read the note first', to: 'note' }, { label: 'Eat first, read later', to: 'eat' }] },
    note: { tone: '#E8A24A', text: 'It says: "Eat slowly. Drink water. Call me." Her handwriting leans forward, as if in a hurry to reach you.', choices: [{ label: 'Keep the note', to: 'e1' }, { label: 'Call her right now', to: 'e2' }] },
    eat: { tone: '#D98A3A', text: 'The roti is somehow still soft. At the bottom, an extra sweet: one laddoo you did not ask for.', choices: [{ label: 'Save the laddoo', to: 'e3' }, { label: 'Share it with whoever is near', to: 'e4' }] },
    e1: { tone: '#F6D66B', text: 'You slip the note into your wallet, behind the cards. It will stay there for years.', ending: 'Ending: The note that travelled' },
    e2: { tone: '#E8821E', text: '"Did you eat?" she asks before hello. You laugh, and for four minutes the office disappears.', ending: 'Ending: The four-minute call' },
    e3: { tone: '#C96F2B', text: 'You save it for the evening. It tastes of a kitchen far away, which is the best kind of taste.', ending: 'Ending: The laddoo for later' },
    e4: { tone: '#F2B84B', text: 'A stranger smiles with powdered sugar on his lip. Now you both have a story about Amma.', ending: 'Ending: A sweeter stranger' },
  } },
  child: { title: 'The last bench', start: 'a', nodes: {
    a: { tone: '#F8E08A', text: 'Recess bell. Your dabba paper is stained with mango pickle. Meera across the aisle is eyeing it.', choices: [{ label: 'Offer a trade', to: 'trade' }, { label: 'Hide it under the desk', to: 'hide' }] },
    trade: { tone: '#EDC95A', text: 'Her tiffin holds lemon rice and a shiny new eraser. "Pickle for the eraser," she whispers.', choices: [{ label: 'Take the deal', to: 'e1' }, { label: 'Ask for half of everything', to: 'e2' }] },
    hide: { tone: '#C9B25A', text: 'Under the desk, a crumbling gulab jamun waits. The teacher has turned to the blackboard.', choices: [{ label: 'Eat it fast', to: 'e3' }, { label: 'Pass it to the back bench', to: 'e4' }] },
    e1: { tone: '#F6D66B', text: 'The eraser smells of strawberries. You never use it. You are friends for life.', ending: 'Ending: The eraser pact' },
    e2: { tone: '#F0C14B', text: 'Four hands, two tiffins, one bench. Teachers call it "mess". You call it lunch.', ending: 'Ending: Everything, halved' },
    e3: { tone: '#B89B3F', text: 'Sticky syrup on your notebook. The page keeps a faint sweet shine until the exams.', ending: 'Ending: The sticky page' },
    e4: { tone: '#E4B94C', text: 'It travels hand to hand, desk to desk, and returns as an empty katori with a thank-you scribbled in it.', ending: 'Ending: The travelling jamun' },
  } },
}

export const FRIEND_ACTIONS = {
  share: { label: 'Share a bite', hint: 'Offer a piece of your food',
    replies: ['They take the bigger half, then push a little back to you.', 'Your friend says, "I was just thinking about this smell."', 'A shared paratha tastes twice as warm.'] },
  compliment: { label: 'Offer a compliment', hint: 'Say something kind',
    replies: ['"Your tiffin always looks so cheerful." They grin at the lid.', '"You make hard days easier." They go quiet, then smile.', '"Nice dabba." Small words, long smile.'] },
  memory: { label: 'Invite a memory', hint: 'Ask for a food story',
    replies: ['"My nani packed me chutney sandwiches before every train trip."', '"Once I traded my whole lunch for a cricket card. Worth it."', '"Dadi fed me by hand until I was nine, and I let her."'] },
} as const

export const SURPRISE = {
  foods: ['a cold paratha wrapped in newspaper', 'a tiny steel katori of kheer', 'a jar of lime pickle with a crooked label', 'a bent spoon your grandfather loved'],
  places: ['the 5:42 local train', 'a rooftop in Jaipur', 'a school bus stuck in monsoon', 'the shade of an old banyan tree'],
  twists: ['Someone nearby is humming the song you grew up with.', 'A child looks over and quietly asks to trade.', 'The smell travels, and strangers begin to smile.', 'Under it, a handwritten line: "Eat first. Worry later."'],
  effects: [
    { id: 'steam', name: 'Rising steam', color: '#FFFFFF', bg: '#F4D9B8' },
    { id: 'petals', name: 'Marigold petals', color: '#E8821E', bg: '#F9E3B0' },
    { id: 'rain', name: 'Monsoon rain', color: '#3F7F7A', bg: '#CFE5E1' },
    { id: 'sparks', name: 'Festival sparks', color: '#F6D66B', bg: '#F0C6A0' },
  ],
}

export type Memory = { id: string; nick: string; text: string; example?: boolean }
export const SAMPLES: Memory[] = [
  { id: 's1', nick: 'Example: Meera', text: 'Mom hid a tiny chocolate under the roti every Friday.', example: true },
  { id: 's2', nick: 'Example: Imran', text: 'We shared one steel spoon between four of us on the school bus.', example: true },
  { id: 's3', nick: 'Example: Kavya', text: 'The smell of curd rice still takes me back to Class 5.', example: true },
]
