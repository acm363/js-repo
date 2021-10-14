package util.cells;

public class TeleportingCell extends Cell {
    protected int teleportingPos;
      /**
     * build a teleporting cell
     * @param position the position of cell
     * @param teleportingPos the cell position to reach
     * @see Cell#Cell(int)
     */
    public TeleportingCell(int position,int teleportingPos ) {
        super(position);
        this.teleportingPos = teleportingPos;
    }
    /**
    * @param de the die values
     * @return the number of bounce
     */
    public int bounce(int de){
       return this.teleportingPos - this.position;
    }
      /**
     * @return provides the string representation of this cell
     */
    public String toString(){
        return "(teleport to " +teleportingPos+ " )";
    }
}
