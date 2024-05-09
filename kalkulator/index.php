

<!DOCTYPE html>
<html>
<head>
    <title>Kalkulator PHP</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $display = $_POST['display'] ?? '';
        $input = $_POST['num'] ?? '';
        $operator = $_POST['operator'] ?? '';
        $clear = $_POST['clear'] ?? '';
        $calculate = $_POST['calculate'] ?? '';

        if ($clear) {
            $display = '';
        } elseif ($input !== '') {
            $display .= $input === '.' ? ($display === '' ? '0.' : $input) : $input;
        } elseif ($operator !== '') {
            $display .= $operator;
        } elseif ($calculate) {
            if($display === '') {
                header("Location: {$_SERVER['PHP_SELF']}");
                exit();
            }
            preg_match_all('/[\d\.]+|[+\-*\/%]/', $display, $matches);
            $values = $matches[0];
            $result = $values[0];
            for ($i = 1; $i < count($values); $i += 2) {
                $operator = $values[$i];
                $value = $values[$i + 1];
                switch ($operator) {
                    case '+':
                        $result += $value;
                        break;
                    case '-':
                        $result -= $value;
                        break;
                    case '*':
                        $result *= $value;
                        break;
                    case '/':
                        if ($value != 0) {
                            $result /= $value;
                        } else {
                            echo "Error: Pembagian dengan nol tidak diperbolehkan.";
                        }
                        break;
                    case '%':
                        $result %= $value;
                        break;
                    default:
                        echo "Operator tidak valid.";
                        break;
                }
            }
            $display = $result;
        }
    }
?>
<div class="top">
<center><h1>Calculator Pertemuan 10 - Agung</h1></center>
</div>
    <div class="calculator">
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <input type="text" name="display" id="display" readonly value="<?php echo $display ?? ''; ?>">
            <br>
            <div class="row">
                <button type="button" name="num" value="7">7</button>
                <button type="button" name="num" value="8">8</button>
                <button type="button" name="num" value="9">9</button>
                <button type="button" name="operator" value="+" class="operator">+</button>
            </div>
            <div class="row">
                <button type="button" name="num" value="4">4</button>
                <button type="button" name="num" value="5">5</button>
                <button type="button" name="num" value="6">6</button>
                <button type="button" name="operator" value="-" class="operator">-</button>
            </div>
            
            <div class="row">
                <button type="button" name="num" value="1">1</button>
                <button type="button" name="num" value="2">2</button>
                <button type="button" name="num" value="3">3</button>
                <button type="button" name="operator" value="*" class="operator">x</button>
            </div>
            
            <div class="row">
                <button type="button" name="operator" value="%" class="operator">%</button>
                <button type="button" name="num" id="zero" value="0">0</button>
                <button type="button" name="num" value=".">.</button>
                <button type="button" name="operator" value="/" class="operator">/</button>
            </div>
            
            <!-- Tambahkan tombol modulus -->
            <div class="row">
                <button type="button" name="operator"  id="backspace">⌫</button>
                <button type="reset" name="clear" value="C" id="clear">C</button>
                <button type="submit" name="calculate" id="equal" value="=">=</button>
            </div>
            
        </form>
    </div>
<script src="script.js"></script>
</body>
</html>
