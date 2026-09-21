  <?php

  // Configurações de cabeçalho para permitir requisições de diferentes origens
  header("Access-Control-Allow-Origin: http://localhost:5173");
  header("Access-Control-Allow-Headers: Content-Type");
  header("Access-Control-Allow-Methods: GET, POST, PUT"); // Permite métodos GET, POST e PUT
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
    if (isset($_GET["id"])) {

      $id = $_GET["id"];
      $sql = "SELECT * FROM contatos WHERE id = :id";
      $stmt = $pdo->prepare($sql);
      $stmt->bindParam(":id", $id);
      $stmt->execute();
      $contato = $stmt->fetch(PDO::FETCH_ASSOC); //APENAS FETCH    
      echo json_encode($contato);
      exit;

    } else {

      $sql = "SELECT * FROM contatos ORDER BY id DESC";
      $stmt = $pdo->query($sql);
      $contatos = $stmt->fetchAll(PDO::FETCH_ASSOC);
      echo json_encode($contatos);
      exit;    
    }
  }

  //PUT - ATUALIZAR CONTATO
  if ($metodo == "PUT") {

    // Recupera os dados enviados no corpo da requisição
    $dados = json_decode(file_get_contents("php://input"), true);
    $id     = $dados["id"];
    $nome     = $dados["nome"];
    $email    = $dados["email"];
    $assunto  = $dados["assunto"];
    $mensagem = $dados["mensagem"];

    $sql = "UPDATE contatos
        SET
        nome = :nome,
        email = :email,
        assunto = :assunto,
        mensagem = :mensagem
      WHERE id = :id";
    
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(":nome", $nome);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":assunto", $assunto);
    $stmt->bindParam(":mensagem", $mensagem);
    $stmt->bindParam(":id", $id);
    $stmt->execute();
    
    echo json_encode([
      "sucesso" => true,
      "mensagem" => "Contato atualizado com sucesso!"
    ]);
  }