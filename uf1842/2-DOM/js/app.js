/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */

const btn = document.querySelector("#btn-send")
const input = document.querySelector("#message")
const finalMessage = document.querySelector("#last-message")
btn.addEventListener("click", () => {
    let message = input.value
    finalMessage.textContent = message
    input.value = ""
})