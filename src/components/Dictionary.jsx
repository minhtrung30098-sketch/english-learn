import {useState} from "react"

function Dictionary(){

const [word,setWord] = useState("")
const [result,setResult] = useState("")

async function searchWord(){

setResult("Loading...")

try{

const res = await fetch(
`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
)

const data = await res.json()

const meaning =
data[0].meanings[0].definitions[0].definition

const example =
data[0].meanings[0].definitions[0].example

setResult(
{
meaning:meaning,
example:example
}
)

}catch{

setResult("Không tìm thấy từ")

}

}

return(

<section id="dictionary">

<h2>🔎 Tra từ vựng</h2>

<div className="searchBox">

<input
type="text"
placeholder="Nhập từ tiếng Anh..."
value={word}
onChange={(e)=>setWord(e.target.value)}
/>

<button onClick={searchWord}>
Tìm
</button>

</div>

<div id="result">

{typeof result==="string"
? result
:
<div>

<h3>{word}</h3>

<p>
<b>Meaning:</b> {result.meaning}
</p>

<p>
<b>Example:</b> {result.example || "No example"}
</p>

</div>
}

</div>

</section>

)

}

export default Dictionary