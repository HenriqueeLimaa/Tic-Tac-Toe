const Gameboard = (() => {
  let _gameboardArray = ["", "", "", "", "", "", "", "", ""];
  let i = 0;
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const getArrayPosition = (position) => {
    return _gameboardArray[position];
  };

  const getArrayLength = () => {
    return _gameboardArray.length;
  };

  const addPieceIntoArray = (position) => {
    if (
      position < getArrayLength() &&
      getArrayPosition(position) === "" &&
      checkTie() === false &&
      checkVictory() === false
    ) {
      i % 2 === 0
        ? _gameboardArray.splice(position, 1, "X")
        : _gameboardArray.splice(position, 1, "O");
      i++;
    }
  };

  const displayArray = () => {
    return _gameboardArray;
  };

  const allEqual = (arr) => arr.every((val) => val === arr[0] && arr[0] !== "");

  const checkVictory = () => {
    let array = [];
    for (let combination of winningCombinations) {
      array = [
        _gameboardArray[combination[0]],
        _gameboardArray[combination[1]],
        _gameboardArray[combination[2]],
      ];
      if (allEqual(array)) {
        return true;
      }
    }
    return allEqual(array);
  };

  const checkTie = () => {
    let count = 0;
    for (let pos of _gameboardArray) {
      if (pos !== "") {
        count += 1;
      }

      if (count === 9) {
        return true;
      }
    }
    return false;
  };

  return {
    getArrayPosition,
    getArrayLength,
    addPieceIntoArray,
    displayArray,
  };
})();

////////////

const playerFactory = (name) => {

  const getName = () => {
    return name;
  };

  return { getName,  };
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

  const DisplayMatchResult = () => {
    
  }

  return { cells, addPieceToGameboard, displayIntoGameboard };
})();

//////////

const GameFlow = (() => {

  const startButton = document.getElementsByClassName('start-button')[0];
  const playerXinput = document.getElementById('player1');
  const playerOinput = document.getElementById('player2');

  startButton.addEventListener('click', () => {
    if(playerXinput.value !== "" && playerOinput.value !== ""){
      const player1 = playerFactory(playerXinput.value);
      const player2 = playerFactory(playerOinput.value);


    }
  })


  DisplayController.displayIntoGameboard();
})();
