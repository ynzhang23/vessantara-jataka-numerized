document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll('.sacrifice img');
  var quoteDiv = document.querySelector('.quote');

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
  'coins2': ` From the time he was appointed to the
  kingship, the Great Being established a great donation, whereby he 
  handed out <span style="background-color: yellow;">six hundred thousand gold coins</span>
  on each day.`,
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
  'chariot': `<em>"Tomorrow I am going to give a donation of the seven hundreds— seven
  hundred elephants, seven hundred horses, <span style="background-color: yellow;">seven hundred chariots</span>, 
  seven hundred women, seven hundred cows, seven hundred female slaves,
  seven hundred male slaves—and supply various kinds of food and drink
  and suchlike, including even spirits. Please make the arrangements, of all
  things of a quality suitable to be given. So, having considered carefully
  the seven hundredfold gift, he dismissed his ministers and alone went to
  Maddi’s living quarters, and sitting on the royal couch, he started to have
  discussions with her."</em>`,
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
  discussions with her."</em>`
};


  images.forEach(function(image) {
      image.addEventListener('mouseover', function() {
          var imageClass = this.classList[0]; // Assuming the class is the identifier
          displayQuote(imageClass);
      });

      image.addEventListener('mouseout', function() {
      });
  });

  function displayQuote(imageClass) {
      var quote = quotes[imageClass];
      if (quote) {
          quoteDiv.innerHTML = quote;
      }
  }
});
