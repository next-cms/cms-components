import React, { Component } from 'react';
import {CATEGORIES} from './category';
import '../../../static/category.css';
import { WithContext as ReactTags } from 'react-tag-input';

const suggestions = CATEGORIES.map((category) => {
  return {
    id: category,
    text: category
  }
})

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


class CategoryTag extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: suggestions,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
   this.setState(state => ({ tags: [...state.tags, tag] }));
   
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  handleTagClick(index) {
    console.log('The tag at index ' + index + ' was clicked');
  }

  render() {
    const { tags, suggestions } = this.state;
    this.props.getTag(tags);
    //console.log("Tags: ",this.state.tags)
    return (
      <div>
        <ReactTags
          tags={tags}
          inline
          suggestions={suggestions}
          delimiters={delimiters}
          minQueryLength= {1}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
        />
      </div>
    );
  }
}
export default CategoryTag;
