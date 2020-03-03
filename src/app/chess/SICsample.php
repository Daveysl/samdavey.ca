<?php
    /**
     * Sam's Awesome PHP SIC sample!
     *
     * PHP Version 7.3.5 (not 7.5)
     * 
     * @author     Sam Davey
     */

    $piecenames = array('', 'pawn','rook','knight','bishop','queen','king');
    $pieceletters = array(' ','wP','wR','wN','wB','wQ','wK','bP','bR','bN','bB','bQ','bK');
    $pieces =       array(' ','♙','♖','♘','♗','♕','♔','♟','♜','♞','♝','♛','♚');
    $letters =      array(' ','A','B','C','D','E','F','G','H');

    $turn = 1;
    $error = false;
    $errormsg = "";
    $selected = "";
    $player = "";
    $newgame = true;

    if (isset($_POST['turn'])) { // get the $turn number and change the player based on it
        $turn = $_POST["turn"];
        if ($turn%2==0) {
            $player = "black";
        } else {
            $player = "white";
        }
    } else {
        $player = "white";
    }

    if (isset($_POST['newgame'])) { // this makes $newgame false if the POST for it is set.
        $newgame = $_POST['newgame'];
    }
    
    if ($newgame) { // if newgame is not set, initialize
        // ----------------------------------------------------------------------
        // INITIALIZATION - New Game
        // ----------------------------------------------------------------------
        $_POST["cmd"] = "";
        $cmd = "";
        $cmds = array();
        
        $board = [//v---- for each row ----v
         array(null,  1,2,3,4,5,6,7,8,  null), // for letters of each col

         array(1,   2,3,4,5,6,4,3,2,   1), 
         array(2,   1,1,1,1,1,1,1,1,   2),
         array(3,   0,0,0,0,0,0,0,0,   3),
         array(4,   0,0,0,0,0,0,0,0,   4),
         array(5,   0,0,0,0,0,0,0,0,   5),
         array(6,   0,0,0,0,0,0,0,0,   6),
         array(7,   7,7,7,7,7,7,7,7,   7),
         array(8, 8,9,10,11,12,10,9,8, 8),

         array(null,  1,2,3,4,5,6,7,8,  null)// for letters of each col
    ];

        $errormsg = "Welcome";
        $newgame = false;
        
    } else {        
        // ----------------------------------------------------------------------
        // CONTINUATION - Action as been made
        // ----------------------------------------------------------------------
        $cmd = strtoupper($_POST["cmd"]);

        if ($cmd == "RESTART" || $cmd == "RESET") {
            header("Location: ./SICsample");

        } else {
            $cmds = unserialize(base64_decode($_POST["cmds"]));
            $board = unserialize(base64_decode($_POST["board"]));

            // change board using given command (cmd)
            // cmd -> 0: player, 1: piece, 2: row, 3: col
            // player:  w: white (p1), b: black (p2)
            // piece:   find ($cmd[0].$cmd[1]) in $pieceletters
            // 

            // Sample command: 'PE7 E6'
            //                  012345            

            // error-checking the inputted command
            if (strlen($cmd) == 6) { // if the command is the correct length
        
                // even is black's turn, odd is white's turn
                if ($turn%2==0) {
                    $cmd ="b".$cmd;
                } else {
                    $cmd = "w".$cmd;
                
                }
                
                // Sample command: 'wPE7 E6'
                //                  0123456 
                
                if (array_search(($cmd[0].$cmd[1]), $pieceletters) ) { // if piece exists
                    if ((array_search(($cmd[2]), $letters)) && (array_search(($cmd[5]), $letters))) { // if col is in letters
                        if (((int)$cmd[3] >= 1) && ((int)$cmd[3] <= 8) && ((int)$cmd[6] >= 1) && ((int)$cmd[6] <= 8)) { // if row is between 1 and 8
                            
                            $piece = array_search(($cmd[0].$cmd[1]), $pieceletters);
                            $startcol = array_search(($cmd[2]), $letters);
                            $startrow = (int)$cmd[3];
                            $col = array_search(($cmd[5]), $letters);
                            $row = (int)$cmd[6];
                            
                            if ($board[$startrow][$startcol] > 0) {

                                if (($player == "black" && $board[$startrow][$startcol] > 6) || ($player == "white" && $board[$startrow][$startcol] <= 6)) {                               
                                    $turn += 1;
                                    $cmds[] = $pieces[$piece] . $cmd[2] . $cmd[3] . " to " . $cmd[5] . $cmd[6]; // add command to command history
                                    $errormsg = "moving $pieces[$piece] to $cmd[2]$cmd[3]";
                                    $board[$row][$col] = $piece;
                                    $board[$startrow][$startcol] = 0;
                                    
                                    if ($cmd[0]=='w') {
                                        $player = "black";
                                    } else {
                                        $player = "white";
                                    }
                                    
                                } else {
                                    $errormsg = "ERROR: that isn't your piece";
                                }
                            } else {
                                // cmd4 is not in between 1 and 8 
                                $errormsg = "ERROR: piece not found in location";
                            }
                            
                        } else {
                            // cmd4 is not in between 1 and 8 
                            $errormsg = "ERROR: row is between 1 and 8";
                        }
                    } else {
                        // cmd3 is not in letters 
                        $errormsg = "ERROR: letter does not exist";
                    }
                } else {
                    // cmd1 (piece) does not exist 
                    $errormsg = "ERROR: piece does not exist";
                }
            } else {
                // cmd is not length 6 
                $errormsg = "ERROR: command must be 6 char in length";
            }
            $newgame = false;
        }
    }
    $cmd = ""; // reset cmd
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sam's SIC Sample</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="headers">
        <h1>$_Command Line Chess</h1>
        <h2>Sandbox Mode</h2>
    </div>
    <div class="main">
        <!----- Table ------------------------------------------------------------------------------>
        <div class="table">
            <div class='row'> 
                <?php 
                    for ($i=9; $i >= 0; $i--) { 
                        echo "<div class='label'>". $board[$i][0] ."</div>";
                    }
                ?>
            </div>
        <!------------------------------------------------------------------------------------------->
            <?php
                // create rows
                for ($x=1; $x <= 8; $x++) { // X is the letter in the coordinates
                    // add the first row as the coordinate numbers
                    echo "<div class='row'>";
                    for ($y=9; $y >= 0; $y--) { // Y is the row (or rank) in the coordinates
                        if ($y == 0 || $y == 9) {
                            echo "<div class='label'>". $letters[$x] ."</div>";
                        } else {
                            echo "<div class='box'>". $pieces[$board[$y][$x]] ."</div>";
                        }
                    }
                    echo "</div>";
                }
            ?>
        <!------------------------------------------------------------------------------------------->
            <div class='row'> 
                <?php 
                    for ($i=9; $i >= 0; $i--) { 
                        echo "<div class='label'>". $board[$i][0] ."</div>";
                    }
                ?>
            </div>
        </div>
        <!---------- Command Input Group --------------------------------------------------------------------------------->
        <div class="commands">
            <!-- Past Commands Display  -->
            <div class="lines">
                <?php
                    foreach ($cmds as $key => $value) {
                        echo "turn " . ($key+1) . ": " . $value . "<br>";
                    }
                    echo "$player's turn";
                ?>
            </div>
            <!--------- Command Input ---------------------------------------------------------------------------------->
            <form action="SICsample.php" method="POST">
                <div class="inputs">
                    <!-- hidden inputs to save state -->
                    <input type="hidden" name="turn" value="<?php echo $turn ?>">
                    <input type="hidden" name="newgame" value="<?php echo $newgame ?>">
                    
                    <input type="hidden" name="cmds" value="<?php print base64_encode(serialize($cmds)) ?>">
                    <input type="hidden" name="board" value="<?php print base64_encode(serialize($board)) ?>">
                    <!--------------------------------->

                    Move: <input type="text" name="cmd" autofocus value="<?php echo $cmd; ?>" > 

                    <div class="errormsg">
                        <?php echo $errormsg; ?>
                    </div>
                </div>
            </form>
        </div>
        <!------------ Help Section ------------------------------------------------------------------------------->
        <div class="help">
            <h3 style="margin: 0 0 5px 0; font-size: 25px;">Help</h3>
            <div class="pieces">
            <h3 class="helptitle">Pieces</h3>
            <?php
            for ($p=1; $p <= 6; $p++) {
                echo $pieces[$p] . $pieces[$p+6] . ": ".$pieceletters[$p][1]. " " . $piecenames[$p] . "<br>";
            }
            ?>
            </div>
            <h3 class="helptitle">Moving</h3>
            <div class="instructions">
                Format: <br>  <b>PXY<sub>1</sub> XY<sub>2</sub></b> <br>
                (piece, 1st pos, 2nd pos)<br>
                <div> Put a space between positions </div>
                Example:<br>
                <b>NG1 F3</b><br>
                This moves white knight <br>
                from B1 to C3 <br><br>
                Type 'restart' to restart game
            </div>
        </div>
        <!------------------------------------------------------------------------------------------->
    </div>
