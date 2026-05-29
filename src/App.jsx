import { useState } from 'react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const WEEK_START = 'Jun 2, 2026'
const TODAY = '2026-06-02'

const CAL_EVENTS = {
  '2026-06-02': [{ title: 'Cancel Sofitel', time: '7:30–8:30am', who: 'kevin' }],
  '2026-06-03': [{ title: 'Cancel Sofitel', time: '7:30–8:30am', who: 'kevin' }],
  '2026-06-04': [{ title: 'Cancel Sofitel', time: '7:30–8:30am', who: 'kevin' }],
  '2026-06-05': [],
  '2026-06-06': [],
  '2026-06-07': [],
  '2026-06-08': [],
}

const MEALS = {
  '2026-06-02': {
    name: 'Spinach & Beef Stew with Rice',
    arabic: 'Shabanekh — سبانخ باللحمة والأرز',
    cal: 400,
    diff: 'Medium · 1 hr',
    source: 'food.com (your saved recipe)',
    url: 'https://www.food.com/recipe/linas-awesome-lebanese-spinach-beef-rice-419495',
    video: null,
    tiktok: 'https://www.tiktok.com/@simplylebanese/video/7283522660594748718',
    helperNote: '👋 Helper tip: Use frozen chopped spinach — squeeze out ALL the water before adding. Don\'t add too much water, just enough to cover the spinach. The lemon squeeze at the end is very important — don\'t skip it!',
    ingredients: [
      { section: 'Main' },
      'Olive oil',
      '1 medium onion, diced',
      '500g (1 lb) ground beef',
      '3 × 280g packs frozen chopped spinach, thawed & well-drained',
      '3 garlic cloves, finely diced',
      '1 bunch fresh cilantro, chopped',
      'Water or chicken stock (just enough to cover spinach)',
      'Juice of 1 lemon (to serve)',
      'Cooked rice (to serve)',
      { section: 'Spices' },
      '1½ tsp allspice',
      '1 tsp paprika',
      '½ tsp ground cinnamon',
      '1 tsp chilli flakes',
      'Salt to taste',
    ],
    steps: [
      'Heat olive oil in a large pot over medium heat. Add onion and sauté until soft, about 5 minutes.',
      'Add ground beef, breaking it up. Cook until browned. Add allspice, paprika, cinnamon, chilli flakes, and salt. Stir well.',
      'Add the drained spinach and stir through the meat for 2–3 minutes.',
      'Pour in just enough water or stock to cover the spinach. Bring to a boil, then reduce to medium-low. Cover and simmer 30 minutes.',
      'Meanwhile in a small pan, heat olive oil and sauté garlic and cilantro together for 2 minutes until fragrant.',
      'Add the garlic-cilantro mixture to the spinach pot. Stir, cover, and simmer a further 15 minutes.',
      'Serve over rice with a generous squeeze of lemon juice on top.',
    ],
  },

  '2026-06-03': {
    name: 'BBQ Grill Night + Greek Olive Pasta Salad',
    arabic: null,
    cal: 650,
    diff: 'Easy · 45 min',
    source: 'halfbakedharvest.com (your saved recipe)',
    url: 'https://www.halfbakedharvest.com/greek-olive-pasta-salad/',
    video: null,
    tiktok: 'https://www.tiktok.com/@halfbakedharvest/video/7099127687091965230',
    helperNote: '👋 Helper tip: Cook the pasta first and let it cool slightly. Pour the hot olive oil over the shallots — this softens them and brings out their sweetness. The salad can be served warm or cold!',
    ingredients: [
      { section: 'Greek Dressing' },
      '¼ cup extra virgin olive oil',
      '3 tbsp lemon juice',
      '3 tbsp red wine vinegar',
      '2 tbsp tahini or mayo',
      '2 tsp Dijon mustard',
      '2 tsp honey',
      'Salt and black pepper',
      { section: 'Pasta Salad' },
      '450g (1 lb) short pasta (penne or fusilli)',
      '2 shallots, thinly sliced',
      '½ cup mixed fresh herbs (basil, oregano, dill)',
      '2 tbsp pine nuts',
      'Pinch of chilli flakes',
      '¼ cup extra virgin olive oil (for pouring hot)',
      '¾ cup mixed Greek olives, pitted',
      '2 bell peppers, chopped',
      '1 cup chopped cucumber',
      '1 cup cherry tomatoes, halved',
      '1 cup canned chickpeas, drained',
      '¼ cup sliced pepperoncini (optional)',
      '225g (8 oz) feta cheese, crumbled',
      { section: 'Grill' },
      'Full chicken, spatchcocked or jointed',
      'Sausages',
      'Vegetables of choice for grilling',
    ],
    steps: [
      'Make the dressing: whisk all dressing ingredients in a jar until smooth. Taste and season. Set aside.',
      'In a large bowl, place sliced shallots, pine nuts, herbs, and chilli flakes.',
      'Heat ¼ cup olive oil in a small pan until it just sizzles, then pour directly over the shallots in the bowl.',
      'Boil salted water and cook pasta to al dente per packet instructions. Drain well.',
      'Add hot pasta to the shallot bowl. Toss so pasta absorbs the flavoured oil.',
      'Add olives, bell peppers, cucumber, cherry tomatoes, chickpeas, and pepperoncini. Pour over dressing and toss well.',
      'Top with crumbled feta. Serve warm or at room temperature alongside the grilled meats.',
    ],
  },

  '2026-06-04': 'leftovers',

  '2026-06-05': {
    name: 'Stir Fry Noodles with Chicken',
    arabic: null,
    cal: 336,
    diff: 'Easy · 25 min',
    source: 'dinneratthezoo.com (your saved recipe)',
    url: 'https://www.dinneratthezoo.com/stir-fry-noodles/#recipe',
    video: null,
    tiktok: null,
    helperNote: '👋 Helper tip: Have everything cut and ready before you start — this cooks very fast on high heat. Don\'t overcrowd the pan or the chicken will steam instead of turning golden.',
    ingredients: [
      '1 tbsp vegetable oil',
      '340g (¾ lb) boneless chicken breast, thinly sliced',
      '280g (10 oz) fresh egg noodles, pre-cooked',
      '½ cup carrots, shredded or julienned',
      '2 cups bok choy, chopped',
      '½ cup red bell pepper, thinly sliced',
      '1 tsp garlic, minced',
      '½ tsp ginger, minced',
      '¼ cup chicken broth',
      '2 tbsp hoisin sauce',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '2 tsp cornstarch',
      '¼ cup spring onion tops, sliced',
      'Salt and pepper to taste',
    ],
    steps: [
      'Heat vegetable oil in a large pan or wok over medium-high heat.',
      'Season chicken with salt and pepper. Cook 3–4 minutes per side until golden. Remove and set aside.',
      'In the same pan, add carrots, bok choy, and red bell pepper. Cook 4–5 minutes until just softened.',
      'Add garlic and ginger, cook 30 seconds until fragrant.',
      'Add the noodles and cooked chicken back to the pan. Toss everything together.',
      'In a small bowl whisk together chicken broth, hoisin sauce, soy sauce, sesame oil, and cornstarch.',
      'Pour sauce into the pan. Simmer 1 minute until it thickens and coats everything.',
      'Sprinkle spring onions on top and serve immediately.',
    ],
  },

  '2026-06-06': null,
  '2026-06-07': null,
  '2026-06-08': null,
}

