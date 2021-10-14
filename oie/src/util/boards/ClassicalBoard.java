package util.boards;
import util.cells.*;
/**
 * A classical board in "le jeu de l'oie"
 */
public class ClassicalBoard extends Board {
    /**
     *@param nbOfCells the number of cells in the board
    *@see Board#Board(int)
     */
    public ClassicalBoard(int nbOfCells){
        super(nbOfCells);
    }

    public void initBoard(){
        // Toutes les autres
        for (int i = 1 ; i < NB_OF_CELLS ; i++){
            theCells[i] = new Cell(i);
        }
        //les cellules oies
        for(int i= 9; i < NB_OF_CELLS; i = i + 9){
            theCells[i] = new GooseCell(i);
        }
       // Cellule de départ
        theCells[0]= new DepartCell();

        //la 63 est une cellule finale, elle ne doit pas être considérée comme une cellule oie
        theCells[63] = new Cell(63);
        
        // jump cells
        theCells[58] = new TeleportingCell(58,1);
        theCells[42] = new TeleportingCell(42,30);
        theCells[6] = new TeleportingCell(6,12);
        // wait cell
        theCells[19] = new WaitCell(19,2);
        // trap cells
        //theCells[52] = new TrapCell(52);
        //theCells[31] = new TrapCell(31);

    }
}
