<?php

    /*
        para evitar erro de CORS (O navegador bloqueia requisições entre origens diferentes),
        permitindo react e php em portas diferentes
    */
    header("Access-Control-Allow-Origin: *");

    require "./config.php";

    $nome = $_POST["nome"];
    $preco = $_POST["preco"];
    $quantidade = $_POST["quantidade"];

    $sql = "INSERT INTO produtos(nome, preco, quantidade) VALUES ('$nome', '$preco', '$quantidade')";

    $conn->query($sql);

    echo "Produto cadastrado com sucesso!";