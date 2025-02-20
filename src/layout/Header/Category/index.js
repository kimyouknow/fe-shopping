import HtmlElement from '../../../core/HtmlElement.js';
import { POP_UP } from '../../../constant.js';
import { handleClick } from './eventHandler.js';
import { setInheritance } from '../../../utils/manuplateDOM.js';

export default function Category({ $element }) {
  HtmlElement.call(this, { $element });
}

setInheritance({ parent: HtmlElement, child: Category });

Category.prototype.setTemplate = function () {
  return template;
};

Category.prototype.setEvent = function () {
  this.$element.addEventListener('click', handleClick.bind(this));
};

const mainCategoryList = [
  '패션의류/잡화',
  '뷰티',
  '식품',
  '출산/유아동',
  '생활용품',
  '주방용품',
  '홈인테리어',
  '도서/음반/DVD',
  '스포츠/레저',
  '문구/오피스',
  '반려동물용품',
  '헬스/건강식품',
  '여행/티켓',
];

const subCategoryList = [
  '유아/어린이',
  '소설/에세이/시',
  '초중고참고서',
  '가정 살림',
  '건강 취미',
  '경제 경영',
  '과학/공학',
  '국어/외국어/사전',
  '대학교재',
  '만화/라이트노벨',
];

const thirdCategoryList = [
  '유아/어린이',
  '소설/에세이/시',
  '초중고참고서',
  '가정 살림',
  '건강 취미',
];

const template = `<div class="category__button" id="category-button">
    <i class="fas fa-bars"></i>
    <span>카테고리</span>
  </div>
  <div class="${POP_UP.hidden}" id="category-layer">
    <div class="category__layer">
    <ul class="category__list">
    ${mainCategoryList
      .map((mainCategory) => `<li><span>${mainCategory}</span></li>`)
      .join('')}
    </ul>
    <div class="category__depth">
    <ul class="category__list-inner">
    ${subCategoryList
      .map((subCategory) => `<li><span>${subCategory}</span></li>`)
      .join('')}
    </ul>
    </div>
    <div class="category__depth">
    <ul class="category__list-inner">
    ${thirdCategoryList
      .map((thirdCategory) => `<li><span>${thirdCategory}</span></li>`)
      .join('')}
    </ul>
    </div>
    </div>
  </div>`;
