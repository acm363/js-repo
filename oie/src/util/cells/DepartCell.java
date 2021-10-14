package util.cells;

public class DepartCell extends Cell {
    /**
     * build the initial cell of the board at position 0
     */
    public DepartCell(){
        super(0);   
    }
    /**
     * @see Cell#canBeMove()
     */
    public boolean canBeMove(){
        return true;
    }
    /**
     *@return the number of bounce
     */
    public int bounce(){
        return 0;
    }
      /**
     * @return provides the string representation of this cell
     */
    public String toString(){
        return "(Depart Cell)";
    }
}

