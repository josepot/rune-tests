import rune from "./solutions/rune/solution.js"
import rxjsTests from "./solutions/rxjs/solution.js"
import vanilla from "./solutions/vanilla.js"

await rxjsTests()
await vanilla()
await rune()
