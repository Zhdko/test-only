import { IMG_INFO } from './constants/constants.js';
import TagInfo from './components/TagInfo.js';

const tagsList = document.querySelector('.container');
let currentTag = null;

const createTag = (tagData) => {
  const tag = new TagInfo(tagData, 'get-info');
  return tag.generateTag();
};

IMG_INFO.forEach((tag) => {
  tagsList.append(createTag(tag));
});

const closeTag = (tag) => {
  tag.classList.remove('tag_opened');
  currentTag = null;
};

const openTag = (tag) => {
  tag.classList.add('tag_opened');
  if (currentTag !== null && tag !== currentTag) {
    closeTag(currentTag);
  }
  currentTag = tag;
};

const toggleOpenTag = (tag) => {
  if (tag.classList.contains('tag_opened')) {
    closeTag(tag);
  } else {
    openTag(tag);
  }
};

const handleClick = (e) => {
  if (e.target.closest('.tag')) {
    const tag = e.target.closest('.tag');
    toggleOpenTag(tag);
  } else if (currentTag !== null) {
    closeTag(currentTag);
  }
};

document.addEventListener('click', (e) => handleClick(e));