const DAYS = [
  { date: '2026-06-02', label: 'Mon', display: '2 Jun' },
  { date: '2026-06-03', label: 'Tue', display: '3 Jun' },
  { date: '2026-06-04', label: 'Wed', display: '4 Jun', leftovers: true },
  { date: '2026-06-05', label: 'Thu', display: '5 Jun' },
  { date: '2026-06-06', label: 'Fri', display: '6 Jun', off: true },
  { date: '2026-06-07', label: 'Sat', display: '7 Jun', off: true },
  { date: '2026-06-08', label: 'Sun', display: '8 Jun', off: true },
]

const SHOP_ITEMS = {
  'Fresh produce': [
    { name: 'Lemons', qty: '3–4', note: 'for Shabanekh & pasta salad' },
    { name: 'Cherry tomatoes', qty: '1 punnet', note: 'for pasta salad' },
    { name: 'Bell peppers', qty: '3 (mixed colours)', note: '2 for pasta salad, 1 for noodles' },
    { name: 'Bok choy', qty: '1 head', note: 'for stir fry noodles' },
    { name: 'Spring onions', qty: '1 bunch', note: 'for stir fry noodles' },
    { name: 'Shallots', qty: '3–4', note: 'for pasta salad' },
    { name: 'Mixed fresh herbs (basil, oregano, dill)', qty: 'small bunch each', note: 'for pasta salad' },
    { name: 'Cucumber', qty: '1', note: 'for pasta salad' },
    { name: 'Fresh cilantro', qty: '1 bunch', note: 'for Shabanekh' },
    { name: 'Zak fruit', qty: 'as needed', note: '' },
    { name: 'Onions', qty: '1 bag', note: '' },
    { name: 'Garlic', qty: '1 bulb', note: '' },
  ],
  'Meat & deli': [
    { name: 'Ground beef (minced beef)', qty: '500g', note: 'for Shabanekh' },
    { name: 'Full chicken', qty: '1 whole', note: 'for Tuesday grill' },
    { name: 'Sausages', qty: '1 pack', note: 'for Tuesday grill' },
    { name: 'Meat cold cuts', qty: 'as needed', note: '' },
    { name: 'Feta cheese', qty: '225g block', note: 'for pasta salad' },
    { name: 'Cheese slices', qty: '1 pack', note: '' },
    { name: 'Greek yogurt', qty: '1 tub', note: 'for serving' },
    { name: 'Labneh', qty: '1 tub', note: '' },
  ],
  'Pantry': [
    { name: 'Canned chickpeas', qty: '1 × 400g tin', note: 'for pasta salad' },
    { name: 'Sliced pepperoncini', qty: '1 small jar (optional)', note: 'for pasta salad' },
    { name: 'Pine nuts', qty: 'small bag', note: 'for pasta salad' },
    { name: 'Hoisin sauce', qty: '1 bottle', note: 'for stir fry noodles' },
    { name: 'Red wine vinegar', qty: '1 bottle', note: 'for pasta salad dressing' },
    { name: 'Fresh egg noodles', qty: '280g', note: 'for stir fry — pre-cooked kind' },
    { name: 'Allspice (ground)', qty: '1 jar', note: 'for Shabanekh' },
  ],
}

