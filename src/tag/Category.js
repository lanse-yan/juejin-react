import React from "react";
import { Menu, Popover } from "antd";
import { Link } from "react-router-dom";
import Tags from "./Tags";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCategoryList } from "./redux/action";

// function App({ categoryList, fetchCategoryList }) {
//   // 只需要再mount的时候执行一次即可，不依赖prop或state
//   // 这里的依赖列表虽说只有fetchCategoryList，但实际上他和redux中的store有关，因此这里会被频繁执行，从而导致问题
//   useEffect(() => {
//     fetchCategoryList();
//   }, [fetchCategoryList]);

//   return (
//     <nav className="view-nav">
//       <div className="nav-list">
//         <Menu
//           mode="horizontal"
//           defaultSelectedKeys="recommand"
//           style={{ borderBottom: "none" }}
//         >
//           <Menu.Item key="recommand">
//             <Link to="/">推荐</Link>
//           </Menu.Item>
//           {categoryList.map((category) => (
//             <Menu.Item key={category.id}>
//               <Popover
//                 placement="bottomLeft"
//                 content={<Tags categoryId={category.id} />}
//               >
//                 <Link to={`/${category.title}`}>{category.name}</Link>
//               </Popover>
//             </Menu.Item>
//           ))}
//         </Menu>
//       </div>
//     </nav>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCategoryList();
  }
  render() {
    const { categoryList } = this.props;
    return (
      <nav className="view-nav">
        <div className="nav-list">
          <Menu
            mode="horizontal"
            defaultSelectedKeys="recommand"
            style={{ borderBottom: "none" }}
          >
            <Menu.Item key="recommand">
              <Link to="/">推荐</Link>
            </Menu.Item>
            {categoryList.map((category) => (
              <Menu.Item key={category.id}>
                <Popover
                  placement="bottomLeft"
                  content={
                    <Tags
                      categoryId={category.id}
                      categoryTitle={category.title}
                    />
                  }
                >
                  <Link to={`/${category.title}`}>{category.name}</Link>
                </Popover>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    categoryList: state.tag.categoryItems,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCategoryList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
