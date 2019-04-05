export class Janken {
    play(p1Hand: string, p2Hand: string): string {
        if (p1Hand === p2Hand) {
            return 'draw';
        } else if (p1Hand === 'paper' && p2Hand === 'rock'
            || p1Hand === 'rock' && p2Hand === 'scissors'
            || p1Hand === 'scissors' && p2Hand === 'paper') {
            return 'p1';
        } else {
            return 'p2';
        }
    }
}
