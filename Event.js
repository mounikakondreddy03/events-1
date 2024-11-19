const card = document.querySelector("div")
card.id = "AI"
card.innerHTML = ` <img src="https://uploads-ssl.webflow.com/6077b42e4e8d6b13a8ea682a/640eb1bd2e494865ac01beb0_AI%20in%20Ag.jpg">
<p>Smart City with AI</p>
<button>View More</button>`
card.style.textAlign = "center"
card.style.border = "2px solid black"
card.style.background = "whitesmoke"
card.style.padding = "10px"

const card1 = document.getElementById("card2")
card1.id = "AI"
card1.innerHTML = `<img src="https://gmo-research.com/application/files/7316/6435/9654/Smart_Farming_image_shutterstock_s.jpg">
<p>Smart City with AI</p>
<button>View More</button>`
card1.style.textAlign = "center"
card1.style.border = "2px solid black"
card1.style.background = "whitesmoke"
card1.style.padding = "10px"

const newCard = document.createElement("div")
newCard.id = "IOTCard"
newCard.innerHTML = `<img src="https://electronicsinnovation.com/wp-content/uploads/2019/08/9.jpg" width="100%" height="70%" />
<p>IOT in Agriculture with AI</p>
<button>view More</button>`
newCard.style.width = "300px"
newCard.style.height = "300px"
newCard.style.textAlign = "center"
newCard.style.border = "2px solid black"
newCard.style.background = "whitesmoke"
newCard.style.padding = "10px"

document.body.appendChild(newCard)

const ai = document.createElement("div")
ai.id = "aicard"
ai.innerHTML = `<img src="https://thumbs.dreamstime.com/z/smart-farm-agriculture-concept-artificial-intelligence-ai-robot-use-ugmented-mixed-virtual-reality-deep-machine-learning-digital-172102920.jpg" width="100%" height="70%" />
<p>AI in Framing</p>
<button>View More</button>`
ai.style.width = "300px"
ai.style.height = "300px"
ai.style.textAlign = "center"
ai.style.border = "2px solid black"
ai.style.background = "whitesmoke"
ai.style.padding = "10px"

document.body.append(ai)