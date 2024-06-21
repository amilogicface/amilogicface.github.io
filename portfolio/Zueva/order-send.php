<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/main.css">
  <title>My project starter</title>
</head>

<body>
<?php
phpinfo();
$chat_name = "5023421476";
$token = "7376089065:AAGT7lhBoxuQCQagdHTipyXD3htIi6K12pA";
$message = "Здравствуйте.\nЭто тестовое сообщение, отправленное ботом с помощью PHP-скрипта.\n\nВсем хорошего дня.";

$text = urlencode($message);
$url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_name}&text={$text}";

$ch = curl_init();
$optArray = array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true
);
curl_setopt_array($ch, $optArray);
$result = curl_exec($ch);
curl_close($ch);

?>

  <div class="wrapper wrapper_all-centered">
    <div class="about-order layout_one-column">
      <h3 class="about-order__header">Поздравляю!</h3>
      <p class="about-order__message">Ваше сообщение успешно отправлено! Я свяжусь с вами в течении этого дня. Спасибо
        за ваш заказ!</p>
      <a href="" class="about-order__link">Вернуться на главную.</a>
    </div>
  </div>
</body>

</html>
