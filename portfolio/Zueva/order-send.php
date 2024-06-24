<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style/main.css">
  <title>My project starter</title>
</head>

<body>
  <div class="wrapper wrapper_all-centered">

    <?php if (count($_GET)) :

      $customer_name = htmlspecialchars($_GET['customer-name']);
      $customer_phone = htmlspecialchars($_GET['customer-phone']);
      $customer_email = htmlspecialchars($_GET['customer-email']);
      $customer_message = htmlspecialchars($_GET['customer-message']);

      $chat_name = "1265031150";
      $token = "6912130668:AAENxT8FLWp-yyUUDe21AAfY2daHoUXRNFQ";

      $message = "Ирина! У тебя новый заказ!\n
Имя заказчика: $customer_name. Номер его телефона: $customer_phone. Вот его почтовый адрес: $customer_email.\n
Смотри, что он хочет (цитирую):\n" . "«" . $customer_message . "».\n
Давай, выходи с ним на связь быстрее!";

      $text = urlencode($message);
      $url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_name}&text={$text}";

      $ch = curl_init();
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

      $optArray = array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true
      );

      curl_setopt_array($ch, $optArray);
      $result = curl_exec($ch);
      curl_close($ch);
    ?>

      <div class="about-order layout_one-column">
        <h3 class="about-order__header">Поздравляю!</h3>
        <p class="about-order__message">Ваше сообщение успешно отправлено! Я свяжусь с вами в течении этого дня. Спасибо
          за ваш заказ!</p>
        <a href="" class="about-order__link">Вернуться на главную</a>
      </div>

    <?php else : ?>

      <div class="about-order layout_one-column">
        <h3 class="about-order__header">Упс! Ошибка!</h3>
        <p class="about-order__message">Что-то пошло не так и ваше сообщение не было отправлено: возможно вы неправильно ввели данные или произошёл сбой. Не беда: пожалуйста свяжитесь со мной способами, представленными ниже или вернитесь на главную страницу и попробуйте ещё раз. Благодарю!</p>
        <ul class="contacts-list">
          <li class="contacts-list__item"><a href="tel:+ 7 (977) 945-96-16"><span class="contacts-card__icon contacts-card__icon_phone"></span>+ 7 (977) 945-96-16</a></li>
          <li class="contacts-list__item"><a href="#"><span class="contacts-card__icon contacts-card__icon_email"></span>zueva@gmail.com</a></li>
          <li class="contacts-list__item"><a href="#"><span class="contacts-card__icon contacts-card__icon_twit"></span>@zueva_style</a></li>
          <li class="contacts-list__item"><a href="#"><span class="contacts-card__icon contacts-card__icon_inst"></span>@irina_zueva_style</a></li>
        </ul>
        <a href="" class="about-order__link">Вернуться на главную</a>
      </div>

    <?php endif ?>

  </div>
</body>

</html>
