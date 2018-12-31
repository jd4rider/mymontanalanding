import React from 'react';
import CardExt from './helpers/CardExt';
import PrintablesImg from '../assets/images/printables.png';
import MealPlansImg from '../assets/images/mealplans.png';
import CommunityImg from '../assets/images/community.png';
import ChallengesImg from '../assets/images/challenges.png';
import VideosImg from '../assets/images/videos.png';
import { CardDeck } from 'reactstrap';

export default class RowOfCards extends React.Component {
  render() {
    return (
      <div>
        <CardDeck>
          <CardExt path='/printables-page/' image={PrintablesImg} imagealt='Click here for printable materials' title='Printables' subtitle='Download Printables' text='Please click here to get your Printable Materials.&#013;&#010;&#013;&#010;'/>
          <CardExt path='https://www.facebook.com/groups/2140182349578827/' image={CommunityImg} imagealt='Click here to visit the exclusive FB Group for Members only' title='Community' subtitle='Exclusive FB Group' text='Please click here to visit the exclusive FB Group for Members only.'/>
          <CardExt path='/meal-plans/' image={MealPlansImg} imagealt='Click here to go to the meal plan section' title='Meal Plans' subtitle='Go to Meal Plans' text='Please click here to go to the Meal Plans.&#013;&#010;&#013;&#010;'/>
          <CardExt path='/my-montana-kitchen-table-challenges/' image={ChallengesImg} imagealt='Click here to go to the Challenges' title='Challenges' subtitle='Go to Challenges' text='Please click here to go to the Challenges.&#013;&#010;&#013;&#010;'/>
          <CardExt path='/video-content-page/' image={VideosImg} imagealt='Click here to go to the Videos' title='Videos' subtitle='Go to Videos' text='Please click here to go to the Videos.&#013;&#010;&#013;&#010;'/>
        </CardDeck>
      </div>
    )
  }
}