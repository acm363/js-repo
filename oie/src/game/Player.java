package game;
import java.util.Random;
import util.cells.*;
/**
 * A Player in the "jeu de l'oie" game
 */

public class Player {
    private static Random random = new Random();
    /**current cell of the player */
    protected Cell cell;

    /**name of the player */
    protected String name;
    
    /**
     * @param name the name of this player
     * @param cell the starting cell of this player
     */
    public Player(String name, Cell cell) {
        this.name = name;
        this.cell = cell;
    }

    /**
     * @see Object#toString()
     */
    public String toString() {
        return this.name;
    }

    /**
     * @return the current cell of the player
     */
    public Cell getCell() {
        return this.cell;
    }

 
    /**changes the cell of the player
     * @param newCell the new cell
    */
    public void setCell(Cell newCell){
        this.cell = newCell;
    }

    /**@return random result of 1d6 throw */
    private int oneDieThrow() {
        return Player.random.nextInt(6)+1;
    }
    /**@return random result of 2d6 throw */
    public int twoDieThrow() {
        int result = this.oneDieThrow() + this.oneDieThrow();
        return result;
    }
}// Player
