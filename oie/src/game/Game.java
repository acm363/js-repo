package game;
import java.util.*;
import util.boards.*;
import util.cells.*;
/**
 * @author ATCHEDJI Churchill et GUENNINECHE Amel
 * The game "le jeu de l'oie"
 */
public class Game {
    protected List<Player> thePlayers;
    protected Board board;

    /**
     * initialize the game with the given board
     * @param board a board instance to play the "jeu de l'oie" game
     */
    public Game(Board board){
        this.board = board;
        thePlayers = new ArrayList<Player>();
    }

    /**
     * add a player in the players list
     * @param player a player
     */
    public void addPlayer(Player player){
        this.thePlayers.add(player);
    }

    /**
     * @return the game board
     */
    public Board getGameBoard(){
        return this.board;
    }

    /**
     * @return the number of players in the game
     */
    public int getNbOfPlayers(){
        return this.thePlayers.size();
    }
    
    /** 
     * @param p the player
     * @return the current player index 
     * @exception IllegalArgumentException if the param is not a player or is not a player registred into the list of the player
    */
    public int getPlayerIndex(Player p) throws IllegalArgumentException {
        if(thePlayers.contains(p)){
            return this.thePlayers.indexOf(p);
        }
        throw new IllegalArgumentException("The player isn't registred in the players' List");
    }

    /**
     * @param p the current player
     * @return the next player
     * @exception IllegalArgumentException if the param is not a player or is not a player registred into the list of the player
     */
    public Player nextPlayer(Player p) throws IllegalArgumentException {
        int index = this.getPlayerIndex(p);
        if(index == thePlayers.size()-1){
            index = 0;
        }
        else{
            index +=1;
        }
        return thePlayers.get((index));
    }
    /**
     * @param p the current player
     * @return the previous player
     * @exception IllegalArgumentException if the param is not a player or is not a player registred into the list of the player
     */
    public Player previousPlayer(Player p) throws IllegalArgumentException {
        int index = this.getPlayerIndex(p);
        if(index == thePlayers.size()-1){
            index = 0;
        }
        else if(index ==0){
            index = thePlayers.size()-1;
        }
        else{
            index -=1;
        }
        return thePlayers.get((index));
    }
    
    /**
     * @param cell the current player cell
     * @return <code>true</code> if the player reaches the final cell in the good conditions, <code>false</code> otherwise
     */
    public boolean hasWon(Cell cell){
        boolean won;  
        //hasWon(Cell nextCell) : boolean
        if(cell.getPosition()==board.getNbOfCells()-1){
            won = true;
        }
        else{
            won = false;
        }
        return won;
    }
    
    /**
     * move the player on the cell given by the number of dies thrown
     * @param p the current player
     * @param nextPosition the next cell position
     * @return the next cell
     */
    public Cell movePlayer(Player p, int nextPosition){
        int size = board.getNbOfCells()-1;
        if(nextPosition >= board.getNbOfCells()){//Si son lancer de des lui fait  depasser  la derniere case, il revient en arriere du nombre de cases en exces 
            p.setCell(board.getCell(size -(nextPosition-size)));
        }
        else{
            p.setCell(board.getCell(nextPosition));//sinon on place le joueur sur la case d'arrivée correspondante
        }
        return p.getCell();//on récupère cette case                 
    }

    /**
     * apply the effect of the cell reached
     * @param p the current Player
     * @param nextCell the cell reached 
     * @param diesValues the total of dies thrown
     * @return the cell reached after applying the effect of the current cell
     */
    public Cell applyEffect(Player p, Cell nextCell, int diesValues){
        Cell nCell;
        int nextPosition = nextCell.getPosition() + nextCell.bounce(diesValues);//on calcule la position de la case à atteindre si effet il y a
        nCell = this.movePlayer(p, nextPosition);//on place le pion sur la case de position nextPosition 

        if(nextPosition!=nextCell.getPosition()){
            System.out.print(" and jumps to cell "+nextPosition+" "+nCell);
        }
        return nCell;
    }

    /**
     * move the previous Player to the current player position if they are in the same cell wait or trap
     * @param p the current player
     * @param nextCell current player cell
     * @param prevCell current player previous cell
     */
    public void switchPosition(Player p, Cell nextCell, Cell prevCell) {
       /* Iterator<Player> iter = thePlayers.iterator();
        while(iter.hasNext()){
            Player nextP = iter.next();
            if(nextP.getCell().getPosition() == nextCell.getPosition() && !(nextP.getCell().equals(nextCell))){
                this.previousPlayer(p).setCell(prevCell);
                System.out.print("cell is busy, "+this.previousPlayer(p)+" is sent to cell "+this.previousPlayer(p).getCell().getPosition());
            }
        } 
        */
        // si le joueur actuel arrive sur une case piège ou d'attente occupée par un autre joueur(en occurence le précédent) , l'autre joueur est déplacé sur l'ancienne case du joueur actuel
         if(this.previousPlayer(p).getCell().getPosition() == nextCell.getPosition()){
            //if(nextCell.getClass().getName().equals("util.cells.TrapCell") || nextCell.getClass().getName().equals("util.cells.WaitCell")){
                this.previousPlayer(p).setCell(prevCell);
                System.out.print("cell is busy, "+this.previousPlayer(p)+" is sent to cell "+this.previousPlayer(p).getCell().getPosition());
            }
        
    }


    /**
     * runs the game to its end 
     */
    public void play(){
        boolean won = false;
        int diesValues , nextPosition;
        Cell nextCell, prevCell;
        Player currentPlayer = this.thePlayers.get(0);// en occurence on commence par le premier joueur
        Player winner = null;

        while(!won){
            System.out.print(currentPlayer +" is in cell "+ currentPlayer.getCell().getPosition() + ",");
          
            if(!currentPlayer.getCell().canBeMove()){
                System.out.print(" "+currentPlayer + " cannot play");
            }

             else{ 
                //on récupère la case précédente du joueur avant qu'il ne bouge son pion
                prevCell = currentPlayer.getCell();

                diesValues = currentPlayer.twoDieThrow();// on calcule la valeur des dés lancés
                nextPosition = diesValues + currentPlayer.getCell().getPosition();//on arrive sur une case
                
               
                // on déplace d'abord le joueur sur la cellule correspondante
                nextCell = this.movePlayer(currentPlayer, nextPosition);

                System.out.print(" "+currentPlayer+ " throws "+ diesValues + " and reaches cell "+nextCell.getPosition()+" "+nextCell+" ");
                
                // on applique ensuite l'effet de la cellule(rebond ou non)
                nextCell = this.applyEffect(currentPlayer,nextCell,diesValues);
                // si le joueur actuel arrive sur une case piège ou d'attente occupée par un autre joueur(en occurence le précédent) , l'autre joueur est déplacé sur l'ancienne case du joueur actuel
                this.switchPosition(currentPlayer, nextCell, prevCell);

                //hasWon(Cell nextCell) : boolean
                if(nextCell.getPosition()==board.getNbOfCells()-1){
                    won = true;
                    winner = currentPlayer;
                }
            }
            currentPlayer = this.nextPlayer(currentPlayer);
            System.out.println();

            if(won){
                System.out.println( winner +" has won.");
            }
        }
        
    }
}
