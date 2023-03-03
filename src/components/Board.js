//Within React because of one of the tools it uses you
//can import css files within a javascript file, and it 
//will apply those themes to your page if the component is
//displayed/imported...
import '../css/Board.css';
import Note from './Note';

function Board() {
    return (
        <div>
            <div className="div-board">
                <div className="row">
                    <Note title="Class Notes" 
                          body="Always use constructors when extending another class"/>
                    <Note title="My New Address"
                          body="2001 N Lonhill Phoeniz, AX 81234"/>
                    <Note title="React Notes"
                          body="Everything in React is a component"/>
                </div>
            </div>
            <div>
                <button className="btn btn-success add-button">
                    Add
                </button>
            </div>
        </div>
    );
}

export default Board;