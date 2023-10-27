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
        "https://api.unsplash.com/photos/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY&per_page=8&page=" +
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
        "https://api.unsplash.com/photos/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY&per_page=8&page=" +
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

  // onClick search button
  searchTrigger = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY&query=" +
          this.state.search_query +
          "&per_page=8&page=" +
          this.state.page
      )
      .then((res) =>
        this.setState({
          searching: true,
          photos: res.data.results,
          loading: false,
          page: 2,
          total_found: res.data.total,
          total_found_pages: res.data.total_pages,
        })
      );
  };

  loadNextSearchPage = (e) => {
    axios
      .get(
        "https://api.unsplash.com/search/photos/?client_id=R6TMlKwXQK-EvFlH2bl3KQqrC3_H57YZmJq8XzyrAsY&query=" +
          this.state.search_query +
          "&per_page=8&page=" +
          this.state.page
      )
      .then((res) =>
        this.setState({
          photos: res.data.results,
          loading: false,
          page: this.state.page + 1,
          searching: true,
          total_found: res.data.total,
          total_found_pages: res.data.total_pages,
        })
      );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    var searchHeading = "";
    var searchBtnMarkup = "";
    var searchinfo = "";

    if (this.state.searching === true) {
      searchHeading = (
        <h2>
          You have searched with <i>{this.state.search_query}</i>
        </h2>
      );
      searchBtnMarkup = (
        <button className="btn btn-success" onClick={this.loadNextSearchPage}>
          load Page {this.state.page}
        </button>
      );
      searchinfo = (
        <span>
          Total found {this.state.total_found} | Page {this.state.page - 1} of{" "}
          {this.state.total_found_pages}{" "}
        </span>
      );
    } else {
      searchHeading = <h2>Latest Photos</h2>;
      searchBtnMarkup = (
        <button className="btn btn-success" onClick={this.loadNextPage}>
          load Page {this.state.page}
        </button>
      );
      searchinfo = "";
    }

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
              {searchHeading} {searchinfo}
            </div>

            <div className="col col-auto my-auto">
              <form action="" onSubmit={this.searchTrigger}>
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
              <div className="load-more-btn">{searchBtnMarkup}</div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
