import React from "react";
import { connect } from "react-redux";
import { TagsToggle } from "./Tags";
import { bindActionCreators } from "redux";
import { fetchTagList } from "./redux/action";

// function App({ category, tags, fetchTagList }) {
//   useEffect(() => {
//     if (category && tags.length === 0) {
//       // category存在，但是tags没有
//       fetchTagList(category.id);
//     }
//   }, [category, tags.length, fetchTagList]);
//   function getTags() {
//     return tags[category.id] || [];
//   }
//   const defaultTags = [{ title: "全部", tagId: "" }, ...getTags().slice(0, 8)];
//   const [newTags, setNewTags] = useState(defaultTags);
//   return (
//     <nav className="tag-nav">
//       <div className="nav-list">
//         <Tags tagList={newTags} />
//         {newTags.length < 10 && (
//           <Tag onClick={setNewTags([...defaultTags, ...getTags().slice(8)])}>
//             展开
//             <CaretDownOutlined />
//           </Tag>
//         )}
//       </div>
//     </nav>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: true,
    };
  }
  componentDidMount() {
    const { category, tags, fetchTagList } = this.props;
    if (category && !tags[category.id]) {
      // category存在，但是tags没有
      fetchTagList(category.id);
    }
  }
  getTags() {
    const { category, tags } = this.props;
    return tags[category.id] || [];
  }
  render() {
    const singleTags = this.getTags();
    return (
      <nav className="tag-nav">
        <div className="nav-list">
          <TagsToggle
            tagList={singleTags}
            defaultKey={this.props.tagTitle}
            categoryTitle={this.props.category.title}
          />
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    tags: state.tag.tagItems,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTagList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
