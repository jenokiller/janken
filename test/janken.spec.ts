import {Janken} from "../src/janken";

describe('じゃんけん', () => {
    let janken: Janken;
    const ROCK = 'rock';
    const SCISSORS = 'scissors';
    const PAPER = 'paper';

    beforeEach(() => {
        janken = new Janken();
    });

    it('じゃんけんができること', () => {
        const spy = spyOn(janken, 'play');
        janken.play(ROCK, SCISSORS);
        expect(spy.calls.count()).toEqual(1)
    });

    it('P1がグー、P2がチョキの時、P1が勝つこと', () => {
        const spy = spyOn(janken, 'play').and.callThrough();
        const jankenResult = janken.play(ROCK, SCISSORS);


        expect(spy.calls.argsFor(0)[0]).toEqual(ROCK);
        expect(spy.calls.argsFor(0)[1]).toEqual(SCISSORS);
        expect(jankenResult).toEqual('p1')
    });

    it('P1がグー、P2がパーの時、P2が勝つこと', () => {
        const spy = spyOn(janken, 'play').and.callThrough();
        const jankenResult = janken.play(ROCK, PAPER);


        expect(spy.calls.argsFor(0)[0]).toEqual(ROCK);
        expect(spy.calls.argsFor(0)[1]).toEqual(PAPER);
        expect(jankenResult).toEqual('p2')
    });

    it('P1が勝っていることが確認できる', () => {
        let p1Result = janken.play(ROCK, SCISSORS);
        expect(p1Result).toEqual('p1');

        p1Result = janken.play(SCISSORS, PAPER);
        expect(p1Result).toEqual('p1');

        p1Result = janken.play(PAPER, ROCK);
        expect(p1Result).toEqual('p1');
    });

    it('P1が負けていることが確認できる', () => {
        let p1Result = janken.play(ROCK, PAPER);
        expect(p1Result).toEqual('p2');

        p1Result = janken.play(SCISSORS, ROCK);
        expect(p1Result).toEqual('p2');

        p1Result = janken.play(PAPER, SCISSORS);
        expect(p1Result).toEqual('p2');
    });

    it('勝負が引き分けになっている', () => {
        let spy = spyOn(janken, 'play').and.callThrough();
        let p1Result = janken.play(ROCK, ROCK);

        expect(spy.calls.argsFor(0)[0]).toEqual(ROCK);
        expect(spy.calls.argsFor(0)[1]).toEqual(ROCK);
        expect(p1Result).toEqual('draw');

        p1Result = janken.play(SCISSORS, SCISSORS);

        expect(spy.calls.argsFor(1)[0]).toEqual(SCISSORS);
        expect(spy.calls.argsFor(1)[1]).toEqual(SCISSORS);
        expect(p1Result).toEqual('draw');

        p1Result = janken.play(PAPER, PAPER);

        expect(spy.calls.argsFor(2)[0]).toEqual(PAPER);
        expect(spy.calls.argsFor(2)[1]).toEqual(PAPER);
        expect(p1Result).toEqual('draw');
    });
});
