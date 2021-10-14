package util.cells;

public class TrapCell extends Cell {
    /**
     * build a trap cell
     * @see Cell#Cell(int)
     * @param position the position of the trap cell
     */
    public TrapCell(int position) {
        super(position);
    }
    /**
     * @see Cell#canBeMove()
     */
    public boolean canBeMove(){
        return false;
    }
      /**
     * @return provides the string representation of this cell
     */
    public String toString(){
        return "(trap) ";
    }
}
