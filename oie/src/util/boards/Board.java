package util.boards;
import util.cells.*;
/**
 * @author ATCHEDJI Churchill et GUENNINECHE Amel
 * The board in le "jeu de l'oie"
 */
public abstract class Board {
    protected final int NB_OF_CELLS;// the number of cell on the board
    protected Cell[] theCells;//the board's cells

    /**
     * the constructor of the board
     * @param nbOfCells the number of cells on the board
     */
    public Board(int nbOfCells) {
        this.NB_OF_CELLS = nbOfCells;
        this.theCells = new Cell[NB_OF_CELLS];
        this.initBoard();
    }

    /**
     * initialize a board with the given number of cells
     * and place the specified cells basing on the board's type
     */
    protected abstract void initBoard();

    /**
     * @return the number of cells in the board
     */
    public int getNbOfCells() {
        return this.NB_OF_CELLS;
    }

    /**
     * @param index the index of the specified cell on the board
     * @return the specified cell in arg
     */
    public Cell getCell(int index) {
        return this.theCells[index];
    }


}
