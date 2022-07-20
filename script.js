const Gameboard = (() => {
  let _gameboardArray = ["", "", "", "", "", "", "", "", ""];

  const getArrayPosition = (position) => {
    return _gameboardArray[position];
  };

  const getArrayLength = () => {
    return _gameboardArray.length;
  };

  const addPieceIntoArray = (position, symbol) => {
    if (position < getArrayLength()) {
      _gameboardArray.splice(position, 1, symbol);
    }
  };

  return { getArrayPosition, getArrayLength, addPieceIntoArray };
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

  const displayIntoGameboard = (playerSymbol) => {
    cells.forEach((cell) =>
      cell.addEventListener("click", (event) => {
        let cellClassName = cell.className.slice(-1);
        Gameboard.addPieceIntoArray(cellClassName, playerSymbol);
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
  let i = 0;

  const player1 = playerFactory("p1", "X");
  const player2 = playerFactory("p2", "O");

  DisplayController.cells.forEach((cell) =>
    addEventListener("click", () => {
      if (i % 2 === 0) {
        DisplayController.displayIntoGameboard(player1.getSymbol());
      } else {
        DisplayController.displayIntoGameboard(player2.getSymbol());
      }
      i++;
    })
  );
})();
