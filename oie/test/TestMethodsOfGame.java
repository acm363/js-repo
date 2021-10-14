import game.*;
import util.boards.*;
import util.cells.*;
import static org.junit.Assert.*;
import java.util.*;
import org.junit.Test;
import org.junit.Before;

public class TestMethodsOfGame { 
    private Game someGame;
    private Player X ;
    private Player Y ;
    private Player Z ;
    private Player T ;
    
    @Before
    public void before(){
    someGame = new Game(new ClassicalBoard(64));
    X = new Player("X",new DepartCell());
    Y = new Player("Y",new DepartCell());
    Z = new Player("Z",new DepartCell());
    T = new Player("T",new DepartCell());
    someGame.addPlayer(X);
    someGame.addPlayer(Y);
    someGame.addPlayer(Z);
    }

    @Test(expected = IllegalArgumentException.class)
    public void raiseExceptionIfthePlayerIsNotRegistred() throws IllegalArgumentException{
        someGame.getPlayerIndex(T);//T n'est pas enregistré
    }

    @Test
    public void testGetPlayerIndex(){
        assertEquals(0,someGame.getPlayerIndex(X));
        assertEquals(1,someGame.getPlayerIndex(Y));
        assertEquals(2,someGame.getPlayerIndex(Z));

    }

    @Test
    public void testNextPlayerReturnTheNextPlayer(){
        assertEquals(0,someGame.getPlayerIndex(X));
        Player p = someGame.nextPlayer(X);
        assertEquals(1,someGame.getPlayerIndex(Y));
        assertEquals(Y,p);// Y est le joueur suivant ajouté dans la liste après X
    }
    

    @Test 
    public void testHasWon(){
        Cell cell = new Cell(63);
        assertEquals(63,cell.getPosition());
        assertTrue(someGame.hasWon(cell));
    }

    // ce test vérfie si la méthode movePlayer() de la classe Game déplace bien le pion du le numéro de la case
    //passée en paramètre
    @Test 
    public void testMovePlayer(){
        assertEquals(0,X.getCell().getPosition());
        someGame.movePlayer(X, 12);
        assertEquals(12,X.getCell().getPosition());
        someGame.movePlayer(X, 20);
        assertEquals(20,X.getCell().getPosition());
        someGame.movePlayer(X, 63);
        assertEquals(63,X.getCell().getPosition());
        someGame.movePlayer(X,69);// le nombre de cases du plateau est dépassé on devrait se retrouver sur la 57
        assertEquals(57,X.getCell().getPosition());
    }

    @Test 
    public void testApplyEffect(){
        //on teste applyEffect pour une case oie
        assertEquals(0,Y.getCell().getPosition());
        someGame.movePlayer(Y, 9);
        someGame.applyEffect(Y, Y.getCell(), 9);// en principe le pion de X doit rebondir sur la 18
        assertEquals(18,Y.getCell().getPosition());
 
        //on teste applyEffect pour une case de téléportation
        someGame.movePlayer(X,6);
        someGame.applyEffect(X, X.getCell(), 6);//on tombe sur la 12
        assertEquals(12,X.getCell().getPosition());
        someGame.movePlayer(X,58);
        someGame.applyEffect(X, X.getCell(), 9);//on revient à la 1 si on est sur la 58
        assertEquals(1,X.getCell().getPosition());

    }

    @Test      
    public void testWhenTwoPlayersAreInTrapCellTheySwitchPosition(){
        someGame.movePlayer(X,31);
        someGame.movePlayer(Y,7);
        someGame.movePlayer(Y,31);
        someGame.switchPosition(Y, Y.getCell(), someGame.getGameBoard().getCell(7));
        assertEquals(7,X.getCell().getPosition());
    }

    @Test      
    public void testWhenTwoPlayersAreInWaitCellTheySwitchPosition(){
        someGame.movePlayer(X,19);
        someGame.movePlayer(Y,7);
        someGame.movePlayer(Y,19);
        someGame.switchPosition(Y, Y.getCell(), someGame.getGameBoard().getCell(7));
        assertEquals(7,X.getCell().getPosition());
    }

      // ---Pour permettre l'exécution des test----------------------
      public static junit.framework.Test suite() {
        return new junit.framework.JUnit4TestAdapter(TestMethodsOfGame.class);
}
}
