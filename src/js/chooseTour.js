// импортируем
import { chooseTourCardTur } from './modules';
import { arrChooseTourPhoto } from './images';


for (let i = 0; i < chooseTourCardTur.length; i++) {
  chooseTourCardTur[i].style.backgroundImage = `url(${
    arrChooseTourPhoto[i]
  })`;
}
