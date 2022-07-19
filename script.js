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

    const cells = document.querySelectorAll('.cell');

    const addPieceToGameBoard = () => {
        for(let i=0;i<Gameboard.getArrayLength();i++){
            if(Gameboard.getArrayPosition(i) !== null){
                console.log('FOI');
                cells[i].textContent = Gameboard.getArrayPosition(i);
            }
        }
    }

    return {addPieceToGameBoard};
})();


DisplayController.addPieceToGameBoard();