package util.cells;

public class WaitCell extends Cell{
    protected int nbTours ;
    /**
     * build a wait cell
     * @param nbTours number of laps to wait
     * @param position the cell position
     * @see Cell#Cell(int)
     */
    public WaitCell(int position,int nbTours) {
        super(position);
        this.nbTours = nbTours;
    }
    /**
     * @return true iff the goose can move and false otherwise
     */
    public boolean canBeMove(){
        if (this.nbTours > 0) {
            nbTours--;
            return false;
        }
        return true;
    }
      /**
     * @return provides the string representation of this cell
     */
    public String toString(){
        return "cannot play";
    }
}

