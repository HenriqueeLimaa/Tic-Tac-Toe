const Gameboard = (() => { 
    let gameboard = [];

    const addPieceIntoArray = (symbol, position) => {
        gameboard[position].push(symbol);
    }

    return {addPieceIntoArray};
})();

const playerFactory = (name, symbol) => {
    const getName = () => {return name};
    const getSymbol = () => {return symbol};

    return {getName, getSymbol};
}

const GameFlow = (() => {
    const gameboardObj = Gameboard();

    const addPieceToGameBoard = (position) => {
        const gameboardReference = document.getElementsByClassName('gameboard');

    }

    return {};
})();