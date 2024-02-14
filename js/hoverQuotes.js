document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll('.sacrifice img');
  var quoteDiv = document.querySelector('.quote');
  var container = document.querySelector('.sacrifice');

  var quotes = {
    'coins': `<em>"Even as he was being born he stretched out his hand
    to his mother, saying, I wish to make a gift, dear one: is 
    there anything I can give?’ She said, ‘Dear one, you can 
    give gifts as much as you like.’ And she placed a purse of 
    <span style="background-color: yellow;">a thousand coins </span>
    in his outstretched hand."</em>`,

    'jewellery': `<em>"By that time he was four or five years old, 
    but he took the jewellery off and gave it to his nurses, 
    and would not take it when they tried to give it back. They 
    told the king what had happened, and the king said, 
    ‘What is given by my son is given well, a gift of Brahma.’ 
    And he had another piece of jewelry made. While still a 
    little boy the prince gave the <span style="background-color: yellow;"> 
    jewelry nine times </span> to his nurses."</em>`,

    'jewellery2': `<em>"Vessantara took off the jewellery he was 
    wearing on his own body too, and <span style="background-color: yellow;">eighteen times 
    he gave valuables</span> to those that asked him, so that there was nothing left over. 
    He left the city, but wished to say goodbye and take a last look, 
    and because of that wish the part of the earth which had his carriage 
    on split off and turned around, so that the carriage was 
    pointed towards the city"</em>`,

    'coins2': `<em>"From the time he was appointed to the
    kingship, the Great Being established a great donation, whereby he 
    handed out <span style="background-color: yellow;">six hundred thousand gold coins</span>
    on each day."</em>`,

    'elephant2': `<em><p>"I give what the brahmins ask me, and I do not waver: The tusked trumpeting elephant in rut, fit for riding, the best of elephants."
    <br>And he consented.<br>The king, the bringer of prosperity to the kingdom of the Sivis, with his heart freed by letting go, 
    Got down from the back of <span style="background-color: yellow;">the elephant</span> and gave it as a gift to the brahmins."</em>`,

    'elephant': `<em>"Tomorrow I am going to give a donation of the seven hundreds— <span style="background-color: yellow;">seven
    hundred elephants</span>, seven hundred horses, seven hundred chariots, seven
    hundred women, seven hundred cows, seven hundred female slaves,
    seven hundred male slaves—and supply various kinds of food and drink
    and suchlike, including even spirits. Please make the arrangements, of all
    things of a quality suitable to be given. So, having considered carefully
    the seven hundredfold gift, he dismissed his ministers and alone went to
    Maddi’s living quarters, and sitting on the royal couch, he started to have
    discussions with her."</em>`,

    'horse': `<em>"Tomorrow I am going to give a donation of the seven hundreds— seven
    hundred elephants, <span style="background-color: yellow;">seven hundred horses</span>, seven hundred chariots, 
    seven hundred women, seven hundred cows, seven hundred female slaves,
    seven hundred male slaves—and supply various kinds of food and drink
    and suchlike, including even spirits. Please make the arrangements, of all
    things of a quality suitable to be given. So, having considered carefully
    the seven hundredfold gift, he dismissed his ministers and alone went to
    Maddi’s living quarters, and sitting on the royal couch, he started to have
    discussions with her."</em>`,

    'horse2': `<em>"Brahmins followed him, and they asked him for his horses. Asked by them, he 
    gave the <span style="background-color: yellow;">four horses</span> to them."</em>`,

    'chariot': `<em>"Tomorrow I am going to give a donation of the seven hundreds— seven
    hundred elephants, seven hundred horses, <span style="background-color: yellow;">seven hundred chariots</span>, 
    seven hundred women, seven hundred cows, seven hundred female slaves,
    seven hundred male slaves—and supply various kinds of food and drink
    and suchlike, including even spirits. Please make the arrangements, of all
    things of a quality suitable to be given. So, having considered carefully
    the seven hundredfold gift, he dismissed his ministers and alone went to
    Maddi’s living quarters, and sitting on the royal couch, he started to have
    discussions with her."</em>`,

    'chariot2': `<em>"And then a fifth came there, and asked for <span style="background-color: yellow;">this carriage</span>.
    Asked by him, he gave it, and his mind was not at all perturbed. Then King Vessantara lifted down his own, And 
    gave satisfaction to this wealth-seeking brahmin."</em>`,

    'cow': `<em>"Tomorrow I am going to give a donation of the seven hundreds— seven
    hundred elephants, seven hundred horses, seven hundred chariots, 
    seven hundred women, <span style="background-color: yellow;">seven hundred cows</span>, seven hundred female slaves,
    seven hundred male slaves—and supply various kinds of food and drink
    and suchlike, including even spirits. Please make the arrangements, of all
    things of a quality suitable to be given. So, having considered carefully
    the seven hundredfold gift, he dismissed his ministers and alone went to
    Maddi’s living quarters, and sitting on the royal couch, he started to have
    discussions with her."</em>`,

    'female-slave': `<em>"Tomorrow I am going to give a donation of the seven hundreds— seven
    hundred elephants, seven hundred horses, seven hundred chariots, 
    seven hundred women, seven hundred cows, <span style="background-color: yellow;">seven hundred female slaves</span>,
    seven hundred male slaves—and supply various kinds of food and drink
    and suchlike, including even spirits. Please make the arrangements, of all
    things of a quality suitable to be given. So, having considered carefully
    the seven hundredfold gift, he dismissed his ministers and alone went to
    Maddi’s living quarters, and sitting on the royal couch, he started to have
    discussions with her."</em>`,

    'male-slave': `<em>"Tomorrow I am going to give a donation of the seven hundreds— seven
    hundred elephants, seven hundred horses, seven hundred chariots, 
    seven hundred women, seven hundred cows, seven hundred female slaves,
    <span style="background-color: yellow;">seven hundred male slaves</span>—and supply various kinds of food and drink
    and suchlike, including even spirits. Please make the arrangements, of all
    things of a quality suitable to be given. So, having considered carefully
    the seven hundredfold gift, he dismissed his ministers and alone went to
    Maddi’s living quarters, and sitting on the royal couch, he started to have
    discussions with her."</em>`,

    'woman': `<em>"Tomorrow I am going to give a donation of the seven hundreds— seven
    hundred elephants, seven hundred horses, seven hundred chariots, 
    <span style="background-color: yellow;">seven hundred women</span>, seven hundred cows, seven hundred female slaves,
    seven hundred male slaves—and supply various kinds of food and drink
    and suchlike, including even spirits. Please make the arrangements, of all
    things of a quality suitable to be given. So, having considered carefully
    the seven hundredfold gift, he dismissed his ministers and alone went to
    Maddi’s living quarters, and sitting on the royal couch, he started to have
    discussions with her."</em>`,

    'children':`<em>"‘Omniscience is a hundred times a thousand times, a hundred thousand times more dear to me than my child.’ 
    And the great earth resounded, as he gave to the brahmin <span style="background-color: yellow;">the gift of his children</span>."</em>`,

    'wife': `<em>‘I give <span style="background-color: yellow;">her</span> that you ask from me, and I do not waver, I do not hold back; 
    my mind delights in giving.’</em>`
  };


  images.forEach(function(image) {
    image.addEventListener('mouseover', function() {
        var imageClass = this.classList[0]; // Assuming the class is the identifier
        displayQuote(imageClass);
    });
  });

  // Add event listener to the container to clear the quote when mouse leaves it
  container.addEventListener('mouseout', function() {
    quoteDiv.innerHTML = '';
  });

  function displayQuote(imageClass) {
    var quote = quotes[imageClass];
    if (quote) {
        quoteDiv.innerHTML = quote;
    }
  }
})
