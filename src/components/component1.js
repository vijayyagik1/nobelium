import React from 'react';
import Card from './Card.js';

 export default function Component1() {
   let array = [
     {
       name: 'Taj Mahal',
       image:
         'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
       description: 'The city in Uttar Pradesh is chock-full of marvelous Mughal monuments, like Itimad-ud-Daulah Akbars Mausoleum',
     },
     {
       name: 'Humayun s Tomb',
       image:
         'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-new-delhi.jpg',
       description:
         'The colorful capital of India is the perfect marriage of heritage and modernity. Old Delhi contains some of the  the Jama Masjid, Red Fort, and Chandni Chowk',
     },
     {
       name: 'The Gateway of India ',
       image:
         'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-mumbai.jpg',
       description:
         'Mumbai–home to ultra-wealthy entrepreneurs and the hottest Bollywood actors.',
     },
     {
       name: 'Gadi Sagar Temple',
       image:
         'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg',
       description:
        'Land of Kings," Rajasthan brims with remnants of the kings and queens of past centuries.',
    },
    {
      name: 'Rishikesh',
      image:
        'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rishikesh.jpg',
      description:
        'Rishikesh has been on the radar for spiritually minded travelers since the late 1960s, when the Beatles spent time in Maharishi Mahesh Yogis ashram.',
    },
    {
      name: 'The Golden Temple',
      image:
        'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-amritsar.jpg',
      description:
        'Amritsar, the "Jewel of Punjab," has made its claim to fame with its remarkable Golden Temple.',
    },
  ];

  return (
    <div className="StaticCard">
      <div className="Static">
        <h1>Must Visit in this Place</h1>
        <p>
        She stretched out her hand, saying, “Vernon! My dear, what a delightful surprise!”
       “What’s surprising about it?” he enquired, lifting his black brows. “Didn’t you ask me to come?”
        The smile remained pinned to Lady Buxted’s lips, but she replied with more than a touch of acidity: “To be sure I did, but so many days ago that I supposed you had gone out of town!”
        “Oh, no!” he said, returning her smile with one of great sweetness..
        </p>
      </div>
      <div className="ComponentCard">
        <div className="CardFlex">
          {array.map((i) => {
            return <Card obj={i} />;
          })}
        </div>
      </div>
    </div>
  );
}



