const Gameboard = (() => {
  let _gameboardArray = ["", "", "", "", "", "", "", "", ""];
  let i = 0;

  const getArrayPosition = (position) => {
    return _gameboardArray[position];
  };

  const getArrayLength = () => {
    return _gameboardArray.length;
  };

  const addPieceIntoArray = (position, symbol) => {
    if (position < getArrayLength() && getArrayPosition(position) === "") {
      i % 2 === 0
        ? _gameboardArray.splice(position, 1, "X")
        : _gameboardArray.splice(position, 1, "O");
      i++;
    }
  };

  const displayArray = () => {
    return _gameboardArray;
  }  

  return { getArrayPosition, getArrayLength, addPieceIntoArray, displayArray };
})();

////////////

const playerFactory = (name, symbol) => {
  const getName = () => {
    return name;
  };
  const getSymbol = () => {
    return symbol;
  };

  return { getName, getSymbol };
};

///////////

const DisplayController = (() => {
  const cells = document.querySelectorAll(".cell");

  const displayIntoGameboard = () => {
    cells.forEach((cell) =>
      cell.addEventListener("click", (event) => {
        let cellClassName = cell.className.slice(-1);
        Gameboard.addPieceIntoArray(cellClassName);
        addPieceToGameboard();
      })
    );
  };

  const addPieceToGameboard = () => {
    for (let i = 0; i < Gameboard.getArrayLength(); i++) {
      if (Gameboard.getArrayPosition(i) !== "") {
        cells[i].textContent = Gameboard.getArrayPosition(i);
      }
    }
  };

  return { cells, addPieceToGameboard, displayIntoGameboard };
})();

//////////

const GameFlow = (() => {
  const player1 = playerFactory("p1", "X");
  const player2 = playerFactory("p2", "O");

  DisplayController.displayIntoGameboard();
})();
