<?php

// Configurações de cabeçalho para permitir requisições de diferentes origens
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$pdo = new PDO("mysql:host=143.106.241.4;dbname=simone", "simone", "vida280112");

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Obtém o método da requisição HTTP
$metodo = $_SERVER["REQUEST_METHOD"];

//POST - CADASTRAR CONTATO
if ($metodo == "POST") {

  $dados = json_decode(file_get_contents("php://input"), true);
  $nome     = $dados["nome"];
  $email    = $dados["email"];
  $assunto  = $dados["assunto"];
  $mensagem = $dados["mensagem"];

  $sql = "INSERT INTO contatos (nome, email, assunto, mensagem)
          VALUES (:nome, :email, :assunto, :mensagem)";

  $stmt = $pdo->prepare($sql);
  $stmt->bindParam(":nome", $nome);
  $stmt->bindParam(":email", $email);
  $stmt->bindParam(":assunto", $assunto);
  $stmt->bindParam(":mensagem", $mensagem);

  $stmt->execute();

  echo json_encode([
    "sucesso"  => true,
    "mensagem" => "Dados enviados com sucesso!"
  ]);
  exit;
}

//GET - CONSULTAR CONTATOS
if ($metodo == "GET") {

  $sql = "SELECT * FROM contatos ORDER BY data_envio DESC";

  $stmt = $pdo->query($sql);

  $contatos = $stmt->fetchAll( PDO::FETCH_ASSOC);
  echo json_encode($contatos);
  exit;
}