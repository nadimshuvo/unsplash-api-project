import axios from "axios";
import React, { Component } from "react";

export default class LatestPhotos extends Component {
  state = {
    photos: [],
    page: 1,
    loading: true,
    search_query: "",
    searching: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY&per_page=16&page=" +
          this.state.page
      )
      .then((res) =>
        this.setState({
          photos: res.data,
          page: this.state.page + 1,
          loading: false,
        })
      );
  }

  // click on the next page
  loadNextPage = (e) => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY&per_page=16&page=" +
          this.state.page
      )
      .then((res) =>
        this.setState({
          photos: res.data,
          loading: false,
          page: this.state.page + 1,
        })
      );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // when searching
  searchQuery = (e) => {
    this.setState({
      search_query: e.target.value,
    });
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div className="row text-center">
          <div className="col">Loading Photos</div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="row top-heading">
            <div className="col my-auto">
              <h2>Latest Photos</h2>
            </div>

            <div className="col col-auto my-auto">
              <form action="">
                <input
                  type="text"
                  value={this.state.search_query}
                  onChange={this.searchQuery}
                  placeholder="Search keyword"
                />
                <input type="submit" value="search" />
              </form>
            </div>
          </div>

          <div className="row">
            {this.state.photos.map((photo) => (
              <div className="col-lg-3" key={photo.id}>
                <div className="single-photo-item">
                  <a href="/" className="d-block">
                    <div className="image-wrapper">
                      <img src={photo.urls.small} alt={photo.description} />
                    </div>
                    <h5>{photo.description}</h5>
                    <p className="cat-name">
                      by - {photo.user.first_name} {photo.user.last_name}
                    </p>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="load-more-btn">
                <button className="btn btn-success" onClick={this.loadNextPage}>
                  load Page {this.state.page}
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
