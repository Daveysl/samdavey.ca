<?php
    // TESTING - for click input ---------------------------
    // this file is here to show that I indeed tried implementing a click input system
    $num = "nothing";
    $nums = array('1','2','3','4','5','6','7','8');
        
    if (isset($_POST["button"])) {
        $num = $_POST["button"];
    } else {
        $num = "nothing";
    }
?>

<form method="POST" action="">
    <?php
        foreach ($nums as $key => $value) {
            echo "<button name='button' value=".$nums[$key]."> ". $nums[$key] ." </button>";
        }
    ?>
    <!-- represents command input -->
    <input type="text" value=" <?php echo $num; ?> ">
</form>