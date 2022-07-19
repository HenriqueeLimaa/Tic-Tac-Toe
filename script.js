const Gameboard = (() => { 
    let _gameboardArray = ["", "", "", "", "", "", "", "", ""];

    const getArrayPosition = (position) => {
        return _gameboardArray[position];
    }

    const getArrayLength = () => {
        return _gameboardArray.length;
    }

    const addPieceIntoArray = (position, symbol) => {
        if(position < getArrayLength()){
            _gameboardArray.splice(position, 1, symbol);
        }
    }

    return {getArrayPosition, getArrayLength, addPieceIntoArray};
})();

////////////

const playerFactory = (name, symbol) => {
    const getName = () => {return name};
    const getSymbol = () => {return symbol};

    return {getName, getSymbol};
}

///////////

const GameFlow = (() => {


})();


//////////

const DisplayController = (() => {

    const _cells = document.querySelectorAll('.cell');

    _cells.forEach(cell => cell.addEventListener('click', (event) => {
        console.log(Gameboard.getArrayLength());
        let cellClassName = cell.className.slice(-1);
        Gameboard.addPieceIntoArray(cellClassName, 'X');
        addPieceToGameboard();
    }))

    const addPieceToGameboard = () => {
        for(let i=0;i<Gameboard.getArrayLength();i++){
            if(Gameboard.getArrayPosition(i) !== ""){
                console.log('aaa')
                _cells[i].textContent = Gameboard.getArrayPosition(i);
            }
        }
    }

    return {addPieceToGameboard};
})();