const AT_HOME = [
  'Frozen chopped spinach', 'Chicken breast', 'Ground cinnamon',
  'Short pasta', 'Mixed Greek olives', 'Cornstarch',
  'Olive oil', 'Garlic', 'Onion', 'Butter', 'Eggs', 'Rice', 'Chicken stock',
  'Soy sauce', 'Sesame oil', 'Honey', 'Dijon mustard', 'Tahini',
  'Balsamic vinegar', 'Vinegar', 'Chilli flakes', 'Paprika', 'Cumin',
  'Salt & pepper', 'Assorted spices', 'Carrots', 'Tomato', 'Khobez/pita',
  'Peanut butter', 'Chilli crisp', 'Ginger paste', 'Mayo', 'Ketchup',
  'Worcestershire sauce', 'Sugar', 'Flour', 'Oats', 'Bulgur', 'Rice noodles',
  'Olives in brine', 'Strained tomatoes', 'Pomegranate molasses',
  'Coconut milk', 'Mozzarella balls', 'Frozen shrimp', 'Tamarind paste',
]

// ─── STYLES ──────────────────────────────────────────────────────────────────

const S = {
  app: { maxWidth: 430, margin: '0 auto', minHeight: '100vh', paddingBottom: 48, background: '#FAFAF8', fontFamily: "'DM Sans', sans-serif" },
  nav: { position: 'sticky', top: 0, zIndex: 100, background: '#fff', borderBottom: '1px solid #E8E5DF', padding: '0.85rem 1.1rem 0' },
  navTop: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.7rem' },
  navDate: { fontFamily: "'DM Serif Display', serif", fontSize: '1.15rem', color: '#1C1C1A' },
  navSub: { fontSize: '0.72rem', color: '#6B6860', marginTop: 1 },
  weekBadge: { fontSize: '0.7rem', background: '#E1F5EE', color: '#0F6E56', padding: '3px 10px', borderRadius: 20, fontWeight: 500, whiteSpace: 'nowrap' },
  tabs: { display: 'flex' },
  tab: (active) => ({ flex: 1, textAlign: 'center', padding: '0.5rem 0', fontSize: '0.83rem', fontWeight: 500, color: active ? '#1C1C1A' : '#6B6860', border: 'none', background: 'none', cursor: 'pointer', borderBottom: active ? '2.5px solid #1C1C1A' : '2.5px solid transparent', fontFamily: 'inherit', transition: 'all 0.18s' }),
  week: { padding: '1rem' },
  dayCard: { background: '#fff', border: '1px solid #E8E5DF', borderRadius: 12, marginBottom: '0.6rem', overflow: 'hidden' },
  dayHeader: { display: 'flex', alignItems: 'center', gap: '0.55rem', padding: '0.7rem 0.9rem', cursor: 'pointer', userSelect: 'none' },
  dot: (type) => {
    const colors = { today: '#1D9E75', cook: '#378ADD', off: '#E8E5DF', leftovers: '#EF9F27' }
    return { width: 7, height: 7, borderRadius: '50%', flexShrink: 0, background: colors[type] || '#E8E5DF' }
  },
  dayName: { fontWeight: 500, fontSize: '0.9rem', minWidth: '2.4rem', color: '#1C1C1A' },
  dayDate: { fontSize: '0.76rem', color: '#6B6860', flex: 1 },
  pill: (type) => {
    const styles = {
      today: { background: '#E1F5EE', color: '#0F6E56' },
      cook: { background: '#E6F1FB', color: '#185FA5' },
      off: { background: '#F0EDE8', color: '#9B9890' },
      leftovers: { background: '#FAEEDA', color: '#854F0B' },
    }
    return { fontSize: '0.68rem', padding: '2px 8px', borderRadius: 20, fontWeight: 500, flexShrink: 0, ...(styles[type] || styles.off) }
  },
  chevron: (open) => ({ color: '#9B9890', fontSize: '0.8rem', transition: 'transform 0.22s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', marginLeft: 2 }),
  dayBody: { borderTop: '1px solid #F0EDE8' },
  daySplit: { display: 'grid', gridTemplateColumns: '1fr 1fr' },
  calCol: { padding: '0.75rem 0.85rem', borderRight: '1px solid #F0EDE8' },
  mealCol: { padding: '0.75rem 0.85rem' },
  colLabel: { fontSize: '0.65rem', letterSpacing: '0.055em', textTransform: 'uppercase', color: '#9B9890', fontWeight: 500, marginBottom: '0.4rem' },
  calEvent: (who) => ({
    marginBottom: '0.4rem', padding: '0.28rem 0.45rem', borderRadius: 5,
    borderLeft: `2.5px solid ${who === 'kevin' ? '#7F77DD' : '#378ADD'}`,
    background: who === 'kevin' ? '#EEEDFE' : '#E6F1FB',
  }),
  calEventTitle: { fontSize: '0.7rem', fontWeight: 500, color: '#1C1C1A', lineHeight: 1.3 },
  calEventTime: { fontSize: '0.63rem', color: '#6B6860' },
  noEvents: { fontSize: '0.7rem', color: '#9B9890', fontStyle: 'italic' },
  nightOff: { padding: '0.9rem', textAlign: 'center' },
  nightOffIcon: { fontSize: '1.3rem', display: 'block', marginBottom: '0.25rem' },
  nightOffText: { fontSize: '0.78rem', color: '#6B6860' },
  leftoversBox: { padding: '0.5rem 0' },
  leftoversText: { fontSize: '0.78rem', color: '#854F0B', fontWeight: 500 },
  leftoversSub: { fontSize: '0.7rem', color: '#6B6860', marginTop: 2 },
  mealName: { fontSize: '0.86rem', fontWeight: 500, lineHeight: 1.35, color: '#1C1C1A', marginBottom: '0.22rem' },
  mealArabic: { fontSize: '0.72rem', color: '#6B6860', marginBottom: '0.28rem', fontStyle: 'italic' },
  mealMeta: { display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.42rem' },
  calBadge: { fontSize: '0.68rem', color: '#3B6D11', fontWeight: 500, background: '#EAF3DE', padding: '2px 6px', borderRadius: 4 },
  diffBadge: { fontSize: '0.68rem', color: '#6B6860' },
  sourceRow: { display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.45rem' },
  sourceLink: { fontSize: '0.69rem', color: '#185FA5', textDecoration: 'none' },
  videoChip: { display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: '0.68rem', color: '#E24B4A', textDecoration: 'none', padding: '2px 7px', border: '1px solid #F09595', borderRadius: 20 },
  tiktokChip: { display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: '0.68rem', color: '#333', textDecoration: 'none', padding: '2px 7px', border: '1px solid #ccc', borderRadius: 20 },
  expandBtn: { fontSize: '0.7rem', color: '#185FA5', background: 'none', border: '1px solid #378ADD', borderRadius: 20, padding: '3px 10px', cursor: 'pointer', marginTop: 2, fontFamily: 'inherit' },
  helperNote: { fontSize: '0.68rem', background: '#FAEEDA', color: '#854F0B', padding: '5px 8px', borderRadius: 6, marginTop: '0.5rem', lineHeight: 1.45 },
  recipeSection: { marginTop: '0.45rem' },
  recipeLabel: { fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.055em', color: '#9B9890', fontWeight: 500, marginBottom: '0.28rem' },
  ingList: { listStyle: 'none', padding: 0 },
  ingItem: { fontSize: '0.72rem', color: '#1C1C1A', padding: '3px 0', borderBottom: '1px solid #F0EDE8', lineHeight: 1.4 },
  ingSection: { fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F6E56', fontWeight: 500, padding: '5px 0 2px', borderBottom: 'none' },
  stepsList: { listStyle: 'none', padding: 0, counterReset: 'step' },
  stepItem: { fontSize: '0.72rem', color: '#1C1C1A', padding: '4px 0 4px 1.5rem', position: 'relative', lineHeight: 1.45, borderBottom: '1px solid #F0EDE8' },
  stepNum: { position: 'absolute', left: 0, top: 5, fontSize: '0.62rem', fontWeight: 500, color: '#185FA5', background: '#E6F1FB', width: 15, height: 15, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: '15px', textAlign: 'center' },
  shop: { padding: '1rem' },
  shopHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' },
  shopTitle: { fontFamily: "'DM Serif Display', serif", fontSize: '1.1rem', color: '#1C1C1A' },
  shopCount: { fontSize: '0.73rem', color: '#6B6860' },
  progWrap: { marginBottom: '1rem' },
  progBg: { height: 5, background: '#E8E5DF', borderRadius: 4, overflow: 'hidden' },
  progFill: (pct) => ({ height: '100%', width: `${pct}%`, background: '#639922', borderRadius: 4, transition: 'width 0.35s ease' }),
  progLabel: { fontSize: '0.7rem', color: '#6B6860', marginTop: 4 },
  shopGroup: { marginBottom: '1rem' },
  groupTitleWrap: { display: 'flex', alignItems: 'center', gap: 6, marginBottom: '0.35rem' },
  groupTitle: { fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9B9890', fontWeight: 500, whiteSpace: 'nowrap' },
  groupLine: { flex: 1, height: 1, background: '#E8E5DF' },
  shopItem: (checked) => ({ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', padding: '0.42rem 0', borderBottom: '1px solid #F0EDE8', cursor: 'pointer', opacity: checked ? 0.6 : 1 }),
  shopCheck: (checked) => ({ width: 18, height: 18, border: checked ? 'none' : '1.5px solid #E8E5DF', borderRadius: 4, flexShrink: 0, marginTop: 1, background: checked ? '#639922' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#fff', transition: 'all 0.12s' }),
  shopName: (checked) => ({ fontSize: '0.83rem', lineHeight: 1.4, flex: 1, color: '#1C1C1A', textDecoration: checked ? 'line-through' : 'none' }),
  shopQty: { fontSize: '0.72rem', color: '#6B6860', whiteSpace: 'nowrap', paddingTop: 1 },
  shopNote: { fontSize: '0.68rem', color: '#9B9890' },
  atHome: { marginTop: '1.4rem' },
  atHomeTitle: { fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#9B9890', fontWeight: 500, marginBottom: '0.45rem' },
  atHomeGrid: { display: 'flex', flexWrap: 'wrap', gap: 4 },
  homeTag: { fontSize: '0.7rem', background: '#F0EDE8', color: '#6B6860', padding: '2px 8px', borderRadius: 20 },
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function CalEvents({ date }) {
  const events = CAL_EVENTS[date] || []
  if (!events.length) return <p style={S.noEvents}>No events</p>
  return events.map((e, i) => (
    <div key={i} style={S.calEvent(e.who)}>
      <div style={S.calEventTitle}>{e.title}</div>
      <div style={S.calEventTime}>{e.time} · {e.who === 'kevin' ? '💜 Kevin' : '💙 Tamara'}</div>
    </div>
  ))
}

function RecipePanel({ meal }) {
  const [open, setOpen] = useState(false)
  let stepCount = 0

  return (
    <>
      <div style={S.mealMeta}>
        <span style={S.calBadge}>~{meal.cal} kcal</span>
        <span style={S.diffBadge}>{meal.diff}</span>
      </div>
      <div style={S.sourceRow}>
        {meal.url
          ? <a href={meal.url} target="_blank" rel="noreferrer" style={S.sourceLink}>↗ {meal.source}</a>
          : <span style={{ ...S.sourceLink, color: '#9B9890' }}>{meal.source}</span>}
      </div>
      {(meal.video || meal.tiktok) && (
        <div style={{ ...S.sourceRow, marginBottom: '0.45rem' }}>
          {meal.video && <a href={meal.video} target="_blank" rel="noreferrer" style={S.videoChip}>▶ YouTube</a>}
          {meal.tiktok && <a href={meal.tiktok} target="_blank" rel="noreferrer" style={S.tiktokChip}>♪ TikTok</a>}
        </div>
      )}
      <button style={S.expandBtn} onClick={() => setOpen(o => !o)}>
        {open ? 'Hide ingredients & steps' : 'Show ingredients & steps'}
      </button>
      {open && (
        <div>
          {meal.helperNote && <div style={S.helperNote}>{meal.helperNote}</div>}
          <div style={S.recipeSection}>
            <div style={S.recipeLabel}>Ingredients</div>
            <ul style={S.ingList}>
              {meal.ingredients.map((ing, i) =>
                typeof ing === 'object' && ing.section
                  ? <li key={i} style={S.ingSection}>{ing.section}</li>
                  : <li key={i} style={S.ingItem}>{ing}</li>
              )}
            </ul>
          </div>
          <div style={S.recipeSection}>
            <div style={S.recipeLabel}>Steps</div>
            <ol style={S.stepsList}>
              {meal.steps.map((step, i) => (
                <li key={i} style={S.stepItem}>
                  <span style={S.stepNum}>{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  )
}

function MealCol({ date, day }) {
  const meal = MEALS[date]
  const isOff = day.off
  const isLeftovers = day.leftovers || meal === 'leftovers'

  if (isOff) return (
    <div style={S.nightOff}>
      <span style={S.nightOffIcon}>🌙</span>
      <span style={S.nightOffText}>Night off — enjoy!</span>
    </div>
  )
  if (isLeftovers) return (
    <div style={S.leftoversBox}>
      <div style={{ fontSize: '1.1rem', marginBottom: 4 }}>🥡</div>
      <div style={S.leftoversText}>Leftovers night</div>
      <div style={S.leftoversSub}>Spinach stew & grill from Mon/Tue</div>
    </div>
  )
  if (!meal) return <p style={S.noEvents}>Nothing planned</p>

  return (
    <>
      <div style={S.mealName}>{meal.name}</div>
      {meal.arabic && <div style={S.mealArabic}>{meal.arabic}</div>}
      <RecipePanel meal={meal} />
    </>
  )
}

function DayCard({ day }) {
  const isToday = day.date === TODAY
  const meal = MEALS[day.date]
  const isOff = day.off
  const isLeftovers = day.leftovers || meal === 'leftovers'
  const [open, setOpen] = useState(isToday)

  const dotType = isToday ? 'today' : isOff ? 'off' : isLeftovers ? 'leftovers' : 'cook'
  const pillType = isToday ? 'today' : isOff ? 'off' : isLeftovers ? 'leftovers' : 'cook'
  const pillText = isToday ? 'Today' : isOff ? 'Night off 🥂' : isLeftovers ? 'Leftovers' : 'Cooking'

  return (
    <div style={S.dayCard}>
      <div style={S.dayHeader} onClick={() => setOpen(o => !o)}>
        <div style={S.dot(dotType)} />
        <span style={S.dayName}>{day.label}</span>
        <span style={S.dayDate}>{day.display}</span>
        <span style={S.pill(pillType)}>{pillText}</span>
        <span style={S.chevron(open)}>▾</span>
      </div>
      {open && (
        <div style={S.dayBody}>
          <div style={S.daySplit}>
            <div style={S.calCol}>
              <div style={S.colLabel}>Calendar</div>
              <CalEvents date={day.date} />
            </div>
            <div style={S.mealCol}>
              <div style={S.colLabel}>Dinner</div>
              <MealCol date={day.date} day={day} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function WeekView() {
  return (
    <div style={S.week}>
      {DAYS.map(d => <DayCard key={d.date} day={d} />)}
    </div>
  )
}

function ShopView() {
  const allKeys = Object.entries(SHOP_ITEMS).flatMap(([grp, items]) =>
    items.map((_, i) => `${grp}::${i}`)
  )
  const [checked, setChecked] = useState(new Set())

  const toggle = (key) => {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  const total = allKeys.length
  const done = checked.size
  const pct = total ? Math.round(done / total * 100) : 0

  return (
    <div style={S.shop}>
      <div style={S.shopHeader}>
        <div style={S.shopTitle}>Shopping list</div>
        <span style={S.shopCount}>{done}/{total} got</span>
      </div>
      <div style={S.progWrap}>
        <div style={S.progBg}><div style={S.progFill(pct)} /></div>
        <div style={S.progLabel}>{pct}% picked up</div>
      </div>
      {Object.entries(SHOP_ITEMS).map(([grp, items]) => (
        <div key={grp} style={S.shopGroup}>
          <div style={S.groupTitleWrap}>
            <span style={S.groupTitle}>{grp}</span>
            <div style={S.groupLine} />
          </div>
          {items.map((item, i) => {
            const key = `${grp}::${i}`
            const isChecked = checked.has(key)
            return (
              <div key={i} style={S.shopItem(isChecked)} onClick={() => toggle(key)}>
                <div style={S.shopCheck(isChecked)}>{isChecked ? '✓' : ''}</div>
                <span style={S.shopName(isChecked)}>
                  {item.name}
                  {item.note ? <><br /><span style={S.shopNote}>{item.note}</span></> : null}
                </span>
                <span style={S.shopQty}>{item.qty}</span>
              </div>
            )
          })}
        </div>
      ))}
      <div style={S.atHome}>
        <div style={S.atHomeTitle}>Already at home ✓</div>
        <div style={S.atHomeGrid}>
          {AT_HOME.map(h => <span key={h} style={S.homeTag}>{h}</span>)}
        </div>
      </div>
    </div>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [tab, setTab] = useState('week')

  return (
    <div style={S.app}>
      <nav style={S.nav}>
        <div style={S.navTop}>
          <div>
            <div style={S.navDate}>Week of {WEEK_START}</div>
            <div style={S.navSub}>Dubai · 3 dinners this week</div>
          </div>
          <span style={S.weekBadge}>🍽 Dinner Plan</span>
        </div>
        <div style={S.tabs}>
          <button style={S.tab(tab === 'week')} onClick={() => setTab('week')}>This week</button>
          <button style={S.tab(tab === 'shop')} onClick={() => setTab('shop')}>Shopping list</button>
        </div>
      </nav>
      {tab === 'week' ? <WeekView /> : <ShopView />}
    </div>
  )
}
