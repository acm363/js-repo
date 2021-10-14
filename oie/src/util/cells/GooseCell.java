package util.cells;

public class GooseCell extends Cell {
    //protected int  dieSValues=0;
    /**
     * build a Goose cell
     * @see Cell#Cell(int)
     * @param position the cell position
     */
    public GooseCell(int position) {
        super(position);
    }
    /**
     * @param dieSValues the die values
     * @return the number of bounce
     */
    public int bounce(int dieSValues){
       return  dieSValues; 
    }

  /**
     * @return provides the string representation of this cell
     */
    public String toString(){
        return "(Goose Cell)";
    }
}


