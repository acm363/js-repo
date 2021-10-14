package util.cells;
/**
 * @author ATCHEDJI Churchill et GUENNINECHE Amel
 * The cell of the board in  "le jeu de l'oie"
 */
public class Cell {
    protected int position;// the cell's position
   // protected boolean move = true;// true if goose can move and false else
    /**
     * build a new cell
     * @param position the cell position
     */
    public Cell(int position) {
        this.position = position;
    }

    /**
     * @return true iff the goose can move and false otherwise
     */
    public boolean canBeMove(){
         return true;
    }

    /**
     * @return the cell position
     */
    public int getPosition() {
        return this.position;
    }
    /**
     * if there is a bounce, this method moves the player's pawn to the corresponding cell
     *@param de the number of the cell to bounce to if if the cell is goose cell or teleport cell
     *@return the number of bounce
     */
    public int bounce(int de){
        return 0;// en occurence on est arrivé sur une cellule normale donc 0 rebonds
    }

    /**
     * @return provides the string representation of this cell
     */
    public String toString(){
        return " ";
    }
    
    /**
     * @return true iff the cell are in the same position
     */
    public boolean equals(Object o){
        try{
            Cell other = (Cell) o;
            return other.getPosition() == this.getPosition() && other.toString().equals(this.toString());// deux cases peuvent avoir meme position et etre différentes sur différents plateaux
        }
        catch(ClassCastException e){
            return false;
        }
    }
}
