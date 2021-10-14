package game;
import java.util.*;
import util.cells.*;
import util.boards.*;

public class GameMain {
    public static void main(String[] args) {
        Game aGame  = new Game(new ClassicalBoard(64));
        String[] namesTab = {"A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"};
         
        try{
            if(Integer.parseInt(args[0])<0 || Integer.parseInt(args[0]) >26){
                throw new IllegalArgumentException("The number of players must be between 1 and 26");
            }
            for(int i = 0; i < Integer.parseInt(args[0]); i++){
                aGame.addPlayer(new Player(namesTab[i],new DepartCell()));
            }
            aGame.play();
        }
        catch(IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}
