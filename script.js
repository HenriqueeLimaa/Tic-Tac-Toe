const Gameboard = (() => { 
    let _gameboardArray = ['X', "", "O", "", "", "", "", "", ""];

    const getArrayPosition = (position) => {
        return _gameboardArray[position];
    }

    const getArrayLength = () => {
        return _gameboardArray.length;
    }

    return {getArrayPosition, getArrayLength};
})();


const playerFactory = (name, symbol) => {
    const getName = () => {return name};
    const getSymbol = () => {return symbol};

    return {getName, getSymbol};
}


const GameFlow = (() => {


})();


const DisplayController = (() => {

    const _cells = document.querySelectorAll('.cell');

    const addPieceToGameboard = () => {
        for(let i=0;i<Gameboard.getArrayLength();i++){
            if(Gameboard.getArrayPosition(i) !== ""){
                _cells[i].textContent = Gameboard.getArrayPosition(i);
            }
        }
    }

    _cells.forEach(cell => cell.addEventListener('click', (event) => {
        addPieceToGameboard();
    }))



    return {addPieceToGameboard};
})();
