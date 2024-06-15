async function getPuzzle(wordCount) {

    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    const words = await response.json();

    let hiddenSentence = words.puzzle;

    return hiddenSentence;
}