</body>

</html>

<?php
// -------------------------------for mouse-operation functionality (taken out)
// ------------------------------ too much functionality created too many changes
// ------------------------------ thinking of adding the ability to click on a tile, which automatically adds on the location of the tile
// if(isset($_POST['boxdata'])) {
//     $position = $_POST['boxdata'];
//     echo "<br>".$position;

//     if (empty($_POST['selected'])) { // if there's no selected box already, make the clicked box the selected one.
//         $selected = $_POST['boxdata'];
//         echo "selected $selected";
//         $usedmouse = true;
        
//     } else { // if there is already a selected box, remove piece from box(turn to 0) and put that piece into the board on selected position
//         $selected = $_POST['selected'];
//         echo "moving from $selected to $position";
        
//         $piece = $position[0];
//         $row = $position[1];
//         $col = $position[2];
//         $currentrow = $selected[1];
//         $currentcol = $selected[2];

//         $board[$col][$row] = $piece;
//         $cmd = "wPE7>E6"; // if turn white or black

//         // wPE7>E6 sample 
//         // convert placement position to a text command...

//         $selected = "";
//         $usedmouse = true;
        
//     }
// }

// -------------------------------------------------------------------------------------------
// possible undo functionality (not originally built for it)
// have to find a way around the commands array ($cmds)
// if ($cmd == "UNDO") {
//     array_pop($cmds);
//     $cmd = end($cmds);
//     // ♙F2 to F4
//     // PF2 F4
//     if ($turn%2==0) {
//         $cmd ="b".$cmd;
//     } else {
//         $cmd = "w".$cmd;
//     }
//     // this is supposed to change the command to the previous command.
//     $cmd = " ".$pieceletters[$cmd[0].array_search($cmd[1], $pieces)].$cmd[2].$cmd[3]." ".$cmd[8].$cmd[9];
// }

/*
Error testing:

PE2 E4
PE7 E5

NG1 F3
NG8 F6

PD2 D3
BF8 C5

*/


?>


