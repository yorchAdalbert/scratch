let count = 0;

const countingCard = card => {
    const highCards = [2, 3, 4, 5, 6];
    const lowCards = [10, 'J', 'Q', 'K', 'A'];

    if (highCards.includes(card)) count++
    if (lowCards.includes(card)) count--

    return count > 0 ? `${count} Bet` : `${count} Hold`;
}

console.log(countingCard(10));
console.log(countingCard('J'));
console.log(countingCard('Q'));
console.log(countingCard('K'));
console.log(countingCard('A'));