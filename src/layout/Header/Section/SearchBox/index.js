import HtmlElement from '../../../../core/HtmlElement.js';
import AutoComplete from './AutoComplete/index.js';
import HistoryList from './History/index.js';
import ScopeSelector from './ScopeSelector/index.js';
import { POP_UP } from '../../../../constant.js';
import {
  handleSubmit,
  handleInputClick,
  handleInputKeyDown,
  handleInput,
} from './eventHandler.js';
import { setInheritance } from '../../../../utils/manuplateDOM.js';

export default function SearchBox({ $element }) {
  HtmlElement.call(this, { $element });
}

setInheritance({ parent: HtmlElement, child: SearchBox });

SearchBox.prototype.setTemplate = function () {
  return template;
};

SearchBox.prototype.renderChild = function () {
  const $scopeSelectorWrapper =
    this.$element.querySelector('.search__selector');
  const $historyWrapper = this.$element.querySelector('.search__record');
  const $autoWrapper = this.$element.querySelector('.search__auto');
  const $scopeSelector = new ScopeSelector({ $element: $scopeSelectorWrapper });
  const $historyList = new HistoryList({ $element: $historyWrapper });
  const $autoComplete = new AutoComplete({ $element: $autoWrapper });
  this.interface.addElement({
    newElements: { $scopeSelector, $historyList, $autoComplete },
  });
};

SearchBox.prototype.setEvent = function () {
  this.$form = this.$element.querySelector('#searhForm');
  this.$input = this.$element.querySelector('#searchInput');
  this.$form.addEventListener('submit', handleSubmit.bind(this));
  this.$input.addEventListener('click', handleInputClick.bind(this));
  this.$input.addEventListener('keydown', handleInputKeyDown.bind(this));
  this.$input.addEventListener('input', handleInput.bind(this));
};

const template = ` <div class="search__selector pop-up-container"></div>
<div class="search__container">
<form class="search__form" id="searhForm">
<input
class="pop-up-container"
  id="searchInput"
  type="text"
  placeholder="찾고 싶은 상품을 검색해보세요!"
  autocomplete="off"
/>
<div>
  <span><i class="fas fa-microphone"></i></span>
  <span><i class="fas fa-search"></i></span>
</div>
</form>
<div class="search__auto ${POP_UP.hidden}" id="searchAuto"></div>
<div class="search__record ${POP_UP.hidden}" id="searchRecord"></div>
</div>
`;
