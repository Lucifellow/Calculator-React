//Equals button component
class Equals extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <button
          className="btn btn-dark norm-btn "
          id="equals"
          onClick={this.props.handleEqual}
        >
          =
        </button>
      );
    }
  }
  
  //Decimal button component
  class DecimalFunction extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <button
          className="btn btn-dark norm-btn"
          id="decimal"
          onClick={this.props.handleDecimal}
        >
          .
        </button>
      );
    }
  }
  
  //AC button component
  class ClearFunction extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <button
          className="btn btn-danger red-btn norm-btn"
          id="clear"
          onClick={this.props.handleClear}
        >
          AC
        </button>
      );
    }
  }
  
  //Display button component
  class Display extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div id="display-container">
          <p id="display">{this.props.display}</p>
        </div>
      );
    }
  }
  
  //Main component to display all child components and itself
  class MainComponent extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        firstNum: 0, // operands1
        secondNum: 0, // operand 2
  
        operator: "",
        answer: 0, //displayed after calculations done
        display: "0", //shows what u are doing on screen
        isNegative: false, //checks for negative nums
      };
  
      //binding this to all functions of this class
      this.handleZero = this.handleZero.bind(this);
      this.handleOne = this.handleOne.bind(this);
      this.handleTwo = this.handleTwo.bind(this);
      this.handleThree = this.handleThree.bind(this);
      this.handleFour = this.handleFour.bind(this);
      this.handleFive = this.handleFive.bind(this);
      this.handleSix = this.handleSix.bind(this);
      this.handleSeven = this.handleSeven.bind(this);
      this.handleEight = this.handleEight.bind(this);
      this.handleNine = this.handleNine.bind(this);
      this.handleKey = this.handleKey.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleSubtract = this.handleSubtract.bind(this);
      this.handleMultiply = this.handleMultiply.bind(this);
      this.handleDivide = this.handleDivide.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleEqual = this.handleEqual.bind(this);
      this.handleDecimal = this.handleDecimal.bind(this);
    }
  
    //zero button click handler
    handleZero() {
      //only zero after 1 -9 digits no zero in front yes
      //negative nums
      //cant add 2 operators
      if (/^[-]?[1-9][0-9]*$/.test(this.state.display)) {
        this.setState({
          display: this.state.display + "0",
        });
      } else if (/^[-]?[0-9]*[.]$/.test(this.state.display)) {
        //for decimals
        this.setState({
          display: this.state.display + "0",
        });
      }
    }
    //one button click handler
    handleOne() {
      //only display nums no operators
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "1",
        });
      } else {
        //if current display is 0 dont concate 1 to it
        this.setState({
          display: "1",
        });
      }
    }
  
    handleTwo() {
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "2",
        });
      } else {
        this.setState({
          display: "2",
        });
      }
    }
  
    handleThree() {
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "3",
        });
      } else {
        this.setState({
          display: "3",
        });
      }
    }
  
    handleFour() {
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "4",
        });
      } else {
        this.setState({
          display: "4",
        });
      }
    }
  
    handleFive() {
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "5",
        });
      } else {
        this.setState({
          display: "5",
        });
      }
  
      if (this.state.display !== "0" && this.state.isNegative) {
        this.setState({
          display: "-5",
        });
      }
    }
  
    handleSix() {
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "6",
        });
      } else {
        this.setState({
          display: "6",
        });
      }
    }
  
    handleSeven() {
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "7",
        });
      } else {
        this.setState({
          display: "7",
        });
      }
    }
  
    handleEight() {
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "8",
        });
      } else {
        this.setState({
          display: "8",
        });
      }
    }
  
    handleNine() {
      if (this.state.display !== "0" && parseFloat(this.state.display)) {
        this.setState({
          display: this.state.display + "9",
        });
      } else {
        this.setState({
          display: "9",
        });
      }
    }
    //handles when + button is pressed or clicked
    handleAdd() {
      //Takes displayed number and sets first number
      if (
        this.state.firstNum == 0 &&
        parseFloat(this.state.display) &&
        this.state.operator == ""
      ) {
        this.setState({
          firstNum: parseFloat(this.state.display),
        });
      }
  
      //Takes a display number and applies to operator and firstnumber to set new first number
      if (this.state.operator != "" && parseFloat(this.state.display)) {
        this.setState(
          {
            secondNum: parseFloat(this.state.display),
          },
          () => {
            switch (this.state.operator) {
              case "+":
                this.setState(
                  {
                    firstNum: this.state.firstNum + this.state.secondNum,
                    display: "+",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "-":
                this.setState(
                  {
                    firstNum: this.state.firstNum - this.state.secondNum,
                    display: "+",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "*":
                this.setState(
                  {
                    firstNum: this.state.firstNum * this.state.secondNum,
                    display: "+",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "/":
                this.setState(
                  {
                    firstNum: this.state.firstNum / this.state.secondNum,
                    display: "+",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              default:
                console.log("no such operator");
            }
          }
        );
      }
  
      //operator not set
      if (this.state.operator == "") {
        this.setState(
          {
            display: "+",
          },
          () => {
            this.setState({
              operator: this.state.display,
            });
          }
        );
      }
  
      //firstNum is set and an operator is set
      if (
        this.state.operator != "" &&
        this.state.firstNum != 0 &&
        this.isDisplayAnOperator()
      ) {
        this.setState({
          display: "+",
          operator: "+",
          isNegative: false,
        });
      }
    }
    //helper
    isDisplayAnOperator() {
      return (
        this.state.display == "+" ||
        this.state.display == "-" ||
        this.state.display == "*" ||
        this.state.display == "/"
      );
    }
  
    //handles - button pressed or clicked
    handleSubtract() {
      if (
        this.state.firstNum == 0 &&
        parseFloat(this.state.display) &&
        this.state.operator == ""
      ) {
        this.setState({
          firstNum: parseFloat(this.state.display),
        });
      }
      if (this.state.operator != "" && parseFloat(this.state.display)) {
        this.setState(
          {
            secondNum: parseFloat(this.state.display),
          },
          () => {
            switch (this.state.operator) {
              case "+":
                this.setState(
                  {
                    firstNum: this.state.firstNum + this.state.secondNum,
                    display: "-",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "-":
                this.setState(
                  {
                    firstNum: this.state.firstNum - this.state.secondNum,
                    display: "-",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "*":
                this.setState(
                  {
                    firstNum: this.state.firstNum * this.state.secondNum,
                    display: "-",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "/":
                this.setState(
                  {
                    firstNum: this.state.firstNum / this.state.secondNum,
                    display: "-",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              default:
                console.log("no such operator");
            }
          }
        );
      }
  
      if (this.state.operator == "") {
        this.setState(
          {
            display: "-",
          },
          () => {
            this.setState({
              operator: this.state.display,
            });
          }
        );
      }
  
      if (
        this.state.operator != "" &&
        this.state.firstNum != 0 &&
        this.isDisplayAnOperator()
      ) {
        //a bool state?
        this.setState({
          display: "-",
          isNegative: true,
        });
      }
    }
  
    //handles * button clicked
    handleMultiply() {
      if (
        this.state.firstNum == 0 &&
        parseFloat(this.state.display) &&
        this.state.operator == ""
      ) {
        this.setState({
          firstNum: parseFloat(this.state.display),
        });
      }
  
      if (this.state.operator != "" && parseFloat(this.state.display)) {
        this.setState(
          {
            secondNum: parseFloat(this.state.display),
          },
          () => {
            switch (this.state.operator) {
              case "+":
                this.setState(
                  {
                    firstNum: this.state.firstNum + this.state.secondNum,
                    display: "*",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "-":
                this.setState(
                  {
                    firstNum: this.state.firstNum - this.state.secondNum,
                    display: "*",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "*":
                this.setState(
                  {
                    firstNum: this.state.firstNum * this.state.secondNum,
                    display: "*",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "/":
                this.setState(
                  {
                    firstNum: this.state.firstNum / this.state.secondNum,
                    display: "*",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              default:
                console.log("no such operator");
            }
          }
        );
      }
  
      if (this.state.operator == "") {
        this.setState(
          {
            display: "*",
          },
          () => {
            this.setState({
              operator: this.state.display,
            });
          }
        );
      }
      if (
        this.state.operator != "" &&
        this.state.firstNum != 0 &&
        this.isDisplayAnOperator()
      ) {
        this.setState({
          display: "*",
          operator: "*",
          isNegative: false,
        });
      }
    }
  
    //handles / button click
    handleDivide() {
      if (
        this.state.firstNum == 0 &&
        parseFloat(this.state.display) &&
        this.state.operator == ""
      ) {
        this.setState({
          firstNum: parseFloat(this.state.display),
        });
      }
  
      if (this.state.operator != "" && parseFloat(this.state.display)) {
        this.setState(
          {
            secondNum: parseFloat(this.state.display),
          },
          () => {
            switch (this.state.operator) {
              case "+":
                this.setState(
                  {
                    firstNum: this.state.firstNum + this.state.secondNum,
                    display: "/",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "-":
                this.setState(
                  {
                    firstNum: this.state.firstNum - this.state.secondNum,
                    display: "/",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "*":
                this.setState(
                  {
                    firstNum: this.state.firstNum * this.state.secondNum,
                    display: "/",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              case "/":
                this.setState(
                  {
                    firstNum: this.state.firstNum / this.state.secondNum,
                    display: "/",
                  },
                  () => {
                    this.setState({
                      operator: this.state.display,
                    });
                  }
                );
                break;
              default:
                console.log("no such operator");
            }
          }
        );
      }
  
      if (this.state.operator == "") {
        this.setState(
          {
            display: "/",
          },
          () => {
            this.setState({
              operator: this.state.display,
            });
          }
        );
      }
  
      if (
        this.state.operator != "" &&
        this.state.firstNum != 0 &&
        this.isDisplayAnOperator()
      ) {
        this.setState({
          display: "/",
          operator: "/",
          isNegative: false,
        });
      }
    }
  
    //clears screen AC button clicked handler
    handleClear() {
      this.setState({
        firstNum: 0,
        secondNum: 0,
        operator: [],
        answer: 0,
        display: "0",
      });
    }
  
    //handles decimals
    handleDecimal() {
      if (!/\./.test(this.state.display)) {
        //accepts only 1 decimals
        this.setState({
          display: this.state.display + ".",
        });
      }
    }
  
    //handles = key press or clicked
    handleEqual() {
      this.setState(
        {
          secondNum: parseFloat(this.state.display),
        },
        () => {
          switch (this.state.operator) {
            case "+":
              this.setState(
                {
                  answer: this.state.firstNum + this.state.secondNum,
                },
                () => {
                  this.setState({
                    display: this.state.answer,
                    firstNum: this.state.answer,
                    operator: "",
                  });
                }
              );
              break;
            case "-":
              this.setState(
                {
                  answer: this.state.firstNum - this.state.secondNum,
                },
                () => {
                  this.setState({
                    display: this.state.answer,
                    firstNum: this.state.answer,
                    operator: "",
                    isNegative: false,
                  });
                }
              );
              break;
            case "*":
              this.setState(
                {
                  answer: this.state.firstNum * this.state.secondNum,
                },
                () => {
                  this.setState({
                    display: this.state.answer,
                    firstNum: this.state.answer,
                    operator: "",
                  });
                }
              );
              break;
            case "/":
              this.setState(
                {
                  answer: this.state.firstNum / this.state.secondNum,
                },
                () => {
                  this.setState({
                    display: this.state.answer,
                    firstNum: this.state.answer,
                    operator: "",
                  });
                }
              );
              break;
            default:
              console.log("no such operator");
          }
        }
      );
    }
  
    //handles keyboard events when key is pressed
    handleKey(e) {
      if (e.keyCode == 96 || e.keyCode == 48) {
        this.handleZero();
      } else if (e.keyCode == 97 || e.keyCode == 49) {
        this.handleOne();
      } else if (e.keyCode == 98 || e.keyCode == 50) {
        this.handleTwo();
      } else if (e.keyCode == 99 || e.keyCode == 51) {
        this.handleThree();
      } else if (e.keyCode == 100 || e.keyCode == 52) {
        this.handleFour();
      } else if (e.keyCode == 101 || e.keyCode == 53) {
        this.handleFive();
      } else if (e.keyCode == 102 || e.keyCode == 54) {
        this.handleSix();
      } else if (e.keyCode == 103 || e.keyCode == 55) {
        this.handleSeven();
      } else if (e.keyCode == 104 || e.keyCode == 56) {
        this.handleEight();
      } else if (e.keyCode == 105 || e.keyCode == 57) {
        this.handleNine();
      } else if (e.keyCode == 107) {
        this.handleAdd();
      } else if (e.keyCode == 109) {
        this.handleSubtract();
      } else if (e.keyCode == 106) {
        this.handleMultiply();
      } else if (e.keyCode == 111) {
        this.handleDivide();
      } else if (e.keyCode == 110) {
        this.handleDecimal();
      }
    }
  
    //adds keyboard eventlistener after component is mounted
    componentDidMount() {
      document.addEventListener("keydown", this.handleKey);
    }
  
    //removes keyboard eventlistener after component is unmounted
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKey);
    }
  
    //render method of MainComponent to reder itself and its child components to DOM
    render() {
      return (
        <div id="main">
          <Display display={this.state.display} />
          <div>
            <ClearFunction handleClear={this.handleClear} />
            <button
              className="btn btn-dark norm-btn"
              id="add"
              onClick={this.handleAdd}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="btn btn-dark norm-btn"
              id="nine"
              onClick={this.handleNine}
            >
              9
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="eight"
              onClick={this.handleEight}
            >
              8
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="seven"
              onClick={this.handleSeven}
            >
              7
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="subtract"
              onClick={this.handleSubtract}
            >
              -
            </button>
          </div>
          <div>
            <button
              className="btn btn-dark norm-btn"
              id="six"
              onClick={this.handleSix}
            >
              6
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="five"
              onClick={this.handleFive}
            >
              5
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="four"
              onClick={this.handleFour}
            >
              4
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="multiply"
              onClick={this.handleMultiply}
            >
              *
            </button>
          </div>
          <div>
            <button
              className="btn btn-dark norm-btn"
              id="three"
              onClick={this.handleThree}
            >
              3
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="two"
              onClick={this.handleTwo}
            >
              2
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="one"
              onClick={this.handleOne}
            >
              1
            </button>
            <button
              className="btn btn-dark norm-btn"
              id="divide"
              onClick={this.handleDivide}
            >
              /
            </button>
          </div>
          <div>
            <button
              className="btn btn-dark norm-btn"
              id="zero"
              onClick={this.handleZero}
            >
              0
            </button>
            <DecimalFunction handleDecimal={this.handleDecimal} />
            <Equals handleEqual={this.handleEqual} />
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<MainComponent />, document.getElementById("container"));
  